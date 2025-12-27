"use client";

import { GithubGraph } from "@/components/ui/github";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useEffect, useState } from "react";
import { toast } from "sonner";

function GithubContributions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setTimeout(() => {
      toast.success("This page got lighthouse score of 100!");
    }, 5000);
  }, []);

  if (isVisible) {
    return (
      <ScrollArea className="max-w-4xl border-x mx-auto py-6">
        <div className="mx-4 flex justify-center">
          <GithubGraph username="ayushsingh-ayushsingh" blockMargin={2} />
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    );
  }

  return (
    <div className="max-w-4xl border-x mx-auto p-6 text-center">
      Loading github graph
    </div>
  );
}

export default GithubContributions;
