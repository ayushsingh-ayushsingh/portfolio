"use client"

import {
    Wifi,
    Signal,
    BatteryMedium
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function TopBar() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const amPm = hours >= 12 ? "PM" : "AM";
            const displayHours = hours % 12 || 12;
            setTime(`${displayHours}:${minutes} ${amPm}`);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const iconStrokeClass = "stroke-[0.18vh]";
    const smallIconSizeClass = "w-[2.1vh] h-[2.1vh]";
    const batteryIconSizeClass = "w-[2.7vh] h-[2.7vh]";
    const textStyleClasses = "text-foreground/80 font-medium text-[1.55vh] tracking-tight";

    return (
        <div className="h-full w-full pointer-events-auto overflow-hidden">
            <nav className="h-full bg-background rounded-t-[3.5vh] grid grid-cols-[1fr_auto_1fr] items-center px-[1.8vh] shadow-sm">
                <div className="flex items-center justify-self-start">
                    <span className={textStyleClasses}>{time}</span>
                </div>

                <div className="h-full flex items-center justify-self-center">
                    <div className="w-[1.5vh] h-[1.5vh] bg-foreground/60 rounded-full shadow-inner" />
                </div>

                <div className={`flex items-center justify-self-end gap-[0.9vh] ${textStyleClasses}`}>
                    <Wifi className={`${smallIconSizeClass} ${iconStrokeClass} text-foreground/70`} />
                    <Signal className={`${smallIconSizeClass} ${iconStrokeClass} text-foreground/70`} />
                    <span>5G</span>
                    <div className="flex items-center gap-[0.4vh]">
                        <BatteryMedium className={`${batteryIconSizeClass} ${iconStrokeClass} text-foreground/70`} />
                        <span>69%</span>
                    </div>
                </div>
            </nav>
        </div>
    );
}