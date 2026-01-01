"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MaskContainer } from "./mask-container";
import { Linux } from "./linux-tux";
import { toast } from "sonner";

export default function SVGMaskEffectDemo() {
  const [svgSize, setSvgSize] = useState(500);
  const size = 20;

  const [tuxSize, setTuxSize] = useState(100);
  const [findCount, setFindCount] = useState(0);
  const [correctBox, setCorrectBox] = useState<number | null>(null);
  const [rickRolled, setRickRolled] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const remaining = Math.max(0, 3 - findCount);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && correctBox === null) {
      setCorrectBox(Math.floor(Math.random() * size * size));
    }
  }, [isClient, correctBox]);

  useEffect(() => {
    if (rickRolled) {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    }
  }, [rickRolled]);

  const handleFind = () => {
    const next = findCount + 1;

    if (next < 3) {
      toast.success(`🐧 Found him! ${3 - next} left`);
      setTuxSize((s) => s / 2);
      setSvgSize((s) => s / 2);
    } else {
      toast.success("🎉 You found Tux! Legendary.");
      setSvgSize(1000);
      setRickRolled(true);
    }

    setFindCount(next);
    setCorrectBox(Math.floor(Math.random() * size * size));
  };

  const renderBoxes = () => {
    if (!isClient || correctBox === null) return null;

    return Array.from({ length: size * size }).map((_, i) => (
      <div key={i} className="flex items-center justify-center">
        {!rickRolled && i === correctBox && tuxSize >= 25 && (
          <button onClick={handleFind}>
            <Linux
              style={{
                width: tuxSize,
                height: tuxSize,
              }}
            />
          </button>
        )}

        {rickRolled && (
          <Link href="/">
            <img
              src="/Rick-Roll.gif"
              alt="Rick Roll"
              className="h-full w-full object-cover"
            />
          </Link>
        )}
      </div>
    ));
  };

  if (!isClient) return null;

  return (
    <div className="h-screen w-screen cursor-crosshair overflow-hidden">
      <MaskContainer
        revealSize={svgSize}
        revealText={
          <div className="flex h-full w-full flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white text-4xl font-bold">
            {remaining > 0 ? `Tux is hiding… ${remaining}` : "You win 🎉"}
          </div>
        }
      >
        <div
          className="grid h-full w-full"
          style={{
            gridTemplateColumns: `repeat(${size}, 1fr)`,
            gridTemplateRows: `repeat(${size}, 1fr)`,
          }}
        >
          {renderBoxes()}
        </div>
      </MaskContainer>
    </div>
  );
}
