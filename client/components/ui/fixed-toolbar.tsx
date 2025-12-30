"use client";

import { cn } from "@/lib/utils";
import { Toolbar } from "./toolbar";

export function FixedToolbar(props: React.ComponentProps<typeof Toolbar>) {
  return (
    <Toolbar
      {...props}
      className={cn(
        "scrollbar-hide sticky top-0 left-0 z-50 justify-between overflow-x-auto bg-background border-b opacity-0 hover:opacity-100 transition-all hover:duration-0 duration-300 delay-2000 hover:delay-0 ease-in-out",
        props.className
      )}
    />
  );
}
