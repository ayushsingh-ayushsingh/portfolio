"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Lightbulb } from "@/components/animate-ui/icons/lightbulb";
import { useThemeToggle } from "@/components/ui/skiper-ui/animated-theme-toggle";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

export default function BulbThemeToggle() {
  const variant = "circle";
  const start = "top-right";
  const blur = true;
  const gifUrl = "";

  const { toggleTheme } = useThemeToggle({
    variant,
    start,
    blur,
    gifUrl,
  });

  return (
    <AnimateIcon animateOnHover className="z-10">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            onClick={toggleTheme}
            variant={"link"}
            aria-label="theme-toggle"
            size={"icon-sm"}
            className="rounded-full"
          >
            <Lightbulb className={"text-foreground size-5"} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Theme Toggle</p>
        </TooltipContent>
      </Tooltip>
      <p className="sr-only">Toggle Theme</p>
    </AnimateIcon>
  );
}
