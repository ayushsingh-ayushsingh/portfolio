import { CalendarIcon, Linkedin, Mail, Download, Github, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link"
import { MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator"
import { FlipWords } from "../ui/flip-words";

export function FlipHelloWords() {
    const words = [
        "Námaste,",
        "Hello,",
        "Ólá,",
        "Nómóskar,",
        "Bonjour,",
        "Hyálo,",
        "Nómáskar,",
        "Hola,",
        "Námaskára,",
        "Ciáo,",
        "Namaskár,",
        "Saláam,",
        "Námaste,",
        "Ciáo,",
        "Namaskáram,"
    ];

    return (
        <FlipWords words={words} />
    );
}

export function Hero() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full mb-20">
                <div className="flex items-center justify-center w-full relative pt-24">
                    <div className="relative w-30 h-30">
                        <img
                            src="/AyushSingh.jpg"
                            alt="Ayush Singh"
                            width={100}
                            height={100}
                            className="w-full h-full rounded-full absolute transition-opacity ease-in-out saturate-120 brightness-110"
                        />
                        <img
                            src="/AyushGhibili.jpg"
                            alt="Ayush Ghibili"
                            width={100}
                            height={100}
                            className="w-full h-full rounded-full absolute opacity-0 transition-opacity duration-300 ease-in-out saturate-70 hover:opacity-100"
                        />
                    </div>
                    <div className="flex flex-col h-20 px-4 mb-6">
                        <div>
                            <div className="space-y-1">
                                <div className="flex flex-col items-center justify-center">
                                    <div className="text-3xl text-muted-foreground items-center gap-2">
                                        <FlipHelloWords /> I&apos;m
                                        <br />
                                        <span className="text-4xl font-semibold text-primary">
                                            Ayush Singh
                                        </span>
                                        <br />
                                        <span className="text-xl font-light text-muted-foreground">
                                            Aa.yoo.sh
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-6">
                    <div className="text-lg text-muted-foreground flex items-center gap-2">
                        <span>
                            <DeveloperHoverCard />
                        </span>
                        from
                        <MapPin className="w-5 h-5" />
                        <span className="underline underline-offset-3 hover:cursor-pointer hover:text-primary decoration-0">
                            <BhopalHoverCard />
                        </span>
                    </div>
                </div>
                <div>
                    <SeparatorSocials />
                </div>
            </div>
        </div>
    )
}

export function SeparatorSocials() {
    return (
        <div>
            <Separator className="my-4" />
            <div className="flex h-6 items-center space-x-4">
                <div>
                    <a href="/Ayush_Singh_Resume.pdf" download>
                        <Button className="text-md bg-accent text-foreground/80 hover:bg-accent/80 cursor-pointer">
                            <Download className="w-4 h-4 mr-2" strokeWidth={3} />
                            Resume
                        </Button>
                    </a>
                </div>
                <Separator orientation="vertical" />
                <div>
                    <Github className="hover:text-muted-foreground cursor-pointer" onClick={() => window.open("https://github.com/ayushsingh-ayushsingh", "_blank")} />
                </div>
                <Separator orientation="vertical" />
                <div>
                    <Mail className="hover:text-muted-foreground cursor-pointer" onClick={() => window.open("mailto:ayushpno@gmail.com", "_blank")} />
                </div>
                <Separator orientation="vertical" />
                <div>
                    <Linkedin className="hover:text-muted-foreground cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/ayush-singh-357272260/", "_blank")} />
                </div>
                <Separator orientation="vertical" />
                <div>
                    <Facebook className="hover:text-muted-foreground cursor-pointer" onClick={() => window.open("https://www.facebook.com/profile.php?id=61572855425846", "_blank")} />
                </div>
            </div>
        </div>
    )
}


export function DeveloperHoverCard() {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link" className="underline underline-offset-3 hover:cursor-pointer hover:text-primary/75 decoration-0 text-lg p-0 text-muted-foreground font-normal">
                    Full-Stack Developer
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4 text-foreground">
                    <div className="space-y-1">
                        <p className="text-md pb-1">
                            Next.js, React, MongoDB and Node.js.
                            <br />
                            Specializing in <span className="underline decoration-0 underline-offset-3 decoration-muted-foreground/50">React and Frontend</span>.
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                Started development in 2023
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}

export function BhopalHoverCard() {
    return (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="link" className="underline underline-offset-3 hover:cursor-pointer hover:text-primary/75 decoration-0 text-lg p-0 text-muted-foreground font-normal">
                    Bhopal, India
                </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4 text-foreground">
                    <div className="space-y-1">
                        <p className="text-md pb-1">
                            Learning, Building, Working...
                            <br />
                            Currently Intern at <Link href="http://wewinlimited.com/" target="_blank" className="underline decoration-0 underline-offset-3 decoration-muted-foreground/50">We Win Limited</Link>.
                        </p>
                        <div className="flex items-center pt-2">
                            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
                            <span className="text-xs text-muted-foreground">
                                In Bhopal since November, 2022
                            </span>
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    )
}
