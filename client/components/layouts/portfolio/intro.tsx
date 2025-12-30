"use client";

import { useState } from "react";
import { Volume2 } from "@/components/animate-ui/icons/volume-2";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

export function Intro() {
  const [speaking, setSpeaking] = useState(false);

  const handlePronunciationClick = () => {
    setSpeaking(true);

    const audio = new Audio("./ayush-singh-pronunciation.mp3");
    audio.play();

    setTimeout(() => {
      setSpeaking(false);
    }, 1000);
  };

  return (
    <div className="max-w-4xl w-full mx-auto border-x flex px-4">
      <div className="border-x p-1">
        <div className="border rounded-full p-1">
          <div className="size-36 md:size-48 flex text-6xl md:text-8xl text-chart-2 bg-chart-2/15 select-none items-center justify-center rounded-full border">
            AS
          </div>
        </div>
      </div>
      <div className="flex-col w-full border-r">
        <div
          className="h-1/2 flex items-end text-sm px-4 text-muted-foreground/40"
          aria-hidden
        />
        <hr />
        <div className="h-1/4 flex items-center select-none justify-between sm:justify-start">
          <div className="relative group hidden md:block w-60">
            <h1 className="text-lg md:text-3xl font-medium transition-opacity duration-300 ease-in-out group-hover:opacity-0 px-4 truncate">
              Ayush Singh
            </h1>
            <h1 className="text-3xl font-medium absolute left-0 top-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 h-full flex items-center px-4 truncate">
              /a&#x02D0;.ju&#x028A;ʃ/-/s&#x026A;ŋh/
            </h1>
          </div>
          <div className="md:hidden">
            <h1 className="text-lg font-medium pl-4">Ayush Singh</h1>
          </div>
          <button
            onClick={handlePronunciationClick}
            className="px-2"
            aria-label="Hear how to pronounce my name"
            disabled={speaking}
          >
            {speaking ? (
              <AnimateIcon animateOnView>
                <Volume2
                  strokeWidth={1.2}
                  className="size-5 mr-2 hover:text-muted-foreground"
                />
              </AnimateIcon>
            ) : (
              <Volume2
                strokeWidth={1.2}
                className="size-5 mr-2 hover:text-muted-foreground transition-all duration-300"
              />
            )}
          </button>
        </div>
        <hr />
        <div className="h-1/4 px-4 flex items-center">
          <div className="text-muted-foreground text-sm md:text-base truncate w-36 sm:w-full">
            Full-Stack Web Developer
          </div>
        </div>
      </div>
    </div>
  );
}
