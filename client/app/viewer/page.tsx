import MyStaticPage from "./content";
import dynamic from "next/dynamic";
import { ScrollArea } from "@/components/ui/scroll-area";
import TableOfContents from "./toc";
import { ArrowLeft, Github } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Portfolio Website of Ayush Singh, a Full-Stack Web Developer from India.",
  applicationName: "Blogs - Ayush Singh",
  keywords:
    "Portfolio Ayush Singh Ayush AyushSingh ayush singh ayushsingh-ayushsingh",
  category: "Portfolio",
  authors: [{ name: "Ayush Singh", url: "https://me.ayushpno.workers.dev/" }],
};

const MaximizeButton = dynamic(() => import("./maximize-button"));
const BulbThemeToggle = dynamic(
  () => import("@/components/ui/skiper-ui/bulb-theme-toggle")
);

export default function Page() {
  return (
    <div>
      <div id="show-on-maximize" className="fixed top-2 right-4 hidden">
        <MaximizeButton />
      </div>
      <div className="max-w-[1440] mx-auto w-full px-1">
        <div>
          <nav className="h-12 sticky top-0 border-b backdrop-blur-2xl z-50 bg-background/25 flex items-center justify-between px-4 hide-on-maximize">
            <span aria-label="home page">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href={"https://github.com/ayushsingh-ayushsingh"}
                      target="_blank"
                      className="flex items-center gap-1 font-semibold"
                    >
                      <ArrowLeft strokeWidth={2} className="size-5" />
                      <span>AS</span>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>Home</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </span>
            <ol className="flex items-center h-full justify-between gap-4">
              {/* <li className="mr-4">Blogs</li> */}
              <li>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={"https://github.com/ayushsingh-ayushsingh"}
                        target="_blank"
                      >
                        <Github className="size-5" strokeWidth={1.8} />
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>Github</TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
              <li>
                <MaximizeButton />
              </li>
              <li>
                <BulbThemeToggle />
              </li>
            </ol>
          </nav>
          <div className="flex">
            <aside className="h-[calc(100vh-48px)] w-60 sticky top-12 hidden xl:block hide-on-maximize">
              <div className="flex h-full items-center w-60 hide-on-maximize">
                {/* <ScrollArea className="w-full pb-48">
                  <Link
                    href={"/"}
                    className="flex text-muted-foreground items-center gap-1 hover:text-primary duration-300 transition-all mb-96 p-4"
                  >
                    <ArrowLeft strokeWidth={1} className="size-5" />
                    <span>Home</span>
                  </Link>
                </ScrollArea> */}
              </div>
            </aside>
            <main className="flex-1">
              <div>
                <MyStaticPage />
              </div>
            </main>
            <aside className="h-[calc(100vh-48px)] w-60 sticky top-12 hidden xl:block hide-on-maximize">
              <div className="flex h-full items-center w-60 hide-on-maximize">
                <ScrollArea className="w-full pb-48">
                  <TableOfContents />
                </ScrollArea>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <meta
        name="title"
        content="Welcome to the Plate Playground! - Ayush Singh"
      />
    </div>
  );
}
