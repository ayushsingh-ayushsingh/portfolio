"use client";

import { useEffect, useState } from "react";

export default function Widget() {
    const [time, setTime] = useState<string>("");
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();

            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, "0");
            const ampm = hours >= 12 ? "PM" : "AM";
            const formattedHours = hours % 12 || 12;
            const formattedTime = `${formattedHours}:${minutes} ${ampm}`;

            const dateOptions: Intl.DateTimeFormatOptions = {
                weekday: 'long',
                month: 'long',
                day: 'numeric'
            };
            const formattedDate = now.toLocaleDateString('en-US', dateOptions);

            setTime(formattedTime);
            setDate(formattedDate);
        };

        updateDateTime();
        const intervalId = setInterval(updateDateTime, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="w-full h-[13vh] bg-accent text-accent-foreground rounded-[2.5vh] p-[2vh] flex flex-col items-center justify-center shadow-lg select-none my-[1.5vh]">
            <div className="text-center">
                <div className="text-[4.5vh] font-semibold leading-tight tracking-tighter">
                    {time}
                </div>
                <div className="text-[1.7vh] font-normal opacity-80 mt-[0.5vh] tracking-tight">
                    {date}
                </div>
            </div>
        </div>
    );
}