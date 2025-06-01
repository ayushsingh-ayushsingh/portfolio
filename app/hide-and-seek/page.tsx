"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { Linux } from "@/components/layouts/skills";
import Image from "next/image";

export default function HideAndSeek() {
    return (
        <div className="h-screen w-full bg-black">
            <SVGMaskEffectDemo />
        </div>
    );
}

export function SVGMaskEffectDemo() {
    const [svgSize, setSvgSize] = useState(500);
    const [size] = useState(20);
    const [tuxSize, setTuxSize] = useState(100);
    const [findCount, setFindCount] = useState(0);
    const [correctBox, setCorrectBox] = useState<number | null>(null);
    const [rickRolled, setRickRolled] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (isClient && correctBox === null) {
            setCorrectBox(Math.floor(Math.random() * size * size));
        }
    }, [isClient, correctBox, size]);

    useEffect(() => {
        if (rickRolled) {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        }
    }, [rickRolled]);

    const handleFind = () => {
        const newFindCount = findCount + 1;

        if (newFindCount < 3) {
            setTuxSize(prev => prev / 2);
            setSvgSize(prev => prev / 2);
        } else if (newFindCount === 3) {
            setSvgSize(1000);
            setRickRolled(true);
        }

        setFindCount(newFindCount);
        setCorrectBox(Math.floor(Math.random() * size * size));
    };

    const renderBoxes = () => {
        if (!isClient || correctBox === null) return null;

        const boxes = [];
        for (let i = 0; i < size * size; i++) {
            boxes.push(
                <div key={i} className="flex items-center justify-center">
                    {!rickRolled && i === correctBox && tuxSize >= 25 ? (
                        <button onClick={handleFind} className="cursor-pointer">
                            <Linux style={{ width: `${tuxSize}px`, height: `${tuxSize}px` }} />
                        </button>
                    ) : null}
                    {rickRolled ? (
                        <Link href="/">
                            <Image
                                src="/Rick-Roll.gif"
                                alt="Rick Roll"
                                width={100}
                                height={100}
                                className="w-full h-full object-cover"
                            />
                        </Link>
                    ) : null}
                </div>
            );
        }
        return boxes;
    };

    if (!isClient) return null;

    return (
        <div className="flex h-screen w-full items-center justify-center overflow-hidden cursor-crosshair">
            <MaskContainer
                revealSize={svgSize}
                revealText={
                    <div className="h-full w-full bg-white text-center text-4xl font-bold text-black flex flex-col items-center justify-center">
                        Tux is Hiding, Find him 3 times!
                    </div>
                }
                className="h-screen w-screen text-white"
            >
                <div className="h-screen w-screen">
                    <div
                        className="grid h-full w-full"
                        style={{
                            gridTemplateColumns: `repeat(${size}, 1fr)`,
                            gridTemplateRows: `repeat(${size}, 1fr)`,
                        }}
                    >
                        {renderBoxes()}
                    </div>
                </div>
            </MaskContainer>
        </div>
    );
}
