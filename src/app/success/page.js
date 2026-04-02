'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CheckoutPage() {
    const [offer, setOffer] = useState(null)
    const router = useRouter()

    useEffect(() => {
        const data = localStorage.getItem('finalOffer')
        if (data) {
            setOffer(JSON.parse(data))
        }
    }, [])

    return (
        <div className="
            flex flex-col items-center justify-center
            min-h-screen
            bg-[#232829]
            text-white
        ">
            {offer ? (
                <div className="
                    bg-[#313637]
                    p-6
                    rounded-2xl
                    border border-[#484D4E]
                    flex flex-col items-center
                    gap-4
                    w-[300px]
                ">
                    <h2 className="text-[20px] font-bold">
                        Ваш тариф
                    </h2>

                    <span className="text-[18px]">
                        {offer.period}
                    </span>

                    <span className="text-[28px] font-semibold text-[#FDB056]">
                        {offer.actualPrice} ₽
                    </span>

                    <button
                        onClick={() => router.back()}
                        className="
                            mt-4
                            w-full
                            h-[50px]
                            bg-[#FDB056]
                            rounded-xl
                            text-[#191E1F]
                            font-bold
                            hover:bg-[#e68a1e]
                            transition-all
                        "
                    >
                        Назад
                    </button>
                </div>
            ) : (
                <span>Загрузка...</span>
            )}
        </div>
    )
}