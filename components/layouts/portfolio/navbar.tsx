"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "@/components/animate-ui/icons/lightbulb";
import { useThemeToggle } from "@/components/ui/skiper-ui/animated-theme-toggle";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import { Heart } from "lucide-react";

export function PortfolioNavbar() {
  const variant = "rectangle";
  const start = "bottom-up";
  const blur = true;
  const gifUrl = "";

  const { toggleTheme } = useThemeToggle({
    variant,
    start,
    blur,
    gifUrl,
  });

  const scrollToCenter = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <nav className="flex justify-between items-center border-x max-w-4xl w-full mx-auto p-0">
      <div className="border-r rounded-none group p-2 px-3">
        <Heart
          className="fill-destructive size-5 text-destructive transition-all duration-300 group-hover:brightness-90 dark:brightness-80 dark:group-hover:brightness-100"
          strokeWidth={0}
        />
      </div>
      <div className="flex items-center p-1">
        <Button
          asChild
          variant={"link"}
          className="border-x rounded-none p-3"
          onClick={scrollToCenter}
        >
          <Link href="#projects">Projects</Link>
        </Button>
        <Button asChild variant={"link"} className="border-r rounded-none p-3">
          <Link href={`/Ayush_Singh_Resume.pdf`} target="_blank">
            Resume
          </Link>
        </Button>
        <AnimateIcon animateOnHover>
          <Button
            onClick={toggleTheme}
            variant={"link"}
            aria-label="theme-toggle"
            className="rounded-none ml-1"
          >
            <Lightbulb strokeWidth={1.2} />
          </Button>
          <p className="sr-only">Toggle Theme</p>
        </AnimateIcon>
      </div>
    </nav>
  );
}
