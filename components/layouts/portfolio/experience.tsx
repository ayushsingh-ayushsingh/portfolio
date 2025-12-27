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
import Image from "next/image";

const experiences = [
  {
    name: "We Win Limited, Bhopal",
    href: "https://wewinlimited.com",
    comapnyDescription: "A Cloud & AI company based in Bhopal.",
    role: "Intern - MERN Stack",
    taskDescription:
      "I Worked on WeWinERP, building dashboards, charts and UX for the web application.",
    image: "/wewin.png",
    technologies: [
      "MySQL",
      "ExpressJS",
      "React",
      "NodeJS",
      "Tailwind",
      "ShadCN",
      "Vite",
    ],
  },
  {
    name: "CogniAIz.com",
    href: "https://cogniaiz.com",
    comapnyDescription: "An AI company simplifying CX with agents.",
    role: "Freelancer - React Developer",
    taskDescription:
      "I worked on UI/UX, accessibility and added internationalisation with i18n.",
    image: "/cogniaiz.png",
    technologies: [
      "MySQL",
      "ExpressJS",
      "React",
      "NodeJS",
      "Tailwind",
      "ShadCN",
      "Vite",
    ],
  },
];

function Experiences() {
  const [value, setValue] = useState([0]);
  return (
    <div className="mx-auto border-x w-full max-w-4xl">
      <Accordion
        className="w-full px-6"
        value={value}
        onValueChange={setValue}
        defaultValue={[0]}
      >
        {experiences.map((item, pos) => (
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
                  <div className="w-full text-muted-foreground py-1">
                    {item.comapnyDescription}
                  </div>
                  <div className="w-full text-muted-foreground py-1">
                    {item.taskDescription}
                  </div>
                  <div className="w-full text-muted-foreground py-1">
                    {item.role}
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
                  <Image
                    src={item.image}
                    className="rounded-md object-cover object-center transition-transform duration-300 group-hover:scale-120 scale-110 dark:brightness-80"
                    alt="image"
                    height={540}
                    width={960}
                  />
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Experiences;
