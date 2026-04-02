'use client';

import React, { useState } from 'react';
import Arrow from "@/app/components/Arrow";
export default function Checkbox ({  onChange, error  }) {
    const [isChecked, setIsChecked] = useState(false);



    const handleOnChange = (e) => {
        const checked = e.target.checked;
        setIsChecked(checked);
        onChange?.(checked);
    };

    return (
        <div className={`relative`}>
            {error ? <Arrow/> : ""}


            <div>
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

                    <div className={`
                            md:w-[32px] md:h-[32px]
                            xxs:w-[30px] xxs:h-[30px]
                            border border-gray-400
                            ${error ? "border-red-500 animate-error" : "border-gray-400"}
                            rounded
                            flex items-center justify-center
                            peer-checked:bg-[url('@/app/assets/icons/Checkbox.svg')]
                            bg-no-repeat
                            bg-center
                            hover:border-gray-200
                            transition-all duration-200
                    `}>
                        <svg
                            className="hidden peer-checked:block xxs:w-[19.09px] xxs:h-[13.54px] md:w-[20.36px] md:h-[14.55px]"
                            viewBox="0 0 21 15"
                            fill="none"
                        >
                            <path
                                d="M19.4727..."
                                fill="white"
                            />
                        </svg>
                    </div>
                    <span className="text-[#CDCDCD] xxs:text-[10px] xs:text-[12px] md:text-[16px]">
                        Я согласен с <u>офертой рекуррентных платежей</u> и <u>Политикой конфиденциальности</u>
                    </span>
                </label>
            </div>
        </div>
    );
}
