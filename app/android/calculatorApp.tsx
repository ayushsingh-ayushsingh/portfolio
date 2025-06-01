"use client";

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface CalculatorAppProps {
    onClose: () => void;
}

export default function CalculatorApp({ onClose }: CalculatorAppProps) {
    const [display, setDisplay] = useState('0');
    const [previousValue, setPreviousValue] = useState<number | null>(null);
    const [operation, setOperation] = useState<string | null>(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);
    const [history, setHistory] = useState('');

    const formatDisplayValue = (value: string): string => {
        const MAX_DISPLAY_LENGTH = 12;
        if (value === "Infinity" || value === "-Infinity" || value === "NaN") {
            return "Error";
        }
        if (value.length > MAX_DISPLAY_LENGTH) {
            const num = parseFloat(value);
            if (Math.abs(num) > 1e9 || (Math.abs(num) < 1e-6 && num !== 0)) {
                return num.toExponential(5);
            }
            const rounded = parseFloat(num.toPrecision(MAX_DISPLAY_LENGTH - 4));
            if (String(rounded).length <= MAX_DISPLAY_LENGTH) return String(rounded);
            return value.substring(0, MAX_DISPLAY_LENGTH) + "...";
        }
        return value;
    };

    const inputNumber = (numStr: string) => {
        if (display === "Error") {
            setDisplay(numStr);
            setHistory('');
            setWaitingForOperand(false);
            return;
        }
        let newDisplay;
        if (waitingForOperand) {
            newDisplay = numStr;
            setWaitingForOperand(false);
        } else {
            newDisplay = display === '0' ? numStr : display + numStr;
        }
        if (newDisplay.replace(/[.-]/g, '').length <= 15) {
            setDisplay(newDisplay);
        }
    };

    const calculate = (first: number, second: number, op: string): number => {
        let result;
        switch (op) {
            case '+': result = first + second; break;
            case '-': result = first - second; break;
            case '×': result = first * second; break;
            case '÷': result = second !== 0 ? first / second : Infinity; break;
            default: return second;
        }
        const resultStr = String(result);
        if (resultStr.includes('.') && resultStr.split('.')[1].length > 8) {
            return parseFloat(result.toFixed(8));
        }
        return result;
    };

    const inputOperation = (nextOperation: string) => {
        if (display === "Error") return;

        const inputValue = parseFloat(display);

        if (previousValue === null) {
            setPreviousValue(inputValue);
            setHistory(`${formatDisplayValue(String(inputValue))} ${nextOperation}`);
        } else if (operation) {
            const currentValue = previousValue;
            const newValue = calculate(currentValue, inputValue, operation);

            setHistory(`${formatDisplayValue(String(currentValue))} ${operation} ${formatDisplayValue(String(inputValue))} = ${formatDisplayValue(String(newValue))}`);
            setDisplay(String(newValue));
            setPreviousValue(newValue);
            setHistory(prev => `${prev} ${formatDisplayValue(String(newValue))} ${nextOperation}`);
        } else {
            setPreviousValue(inputValue);
            setHistory(`${formatDisplayValue(String(inputValue))} ${nextOperation}`);
        }
        setWaitingForOperand(true);
        setOperation(nextOperation);
    };

    const performCalculation = () => {
        if (display === "Error" || previousValue === null || !operation) return;

        const inputValue = parseFloat(display);
        const newValue = calculate(previousValue, inputValue, operation);

        setHistory(`${formatDisplayValue(String(previousValue))} ${operation} ${formatDisplayValue(String(inputValue))} =`);
        setDisplay(String(newValue));
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(true);
    };

    const clearAll = () => {
        setDisplay('0');
        setPreviousValue(null);
        setOperation(null);
        setWaitingForOperand(false);
        setHistory('');
    };

    const clearEntry = () => {
        if (display === "Error") {
            clearAll();
        } else {
            setDisplay('0');
            if (!waitingForOperand) {
                clearAll();
            }
        }
    };

    const inputDot = () => {
        if (display === "Error") {
            setDisplay('0.');
            setHistory('');
            setWaitingForOperand(false);
            return;
        }
        if (waitingForOperand) {
            setDisplay('0.');
            setWaitingForOperand(false);
        } else if (display.indexOf('.') === -1) {
            setDisplay(display + '.');
        }
    };

    const toggleSign = () => {
        if (display === "Error" || display === '0') return;
        const newValue = parseFloat(display) * -1;
        setDisplay(String(newValue));
    };

    const Button = ({
        onClick,
        className = '',
        children,
        ariaLabel
    }: {
        onClick: () => void;
        className?: string;
        children: React.ReactNode;
        ariaLabel?: string;
    }) => (
        <button
            onClick={onClick}
            aria-label={ariaLabel || (typeof children === 'string' ? children : undefined)}
            className={`h-[7.5vh] rounded-[2vh] text-[2.8vh] font-medium active:scale-95 transition-transform duration-100 ease-in-out focus:outline-none focus:ring-[0.3vh] focus:ring-primary/60 flex justify-center items-center ${className}`}
        >
            {children}
        </button>
    );

    return (
        <div className="h-[86vh] w-full bg-background rounded-b-[3vh] p-[2vh] flex flex-col text-foreground">
            <div className="flex items-center justify-between mb-[1.5vh]">
                <button
                    onClick={onClose}
                    aria-label="Close Calculator"
                    className="text-foreground p-[1vh] hover:bg-muted rounded-[1vh] transition-colors"
                >
                    <ArrowLeft className="w-[3.5vh] h-[3.5vh]" />
                </button>
                <h1 className="text-[2.2vh] font-semibold">Calculator</h1>
                <div className="w-[calc(3.5vh+2*1vh)]" />
            </div>

            <div className="bg-muted/30 rounded-[2vh] p-[1.5vh] mb-[2vh] shadow-inner flex flex-col justify-end h-[16vh]">
                <div className="text-muted-foreground text-right text-[1.8vh] h-[3vh] overflow-hidden text-ellipsis whitespace-nowrap px-[1vh]">
                    {formatDisplayValue(history)}
                </div>
                <div className="text-foreground text-right text-[5vh] font-light h-[8vh] overflow-hidden text-ellipsis whitespace-nowrap flex items-center justify-end px-[1vh]">
                    {formatDisplayValue(display)}
                </div>
            </div>

            <div className="grid grid-cols-4 gap-[1.5vh] flex-grow">
                <Button onClick={clearAll} className="bg-destructive/80 hover:bg-destructive/90 text-destructive-foreground" ariaLabel="All Clear">AC</Button>
                <Button onClick={clearEntry} className="bg-muted hover:bg-muted/80" ariaLabel="Clear Entry">CE</Button>
                <Button onClick={toggleSign} className="bg-muted hover:bg-muted/80" ariaLabel="Toggle Sign">±</Button>
                <Button onClick={() => inputOperation("÷")} className="bg-primary hover:bg-primary/90 text-primary-foreground" ariaLabel="Divide">÷</Button>

                <Button onClick={() => inputNumber("7")} className="bg-muted/50 hover:bg-muted/70">7</Button>
                <Button onClick={() => inputNumber("8")} className="bg-muted/50 hover:bg-muted/70">8</Button>
                <Button onClick={() => inputNumber("9")} className="bg-muted/50 hover:bg-muted/70">9</Button>
                <Button onClick={() => inputOperation("×")} className="bg-primary hover:bg-primary/90 text-primary-foreground" ariaLabel="Multiply">×</Button>

                <Button onClick={() => inputNumber("4")} className="bg-muted/50 hover:bg-muted/70">4</Button>
                <Button onClick={() => inputNumber("5")} className="bg-muted/50 hover:bg-muted/70">5</Button>
                <Button onClick={() => inputNumber("6")} className="bg-muted/50 hover:bg-muted/70">6</Button>
                <Button onClick={() => inputOperation("-")} className="bg-primary hover:bg-primary/90 text-primary-foreground" ariaLabel="Subtract">-</Button>

                <Button onClick={() => inputNumber("1")} className="bg-muted/50 hover:bg-muted/70">1</Button>
                <Button onClick={() => inputNumber("2")} className="bg-muted/50 hover:bg-muted/70">2</Button>
                <Button onClick={() => inputNumber("3")} className="bg-muted/50 hover:bg-muted/70">3</Button>
                <Button onClick={() => inputOperation("+")} className="bg-primary hover:bg-primary/90 text-primary-foreground" ariaLabel="Add">+</Button>

                <Button onClick={() => inputNumber("0")} className="col-span-2 bg-muted/50 hover:bg-muted/70">0</Button>
                <Button onClick={inputDot} className="bg-muted/50 hover:bg-muted/70" ariaLabel="Decimal">.</Button>
                <Button onClick={performCalculation} className="bg-primary hover:bg-primary/90 text-primary-foreground" ariaLabel="Equals">=</Button>
            </div>
        </div>
    );
}