"use client";

import { Github } from "lucide-react";
import { Mail } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import { Facebook, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <div>
            <footer className="flex flex-col justify-center items-center w-full h-10 text-muted-foreground mt-20">
                <div>
                    <Separator className="my-4" />
                    <div className="flex h-6 items-center space-x-4">
                        <Separator orientation="vertical" />
                        <div><Github className="hover:text-primary cursor-pointer" onClick={() => window.open("https://github.com/ayushsingh-ayushsingh", "_blank")} /></div>
                        <Separator orientation="vertical" />
                        <div><Mail className="hover:text-primary cursor-pointer" onClick={() => window.open("mailto:ayushpno@gmail.com", "_blank")} /></div>
                        <Separator orientation="vertical" />
                        <div><Linkedin className="hover:text-primary cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/ayush-singh-357272260/", "_blank")} /></div>
                        <Separator orientation="vertical" />
                        <div><Facebook className="hover:text-primary cursor-pointer" onClick={() => window.open("https://www.facebook.com/profile.php?id=61572855425846", "_blank")} /></div>
                    </div>
                </div>
                <p className="text-lg pt-4 py-4 text-muted-foreground">
                    &copy; {new Date().getFullYear()} Ayush Singh. All rights reserved.
                </p>
            </footer>
        </div>
    )
}
