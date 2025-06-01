"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowLeft } from "lucide-react";

interface TicTacToeAppProps {
    onClose: () => void;
}

type Player = "X" | "O";
type Cell = Player | null;

export default function TicTacToeApp({ onClose }: TicTacToeAppProps) {
    const [board, setBoard] = useState<Cell[]>(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<Player>("X");
    const [winner, setWinner] = useState<Player | "Draw" | null>(null);
    const [isComputerThinking, setIsComputerThinking] = useState(false);

    const PLAYER: Player = "X";
    const COMPUTER: Player = "O";

    const calculateWinner = useCallback((squares: Cell[]): Player | null => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }, []);

    const computerMove = useCallback(() => {
        setIsComputerThinking(true);

        const makeMove = () => {
            const availableMoves = board.map((cell, index) => cell === null ? index : -1).filter(index => index !== -1);
            if (availableMoves.length === 0) {
                setIsComputerThinking(false);
                return;
            }

            let bestMove = -1;

            for (const move of availableMoves) {
                const tempBoard = [...board];
                tempBoard[move] = COMPUTER;
                if (calculateWinner(tempBoard) === COMPUTER) {
                    bestMove = move;
                    break;
                }
            }

            if (bestMove === -1) {
                for (const move of availableMoves) {
                    const tempBoard = [...board];
                    tempBoard[move] = PLAYER;
                    if (calculateWinner(tempBoard) === PLAYER) {
                        bestMove = move;
                        break;
                    }
                }
            }

            if (bestMove === -1 && availableMoves.includes(4)) {
                bestMove = 4;
            }

            if (bestMove === -1) {
                const corners = [0, 2, 6, 8];
                const availableCorners = corners.filter(corner => availableMoves.includes(corner));
                if (availableCorners.length > 0) {
                    bestMove = availableCorners[Math.floor(Math.random() * availableCorners.length)];
                }
            }

            if (bestMove === -1) {
                const sides = [1, 3, 5, 7];
                const availableSides = sides.filter(side => availableMoves.includes(side));
                if (availableSides.length > 0) {
                    bestMove = availableSides[Math.floor(Math.random() * availableSides.length)];
                }
            }

            if (bestMove === -1 && availableMoves.length > 0) {
                bestMove = availableMoves[0];
            }

            if (bestMove !== -1) {
                const newBoard = [...board];
                newBoard[bestMove] = COMPUTER;
                setBoard(newBoard);

                const gameWinner = calculateWinner(newBoard);
                if (gameWinner) {
                    setWinner(gameWinner);
                } else if (!newBoard.includes(null)) {
                    setWinner("Draw");
                } else {
                    setCurrentPlayer(PLAYER);
                }
            }
            setIsComputerThinking(false);
        };

        setTimeout(makeMove, 100);

    }, [board, calculateWinner, PLAYER, COMPUTER]);

    useEffect(() => {
        if (currentPlayer === COMPUTER && !winner && !isComputerThinking) {
            computerMove();
        }
    }, [currentPlayer, winner, computerMove, isComputerThinking]);

    const handleClick = (index: number) => {
        if (board[index] || winner || currentPlayer === COMPUTER || isComputerThinking) return;

        const newBoard = [...board];
        newBoard[index] = PLAYER;
        setBoard(newBoard);

        const gameWinner = calculateWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
        } else if (!newBoard.includes(null)) {
            setWinner("Draw");
        } else {
            setCurrentPlayer(COMPUTER);
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer(PLAYER);
        setWinner(null);
        setIsComputerThinking(false);
    };

    const getStatusMessage = () => {
        if (winner) {
            if (winner === "Draw") return "It's a Draw!";
            return winner === PLAYER ? "You Win! (X)" : "Computer Wins! (O)";
        }
        if (currentPlayer === PLAYER) return "Your Turn (X)";
        return "Computer is thinking... (O)";
    };

    const CellButton = ({ value, onClick, index }: { value: Cell; onClick: () => void; index: number; }) => (
        <button
            onClick={onClick}
            disabled={!!value || !!winner || currentPlayer === COMPUTER || isComputerThinking}
            className={`w-[10vh] h-[10vh] bg-muted border border-border rounded-[2vh] 
            text-[5vh] font-bold flex items-center justify-center transition-all duration-150 active:scale-90 
            shadow-md hover:bg-accent focus:outline-none focus:ring-[0.3vh] focus:ring-primary focus:ring-opacity-50
            disabled:opacity-70`}
            aria-label={`Cell ${index + 1}, ${value ? `Contains ${value}` : 'Empty'}`}
        >
            {value === PLAYER && <span className="text-primary">{PLAYER}</span>}
            {value === COMPUTER && <span className="text-destructive">{COMPUTER}</span>}
        </button>
    );

    return (
        <div className="h-[86vh] w-full bg-background rounded-b-[3vh] p-[2vh] flex flex-col justify-between text-foreground">
            <div className="flex items-center justify-between mb-[2vh]">
                <button
                    onClick={onClose}
                    className="text-foreground p-[1vh] hover:bg-muted rounded-[1vh] transition-colors"
                    aria-label="Close Tic Tac Toe"
                >
                    <ArrowLeft className="w-[3.5vh] h-[3.5vh]" />
                </button>
                <h1 className="text-[2.5vh] font-semibold">Tic Tac Toe</h1>
                <div className="w-[calc(3.5vh+2*1vh)]" />
            </div>

            <div className="bg-muted rounded-[2vh] p-[2vh] mb-[3vh] h-[10vh] flex items-center justify-center shadow-inner">
                <p className="text-[2.2vh] font-medium text-center text-foreground">
                    {getStatusMessage()}
                </p>
            </div>

            <div className="flex-grow flex items-center justify-center">
                <div className="grid grid-cols-3 gap-[1.5vh] aspect-square w-auto max-w-[calc(3*10vh+2*1.5vh)] max-h-[calc(3*10vh+2*1.5vh)]">
                    {board.map((cell, index) => (
                        <CellButton key={index} index={index} value={cell} onClick={() => handleClick(index)} />
                    ))}
                </div>
            </div>


            <div className="mt-auto pt-[2vh]">
                {winner && (
                    <button
                        onClick={resetGame}
                        className="w-full bg-primary text-primary-foreground text-[2.2vh] py-[2vh] mb-[2vh] rounded-[2vh] font-semibold active:scale-95 transition-transform duration-150 shadow-lg hover:bg-primary/90"
                    >
                        Play Again
                    </button>
                )}
                {!winner && <div className="h-[calc(2.2vh + 4vh)]" />}
            </div>
            <div className="h-[1vh] w-full rounded-b-[3vh] mt-[1vh]" />
        </div>
    );
}