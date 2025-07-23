"use client";

import { Button } from "@/components/ui/button"

export function Navbar() {
    return (
        <nav>
            <ul className="flex flex-row justify-center items-center p-1 fixed top-0 left-0 right-0 z-1 bg-gradient-to-bl from-background to-background/60 backdrop-blur-xl">
                <li>
                    <Button variant="link" className="font-bold text-lg hover:cursor-pointer">AYUSH</Button>
                </li>
                <li>
                    <a href="https://www.github.com/ayushsingh-ayushsingh" target="_blank" rel="noopener noreferrer">
                        <Button variant="link" className="text-lg font-normal hover:cursor-pointer text-muted-foreground">About</Button>
                    </a>
                </li>
                <li>
                    <a href="mailto:ayushpno@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="link" className="text-lg font-normal hover:cursor-pointer text-muted-foreground">Contact</Button>
                    </a>
                </li>
                <li>
                    <a href="https://www.github.com/ayushsingh-ayushsingh?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <Button variant="link" className="text-lg font-normal hover:cursor-pointer text-muted-foreground">Projects</Button>
                    </a>
                </li>
            </ul>
        </nav>
    )
}
