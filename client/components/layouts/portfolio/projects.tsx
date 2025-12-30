"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
// import Image from "next/image";

const projects = [
  {
    name: "Monthly Progress Tracker",
    href: "https://mpr-pi.vercel.app",
    description:
      "Track daily work progress and generate structured monthly reports (MPR) as PDFs.",
    image: "/mpr.png",
    technologies: [
      "NextJS",
      "ShadCN",
      "Tailwind",
      "Vercel",
      "Neon",
      "Postgres",
      "BetterAuth",
      "Groq AI API",
    ],
  },
  {
    name: "CogniAIz.com",
    href: "https://cogniaiz.com",
    description:
      "Connecting people and businesses through Voice AI Agents. This was freelancing project where I built the UI.",
    image: "/cogniaiz.png",
    technologies: [
      "React",
      "ShadCN",
      "Tailwind",
      "Vite",
      "i18n",
      "Motion",
      "Aceternity UI",
    ],
  },
  {
    name: "LLM - PDF (npm package)",
    href: "https://npmjs.com/llm-pdf",
    description:
      "A command line tool to generate text content and Images using AI with PDF and Markdown Export. Experimental CLI project.",
    image: "/npmjs.png",
    technologies: [
      "Clack",
      "md-to-pdf",
      "Pico Colors",
      "Deepseek",
      "Together-AI",
      "Llama",
      "Flux",
    ],
  },
];

function Projects() {
  const [value, setValue] = useState([0]);
  return (
    <div className="mx-auto border-x w-full max-w-4xl p-6">
      <Accordion
        className="w-full"
        value={value}
        onValueChange={setValue}
        defaultValue={[0]}
      >
        {projects.map((item, pos) => (
          <AccordionItem key={pos} value={pos}>
            <AccordionTrigger
              className={cn(
                "text-xl font-light",
                pos == value[0] && "font-semibold"
              )}
            >
              {item.name}
            </AccordionTrigger>
            <AccordionPanel>
              <div
                className="flex-col justify-center group-hover:blur-[5px] hover:opacity-100 hover:blur-none transition-all duration-300 grid sm:grid-cols-2 gap-6"
                key={pos}
              >
                <div className="flex flex-col justify-around">
                  <Link href={item.href} target="_blank" className="w-16">
                    <AnimateIcon
                      animateOnHover
                      delay={300}
                      className="flex items-center hover:cursor-pointer group mb-1 hover:underline underline-offset-4"
                    >
                      <div className="pr-2 text-primary">Visit</div>
                      <ArrowRight
                        animation="out"
                        size={16}
                        strokeWidth={1.2}
                        className="text-foreground -rotate-45 group-hover:animate-animateOnHover"
                      />
                    </AnimateIcon>
                  </Link>
                  <div className="w-full text-muted-foreground py-2">
                    {item.description}
                  </div>
                  <div className="mt-4">
                    <div className="flex flex-col items-center gap-2">
                      <div className="flex w-full flex-wrap gap-2">
                        {item.technologies.map((technology, idx) => {
                          return (
                            <Badge
                              variant="secondary"
                              className="border-primary/10"
                              key={idx}
                            >
                              {technology}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border p-1 rounded-lg overflow-hidden group">
                  <img
                    src={item.image}
                    className="rounded-md object-cover object-center transition-transform duration-300 group-hover:scale-120 scale-110 dark:brightness-80"
                    alt={item.name}
                    height={540}
                    width={960}
                  />
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
      <div className="flex justify-end">
        <Button asChild variant={"secondary"} size={"lg"}>
          <Link
            href={"https://github.com/ayushsingh-ayushsingh"}
            target="_blank"
          >
            <AnimateIcon
              animateOnHover
              delay={300}
              className="flex items-center hover:cursor-pointer group mb-1 hover:underline underline-offset-4"
            >
              <div className="pr-2 text-primary">More Projects</div>
              <ArrowRight
                animation="out"
                size={16}
                strokeWidth={1.2}
                className="text-foreground -rotate-45 group-hover:animate-animateOnHover"
              />
            </AnimateIcon>
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Projects;
