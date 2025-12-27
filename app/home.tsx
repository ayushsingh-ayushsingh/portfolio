import Link from "next/link";
import { PortfolioNavbar } from "@/components/layouts/portfolio/navbar";
import { PortfolioHero } from "@/components/layouts/portfolio/portfolio-hero";
import { Intro } from "@/components/layouts/portfolio/intro";
import { AboutPortfolioPage } from "@/components/layouts/portfolio/about";
import { PortfolioLink } from "@/components/layouts/portfolio/links";
import { MyStack } from "@/components/layouts/portfolio/stack";
import { Button } from "@/components/ui/button";
import Projects from "@/components/layouts/portfolio/projects";
import Experiences from "@/components/layouts/portfolio/experience";
import Education from "@/components/layouts/portfolio/education";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Loader } from "lucide-react";

const GithubContributions = dynamic(
  () => import("@/components/layouts/portfolio/github-contributions")
);

export function Texture({ height }: { height: string }) {
  return (
    <div
      className={`col-start-1 w-full row-span-full row-start-1 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[12px_12px] bg-fixed [--pattern-fg:var(--color-accent-foreground)]/5 h-${height}`}
    >
      <div className="max-w-4xl mx-auto border-x h-full" />
    </div>
  );
}

export function PrankLines() {
  return (
    <div>
      <div className="fixed left-[10vw] h-screen border border-green-500 z-100" />
      <div className="fixed left-[11vw] h-screen border border-red-500 z-100" />
      <div className="fixed left-[50vw] h-screen border border-red-500 z-100" />
      <div className="fixed left-[52vw] h-screen border border-green-500 z-100" />
      <div className="fixed left-[49vw] h-screen border border-blue-700 z-100" />
      <div className="fixed left-[90vw] h-screen border border-red-500 z-100" />
      <div className="fixed left-[81vw] h-screen border border-red-500 z-100" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-full mx-auto">
      <meta name="description" content="Ayush Singh - Dev Portfolio" />
      {/* <PrankLines /> */}
      <div className="sticky top-0 bg-background z-50">
        <div className="h-3">
          <div className="max-w-4xl mx-auto border-x h-full" />
        </div>
        <hr />
        <PortfolioNavbar />
        <hr />
        <Texture height="4" />
        <hr />
      </div>
      <main>
        <PortfolioHero />
        <hr />
        <Texture height="12" />
        <hr />
        <Intro />
        <hr />
        <Texture height="8" />
        <hr />
        <AboutPortfolioPage />
        <hr />
        <Texture height="8" />
        <hr />
        <PortfolioLink />
        <hr />
        <Texture height="8" />
        <hr />
        <MyStack />
        <hr />
        <Texture height="12" />
        <hr />
        <div
          id="projects"
          className="px-6 select-none text-4xl max-w-4xl w-full mx-auto border-x py-4 text-right text-muted-foreground font-light"
        >
          Projects
        </div>
        <hr />
        <Projects />
        <hr />
        <Texture height="12" />
        <hr />
        <div className="px-6 select-none text-4xl max-w-4xl w-full mx-auto border-x py-4 text-right text-muted-foreground font-light">
          Experience
        </div>
        <hr />
        <Experiences />
        <hr />
        <Texture height="12" />
        <hr />
        <div className="px-6 select-none text-4xl max-w-4xl w-full mx-auto border-x py-4 text-right text-muted-foreground font-light">
          Education
        </div>
        <hr />
        <Education />
        <hr />
        <Texture height="12" />
        <hr />
        <Suspense
          fallback={
            <div>
              <Loader className="animate-spin" />
              <p className="sr-only">Loading github graph</p>
            </div>
          }
        >
          <GithubContributions />
        </Suspense>
        <hr />
      </main>
      <Texture height="12" />
      <hr />
      <div className="w-full max-w-4xl mx-auto border-x text-7xl text-center text-foreground/50 font-extralight p-2">
        Ayush Singh
      </div>
      <hr />
      <Texture height="4" />
      <hr />
      <div className="w-full max-w-4xl mx-auto border-x text-center p-4 font-extralight">
        Inspired by{" "}
        <Button asChild variant={"link"} className="p-0">
          <Link href="https://x.com/iamncdai" target="_blank">
            ncdai
          </Link>
        </Button>
        {", "}
        Built by Ayush Singh.
        <br />
        The source code is available on GitHub.
      </div>
      <hr />
      <div className="w-full max-w-4xl mx-auto border-x text-right font-extralight px-4">
        &copy; Ayush Singh {new Date(Date.now()).getFullYear()}
      </div>
      <hr />
      <div className="w-full max-w-4xl mx-auto border-x text-7xl text-center font-extralight p-8" />
      <hr />
    </div>
  );
}
