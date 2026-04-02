'use client';
import React, { useState } from 'react';
import Arrow from "@/app/components/Arrow";
import checkbox from '@/app/assets/icons/Checkbox.svg'

export default function Checkbox ({ onChange, error }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = (e) => {
        const checked = e.target.checked;
        setIsChecked(checked);
        onChange?.(checked);
    };

    return (
        <div className="relative">
            {error ? <Arrow/> : null}

            <label className={`
                flex
                items-center
                gap-2
                cursor-pointer
                xxs:mt-4
                xs:mt-3
                sm:mt-[30px]
                ${error ? "border-red-500 animate-shake" : "border-gray-400"}
            `}>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleOnChange}
                    className="hidden peer"
                />

                <div
                    style={{
                        backgroundImage: isChecked ? `url(${checkbox.src})` : 'none'
                    }}
                    className={`
                        xxs:w-[30px] xxs:h-[30px]
                        md:w-[32px] md:h-[32px]
                        shrink-0
                        border
                        ${error ? "border-red-500 animate-error" : "border-gray-400"}
                        rounded
                        flex items-center justify-center
                        bg-no-repeat
                        bg-center
                        hover:border-gray-200
                        transition-all duration-200
                    `}
                />

                <span className="text-[#CDCDCD] xxs:text-[10px] xs:text-[12px] md:text-[16px]">
                    Я согласен с <u>офертой рекуррентных платежей</u> и <u>Политикой конфиденциальности</u>
                </span>
            </label>
        </div>
    );
}