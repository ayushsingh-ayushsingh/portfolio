import { LucideGithub, MessageSquareCode, Play, Twitter } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Linkedin01Icon } from "@hugeicons/core-free-icons";
import Link from "next/link";
import { ArrowRight } from "@/components/animate-ui/icons/arrow-right";
import { AnimateIcon } from "@/components/animate-ui/icons/icon";

export function PortfolioLink() {
  const socialLinks = [
    {
      name: "GitHub",
      myId: "ayushsingh-ayushsingh",
      icon: (
        <div className="border p-0.5 rounded-md bg-green-500/15">
          <LucideGithub
            className="text-green-600/70"
            strokeWidth={1.5}
            size={32}
          />
        </div>
      ),
      href: "https://github.com/ayushsingh-ayushsingh",
    },
    {
      name: "LinkedIn",
      myId: "ayush-singh-357272260",
      icon: (
        <div className="border p-0.5 rounded-md bg-blue-500/15">
          <HugeiconsIcon
            icon={Linkedin01Icon}
            className="text-blue-600/70"
            strokeWidth={1.5}
            size={32}
          />
        </div>
      ),
      href: "https://www.linkedin.com/in/ayush-singh-357272260/",
    },
    // {
    //   name: "YouTube",
    //   myId: "ayush@123",
    //   icon: (
    //     <div className="border p-0.5 rounded-md bg-red-500/15">
    //       <Play className="text-red-600/70" strokeWidth={1.5} size={32} />
    //     </div>
    //   ),
    //   href: "https://www.youtube.com",
    // },
    // {
    //   name: "Medium",
    //   myId: "ayush@123",
    //   icon: (
    //     <div className="border p-0.5 rounded-md bg-neutral-500/15">
    //       <div className="text-neutral-600/70">
    //         <svg
    //           width="32px"
    //           height="32px"
    //           strokeWidth="1.5"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //           stroke="var(--color-neutral-600)"
    //           className="text-neutral-600/70"
    //         >
    //           <path
    //             d="M7 16C9.20914 16 11 14.2091 11 12C11 9.79086 9.20914 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16Z"
    //             strokeWidth="1.2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           ></path>
    //           <path
    //             d="M15 16C16.1046 16 17 14.2091 17 12C17 9.79086 16.1046 8 15 8C13.8954 8 13 9.79086 13 12C13 14.2091 13.8954 16 15 16Z"
    //             strokeWidth="1.2"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           ></path>
    //           <path
    //             d="M20 16C20.5523 16 21 14.2091 21 12C21 9.79086 20.5523 8 20 8C19.4477 8 19 9.79086 19 12C19 14.2091 19.4477 16 20 16Z"
    //             strokeWidth="1.2"
    //             fill="var(--neutral-600)"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //           ></path>
    //         </svg>
    //       </div>
    //     </div>
    //   ),
    //   href: "https://github.com",
    // },
    // {
    //   name: "X - Twitter",
    //   myId: "ayush@123",
    //   icon: (
    //     <div className="border p-0.5 rounded-md bg-sky-500/15">
    //       <Twitter className="text-sky-600/70" strokeWidth={1.5} size={32} />
    //     </div>
    //   ),
    //   href: "https://www.x.com",
    // },
    // {
    //   name: "FreeCodeCamp",
    //   myId: "ayush@123",
    //   icon: (
    //     <div className="border p-0.5 rounded-md bg-blue-500/15">
    //       <MessageSquareCode
    //         className="text-blue-600/70"
    //         strokeWidth={1.5}
    //         size={32}
    //       />
    //     </div>
    //   ),
    //   href: "https://freecodecamp.com",
    // },
  ];

  return (
    <div className="max-w-4xl mx-auto w-full grid md:grid-cols-2 border-x p-4 gap-4">
      {socialLinks.map(({ name, icon, href, myId }, i) => (
        <Link key={i} href={href} target="_blank">
          <AnimateIcon
            animateOnHover
            delay={300}
            className="flex items-center justify-between hover:cursor-pointer group p-4 border"
          >
            <div className="flex items-center">
              <div className="border p-0.5 rounded-lg">{icon}</div>
              <div className="px-4">
                <p>{name}</p>
                <p className="text-xs text-muted-foreground group-hover:underline underline-offset-4">
                  {myId}
                </p>
              </div>
            </div>
            <ArrowRight
              animation="out"
              size={22}
              strokeWidth={1.2}
              className="text-muted-foreground -rotate-45 group-hover:animate-animateOnHover"
            />
          </AnimateIcon>
        </Link>
      ))}
    </div>
  );
}
