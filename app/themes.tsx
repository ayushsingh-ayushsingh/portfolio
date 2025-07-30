"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
    Moon,
    PenTool,
    Sun,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import "./globals.css";

import "./customCSS/default.css";
import "./customCSS/bubbleGum.css";
import "./customCSS/cleanSlate.css";
import "./customCSS/modernMinimal.css";
import "./customCSS/neoBrutalism.css";
import "./customCSS/oceanBreeze.css";
import "./customCSS/perpetuity.css";

import "./customCSS/defaultDark.css";
import "./customCSS/bubbleGumDark.css";
import "./customCSS/cleanSlateDark.css";
import "./customCSS/modernMinimalDark.css";
import "./customCSS/neoBrutalismDark.css";
import "./customCSS/oceanBreezeDark.css";
import "./customCSS/perpetuityDark.css";

const baseThemes = [
    "default",
    "bubbleGum",
    "cleanSlate",
    "modernMinimal",
    "neoBrutalism",
    "oceanBreeze",
    "perpetuity",
];

const allThemes = [...baseThemes, ...baseThemes.map(t => `${t}Dark`)];

export function ThemeChanger() {
    const [activeTheme, setActiveTheme] = useState("cleanSlate");
    const [themeMode, setThemeMode] = useState<"light" | "dark">("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "cleanSlate";
        const isDark = savedTheme.toLowerCase().endsWith("dark");

        document.body.classList.remove(...allThemes);

        document.documentElement.classList.toggle("dark", isDark);
        document.body.classList.add(savedTheme);

        setActiveTheme(savedTheme.replace(/Dark$/, ""));
        setThemeMode(isDark ? "dark" : "light");

        if (!localStorage.getItem("theme")) {
            localStorage.setItem("theme", "cleanSlate");
        }
    }, []);

    const toggleMode = () => {
        const newMode = themeMode === "light" ? "dark" : "light";
        setThemeMode(newMode);
        document.documentElement.classList.toggle("dark", newMode === "dark");

        const base = activeTheme;
        const newTheme = newMode === "dark" ? `${base}Dark` : base;

        document.body.classList.remove(...allThemes);
        document.body.classList.add(newTheme);
        localStorage.setItem("theme", newTheme);
    };

    const handleThemeChange = (themeName: string) => {
        const newTheme = themeMode === "dark" ? `${themeName}Dark` : themeName;

        document.body.classList.remove(...allThemes);
        document.body.classList.add(newTheme);
        document.documentElement.classList.toggle("dark", themeMode === "dark");

        setActiveTheme(themeName);
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div className="fixed top-10 md:top-2 bg-background text-muted-foreground right-0 m-2 z-50 flex gap-2">
            <Button
                variant="default"
                className="text-lg font-normal hover:cursor-pointer"
                onClick={toggleMode}
            >
                {themeMode === "light" ? (
                    <Moon className="w-6 h-6" />
                ) : (
                    <Sun className="w-6 h-6" />
                )}
            </Button>

            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="default"
                        className="text-lg font-normal hover:cursor-pointer"
                    >
                        <PenTool className="w-6 h-6" />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="w-[180px]">
                    <DropdownMenuGroup>
                        {baseThemes.map((themeName) => {
                            const formattedLabel = themeName
                                .replace(/([A-Z])/g, " $1")
                                .replace(/^./, (c) => c.toUpperCase());

                            return (
                                <DropdownMenuItem
                                    key={themeName}
                                    onClick={() => handleThemeChange(themeName)}
                                    className="px-0 py-0"
                                >
                                    <Button
                                        variant={
                                            activeTheme === themeName ? "secondary" : "link"
                                        }
                                        className="w-full justify-start"
                                    >
                                        {formattedLabel}
                                    </Button>
                                </DropdownMenuItem>
                            );
                        })}
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}