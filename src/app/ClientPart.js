// ClientPart.js
'use client';
import { useState } from 'react';
import Checkbox from "@/app/components/Checkbox";
import BuyButton from "@/app/components/BuyButton";
export default function ClientPart() {
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState(false);

    return (
        <>
            <Checkbox
                onChange={(val) => {
                    setIsChecked(val);
                    if (val) setError(false);
                }}
                error={error}
            />

            <BuyButton onClick={() => {
                if (!isChecked) {
                    setError(true);

                    setTimeout(() => {
                        setError(false);
                    }, 1000); // 1 секунда
                } else {
                    console.log('покупка');
                }
            }} />
        </>
    );
}