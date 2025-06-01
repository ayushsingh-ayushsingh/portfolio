"use client"

import { useState } from "react";
import TopBar from "./topbar";
import Widget from "./widget";
import { DuckDuckGoWidget } from "./duckDuckGo";
import CalculatorApp from "./calculatorApp";
import TicTacToeApp from "./ticTacToe";
import {
    GithubDark,
    Linkedin,
    GmailLight,
    Youtube,
    Npm,
    ChatGpt,
    RoundCalculate,
    TicTacToe as TicTacToeIcon
} from "./icons";

export default function Phone() {
    const [showCalculator, setShowCalculator] = useState(false);
    const [showTicTacToe, setShowTicTacToe] = useState(false);

    const allApps = [
        {
            name: "Github",
            icon: GithubDark,
            url: "https://www.github.com/ayushsingh-ayushsingh",
        },
        {
            name: "Linkedin",
            icon: Linkedin,
            url: "https://www.linkedin.com/in/ayush-singh-357272260/",
        },
        {
            name: "Gmail",
            icon: GmailLight,
            url: "mailto:ayushpno+portfolio@gmail.com",
        },
        {
            name: "NpmJS",
            icon: Npm,
            url: "https://www.npmjs.com/~ayushsingh-ayushsingh",
        },
        {
            name: "ChatGPT",
            icon: ChatGpt,
            url: "https://www.chatgpt.com",
        },
        {
            name: "Calculator",
            icon: RoundCalculate,
        },
        {
            name: "Tic Tac Toe",
            icon: TicTacToeIcon,
        },
        {
            name: "Youtube",
            icon: Youtube,
            url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
    ];

    const handleAppClick = (app: typeof allApps[0]) => {
        if (app.name === "Calculator") {
            setShowCalculator(true);
        } else if (app.name === "Tic Tac Toe") {
            setShowTicTacToe(true);
        } else if (app.url) {
            window.open(app.url, "_blank", "noopener,noreferrer");
        }
    };

    return (
        <div className="h-screen flex justify-center items-center pr-[8vh] pb-[2vh] pt-[8vh]" >
            <div className="h-[90vh] w-[45vh] bg-foreground/50 backdrop-blur-xl shadow-2xl flex justify-center items-center rounded-[5vh] p-[1.5vh]">
                <div className="h-full w-full border border-border/25 rounded-[3.5vh] overflow-hidden flex flex-col">
                    <div className="h-[4vh] w-full flex-shrink-0">
                        <TopBar />
                    </div>
                    <div className="flex-grow w-full bg-background relative overflow-hidden">
                        {showCalculator ? (
                            <CalculatorApp onClose={() => setShowCalculator(false)} />
                        ) : showTicTacToe ? (
                            <TicTacToeApp onClose={() => setShowTicTacToe(false)} />
                        ) : (
                            <div className="h-full flex flex-col">
                                <div className="flex-grow p-[2vh] flex flex-col justify-between overflow-y-auto">
                                    <div>
                                        <Widget />
                                        <div className="flex justify-center text-foreground my-[3vh]">
                                            <div className="grid grid-cols-4 gap-x-[1.5vh] gap-y-[2.5vh] w-full max-w-[38vh]">
                                                {allApps.map((app) => (
                                                    <button
                                                        key={app.name}
                                                        onClick={() => handleAppClick(app)}
                                                        className="flex flex-col items-center justify-start w-full aspect-[3/4] p-[0.5vh] rounded-[2vh] hover:bg-muted/50 active:bg-muted/70 transition-all duration-150 group focus:outline-none focus:ring-[0.3vh] focus:ring-primary/50 cursor-pointer"
                                                        aria-label={app.name}
                                                    >
                                                        <div className="w-[6.5vh] h-[6.5vh] flex justify-center items-center bg-muted/20 group-hover:bg-muted/30 rounded-[1.8vh] mb-[1vh] transition-colors duration-150 shadow-sm">
                                                            <app.icon className="w-[4.5vh] h-[4.5vh] text-foreground" />
                                                        </div>
                                                        <span className="text-foreground text-[1.4vh] font-medium text-center w-full truncate leading-tight px-[0.2vh]">
                                                            {app.name}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-foreground mt-[auto] pt-[2vh]">
                                        <DuckDuckGoWidget />
                                    </div>
                                </div>
                                <div className="h-[4vh] w-full flex-shrink-0 flex justify-center items-center border-t border-border bg-background">
                                    <div className="h-[0.8vh] w-[18vh] bg-foreground/30 rounded-full"></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}