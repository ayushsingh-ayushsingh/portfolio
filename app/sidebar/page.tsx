import MyStaticPage from "./content";
import dynamic from "next/dynamic";
import { ScrollArea } from "@/components/ui/scroll-area";
import TableOfContents from "./toc";
import { Github } from "lucide-react";

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
            <span aria-label="home page">Home</span>
            <ol className="flex items-center h-full justify-between gap-4">
              <li className="mr-4">About</li>
              <li className="mr-4">Blogs</li>
              <li>
                <Github className="size-5" strokeWidth={1.8} />
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
                <ScrollArea className="w-full pb-48">
                  <TableOfContents />
                </ScrollArea>
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
        name="description"
        content="Ayush Singh - Dev Portfolio"
      />
    </div>
  );
}
