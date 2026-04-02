// ClientPart.js
'use client';
import { useState } from 'react';
import Checkbox from "@/app/components/Checkbox";
import BuyButton from "@/app/components/BuyButton";
import { useRouter } from 'next/navigation'
export default function ClientPart({ selectedOffer }) {
    const [isChecked, setIsChecked] = useState(false);
    const [error, setError] = useState(false);
    const router = useRouter()

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
                    }, 1000);
                } else if (!selectedOffer) {
                    alert('Выбери тариф')
                } else {
                    localStorage.setItem('offer', JSON.stringify(selectedOffer))
                    router.push('/success')
                }
            }} />
        </>
    );
}