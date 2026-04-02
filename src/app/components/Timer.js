"use client";
import localFont from 'next/font/local';
import { useEffect, useState } from "react";
import star from "@/app/assets/icons/Star.svg"



const ralewayBold = localFont({
    src: '../assets/fonts/Raleway-Bold.ttf',
});


export const Timer = ({onTimeout}) => {

    const [time, setTime] = useState(5);



    useEffect(() => {

        const interval = setInterval(() => {
            setTime((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    onTimeout?.();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // форматируем в MM:SS
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const isWarning = time < 30 && time > 0;


    const textColor = isWarning
        ? "text-[#FF4E4E] animate-smooth-blink"
        : "text-white";

    const formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;



    return (
        <div className="flex  justify-between items-center">
            <img src={star.src} alt="star"/>
            <span className={`
                ${ralewayBold.className}
                xxs:text-[28px]
                md:text-[40px]
                ${textColor}
                flex
                justify-left 
                mx-2
                `}
                style={{ fontVariantNumeric: "lining-nums tabular-nums" }}
            >
            {formattedTime}
            </span>
            <img src={star.src} alt="star"/>
        </div>
    )
}

/*



*/