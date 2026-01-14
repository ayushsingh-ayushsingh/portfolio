"use client";

import { Maximize } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function MaximizeButton() {
  const toggleMaximize = () => {
    const root = document.documentElement;

    const elements = document.getElementsByClassName("hide-on-maximize");
    const isMaximized = root.classList.contains("maximized");
    const showOnMaximize = document.getElementById("show-on-maximize");

    if (!isMaximized) {
      root.classList.add("maximized");

      Array.from(elements).forEach((el) => el.classList.add("hidden"));
      showOnMaximize?.classList.remove("hidden");
    } else {
      root.classList.remove("maximized");

      Array.from(elements).forEach((el) => el.classList.remove("hidden"));
      showOnMaximize?.classList.add("hidden");
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            size="sm"
            variant="link"
            aria-label="maximize content"
            onClick={toggleMaximize}
          >
            <Maximize className="size-5" strokeWidth={1.8} />
          </Button>
        </TooltipTrigger>
        <TooltipContent>Maximize</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default MaximizeButton;
