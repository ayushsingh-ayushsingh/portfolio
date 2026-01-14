"use client";

import Link from "next/link";
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

const education = [
  {
    name: "LNCT, Bhopal",
    href: "https://lnct.ac.in",
    degree: "B.Tech - Computer Science Engineering",
    specialization: "Specialization in AIML",
    university: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
    score: "CGPA - 8.33",
    duration: "2022 - 2026 (Expected)",
    image: "/lnct.png",
  },
  {
    name: "Dev Public School",
    href: "https://lnct.ac.in",
    degree: "Standard - 12th",
    specialization: "",
    university: "Central Board of Secondary Education, Delhi",
    score: "Percentage - 88.8%",
    duration: "2021 - 2022",
    image: "/dps.png",
  },

  {
    name: "Kendriya Vidyalaya",
    href: "https://jashpur.kvs.ac.in/en/",
    degree: "Standard - 10th",
    specialization: "",
    university: "Central Board of Secondary Education, Delhi",
    score: "Percentage - 92.8%",
    duration: "2019 - 2020",
    image: "/kv.png",
  },
];

function Education() {
  const [value, setValue] = useState([-1]);
  return (
    <div className="mx-auto border-x w-full max-w-4xl">
      <Accordion className="w-full px-6" value={value} onValueChange={setValue}>
        {education.map((item, pos) => (
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
                  <div className="w-full text-muted-foreground">
                    <p className="py-1">{item.university}</p>
                    <p className="py-1">{item.degree}</p>
                    {item.specialization && (
                      <p className="py-1">{item.specialization}</p>
                    )}
                    <p className="py-1">{item.score}</p>
                    <p className="py-1">{item.duration}</p>
                  </div>
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
                </div>
                <div className="border p-1 rounded-lg overflow-hidden group">
                  <Image
                    src={item.image}
                    // unoptimized
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
    </div>
  );
}

export default Education;
