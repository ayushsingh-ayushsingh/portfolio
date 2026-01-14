"use client";

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const TableOfContents = () => {
  const [numHeadings, setNumHeadings] = useState(0);

  useEffect(() => {
    setNumHeadings(document.querySelectorAll(".heading").length);
  });

  return (
    <div>
      {Array(numHeadings)
        .fill(0)
        .map((_, pos) => {
          return (
            <Button
              key={pos}
              variant={"ghost"}
              className="w-58 mx-1 text-left"
              onClick={() => {
                const element = document.querySelectorAll(".heading")[
                  pos
                ] as HTMLElement;
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
                element.classList.add(
                  "bg-cyan-50",
                  "text-cyan-800",
                  "rounded-md",
                  "transition",
                  "duration-750",
                  "ease-in-out"
                );
                setTimeout(() => {
                  element.classList.remove("bg-cyan-50", "text-cyan-800");
                }, 750);
              }}
            >
              <div className="w-full truncate text-left text-foreground/75">
                {document.querySelectorAll(".heading")[pos].textContent}
              </div>
            </Button>
          );
        })}
    </div>
  );
};

export default TableOfContents;
