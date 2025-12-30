import { cn } from "@/lib/utils";
import { Silkscreen } from "next/font/google";

export const silkscreen = Silkscreen({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: "400",
});

export function PortfolioHero() {
  return <TextureInitial />;
}

export function Texture({ className }: { className?: string }) {
  return (
    <section className="flex justify-between h-80">
      <div
        className={cn(
          "col-start-1 w-full row-span-full row-start-1 border border-(--pattern-fg) bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-accent-foreground)]/5",
          className
        )}
      />
    </section>
  );
}

export function TextureInitial({ className = "" }: { className?: string }) {
  return (
    <div className="p-4 max-w-4xl mx-auto border-x">
      <section className="flex justify-between min-h-42 h-[20vh] border p-1 rounded-sm text-muted-foreground/50">
        <div
          className={cn(
            "border border-edge select-none flex items-center w-full font-extralight justify-center screen-line-before screen-line-after before:-top-px after:-bottom-px bg-accent/20 bg-[radial-gradient(var(--pattern-foreground)_1px,transparent_0)] bg-size-[10px_10px] bg-center [--pattern-foreground:var(--color-accent-foreground)]/5 rounded",
            className,
            `${silkscreen.className} antialiased text-8xl`
          )}
          data-state="closed"
          data-slot="context-menu-trigger"
        >
          AS
        </div>
      </section>
    </div>
  );
}
