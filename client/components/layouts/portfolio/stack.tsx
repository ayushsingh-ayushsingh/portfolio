import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { technologies } from "./technologies";

export function MyStack() {
  return (
    <div className="max-w-4xl mx-auto w-full grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-12 border-x p-2 gap-2">
      {technologies.map(({ name, icon, href }, i) => (
        <Tooltip key={i}>
          <TooltipTrigger>
            <div className="justify-center flex">
              <Link
                href={href}
                target="_blank"
                aria-label={name}
                className="p-2 flex items-center justify-center w-full h-full  dark:brightness-80 dark:hover:brightness-100 hover:bg-accent transition-all duration-300 max-h-16 hover:saturate-120 rounded-md"
              >
                <div className="size-12">{icon}</div>
              </Link>
              <span className="sr-only">{name}</span>
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
