import { Search } from "lucide-react";
import { Duckduckgo } from "./icons";

export function DuckDuckGoWidget() {
    return (
        <div className="flex justify-center items-center my-[2vh] w-full px-[2vh]">
            <a
                href="https://duckduckgo.com/"
                className="w-full max-w-[38vh] bg-muted hover:bg-muted/80 focus-visible:ring-[0.3vh] focus-visible:ring-primary focus-visible:outline-none transition-all duration-200 rounded-[3vh] shadow-md"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Search the web with DuckDuckGo"
            >
                <div className="w-full h-[7vh] flex justify-between items-center px-[1.5vh]">
                    <div className="flex items-center">
                        <Duckduckgo className="w-[4.5vh] h-[4.5vh] mr-[1.5vh] text-foreground/80" />
                        <span className="text-foreground text-[2.2vh] font-medium">
                            Search Web
                        </span>
                    </div>
                    <Search className="w-[3.5vh] h-[3.5vh] text-foreground/70" />
                </div>
            </a>
        </div>
    );
}