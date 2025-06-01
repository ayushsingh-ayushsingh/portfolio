'use client';

import { useState, useRef, useEffect } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Bot, SendHorizontal } from "lucide-react";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "../ui/label";
import { getTogetherResponse } from "@/components/layouts/togetherAi";

export function HideAndSeek() {
    const [isClicked, setIsClicked] = useState(false);
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 1080);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="text-center text-sm text-muted-foreground fixed bottom-0 right-0 mb-4 mr-4">
            {isWideScreen && (
                <Link href="/hide-and-seek" target="_blank">
                    <Button variant="secondary" className="text-lg font-normal hover:cursor-pointer" onClick={() => setIsClicked(!isClicked)}>
                        Hide & Seek
                    </Button>
                </Link>
            )}
        </div>
    );
}

export function DropdownMenuDemo() {
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState<
        { sender: "user" | "bot"; text: string }[]
    >([]);
    const [loading, setLoading] = useState(false);

    const messageEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);

    const handleSend = async () => {
        if (!question.trim() || loading) return;

        const newMessages = [...messages, { sender: "user" as const, text: question }];
        setMessages(newMessages);
        setQuestion("");
        setLoading(true);

        try {
            const botReply = await getTogetherResponse(question);
            setMessages([...newMessages, { sender: "bot" as const, text: botReply }]);
        } catch (error) {
            setMessages([
                ...newMessages,
                { sender: "bot" as const, text: `Sorry, something went wrong. ${error}` },
            ]);
        }

        setLoading(false);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div>
                    <Button variant="secondary" className="hidden sm:flex text-lg font-normal hover:cursor-pointer">
                        Bot <Bot className="ml-2" />
                    </Button>
                    <Button variant="secondary" className="flex sm:hidden text-lg font-normal hover:cursor-pointer">
                        <Bot />
                    </Button>
                </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-[350px] p-0 my-2 mx-4">
                <style>{`
                    .scrollbar-hide::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-hide {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
                <div className="flex flex-col h-[400px]">
                    <div className="flex-1 overflow-y-auto p-3 space-y-2 scrollbar-hide">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 text-sm whitespace-pre-wrap ${msg.sender === "user"
                                        ? "bg-accent text-foreground rounded-l-lg rounded-tr-lg"
                                        : "bg-accent text-foreground rounded-r-lg rounded-tl-lg"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {loading && (
                            <div className="text-xs text-gray-500 self-start">Typing...</div>
                        )}
                        <div ref={messageEndRef} />
                    </div>
                    <div className="border-t p-3 flex items-center gap-2">
                        <Label>
                            <Bot size={24} />
                        </Label>
                        <Input
                            type="text"
                            placeholder="Ask anything"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            className="flex-1"
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        />
                        <Button variant="secondary" onClick={handleSend} disabled={loading}>
                            <SendHorizontal size={20} />
                        </Button>
                    </div>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export function Chatbot() {
    const [isWideScreen, setIsWideScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsWideScreen(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {isWideScreen && (
                <div className="fixed bottom-12 right-0 mb-4 mr-4 text-center text-sm text-muted-foreground">
                    <DropdownMenuDemo />
                </div>
            )}
            {!isWideScreen && (
                <div className="fixed bottom-0 right-0 mb-4 mr-4 text-center text-sm text-muted-foreground">
                    <DropdownMenuDemo />
                </div>
            )}
            <HideAndSeek />
        </div>
    );
}
