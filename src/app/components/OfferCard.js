
export default function OfferCard ({ data }) {


    const discount = Math.trunc(((data.full_price - data.price)/data.full_price) * 100)

    return (
        <div className={`
            w-full
            ${data.is_best ? "desktopSize= lg:max-w-[746px] lg:h-[188px]" : "lg:max-w-[240px] lg:h-[335px]"} 
            bg-[#313637]
            xxs:mb-[6px]
            xs:mb-[8px]
            xs:h-[129px]
            xxs:h-[116px]
            lg:mb-3.5
            rounded-[25px/35px]
            border-2 
            border-[#484D4E]
            hover:border-[#FDB056]
            transition-all duration-200         
        `}>
            <div className="relative flex flex-col p-6">

                <div className="absolute top-0 left-6">
                    <span>-{discount}%</span>
                    <span>{data.is_best ? "хит!" : ""}</span>
                </div>

                {/* 🔵 верхняя строка */}
                <div className="flex justify-between items-center">
                    <span>{data.period}</span>

                </div>

                {/* 🟣 контент */}
                <div className="flex justify-between mt-4">

                    <div className="flex flex-col">
                        <span className="text-4xl">{data.price} ₽</span>
                        <span className="line-through">{data.full_price} ₽</span>
                    </div>

                    <div className="max-w-[200px]">
                        <span>{data.text}</span>
                    </div>

                </div>

            </div>
        </div>

    )
}

//rounded-[40px]
//rounded-[20px/30px]