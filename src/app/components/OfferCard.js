import localFont from 'next/font/local';


const GilroyFont = localFont({
    src: '../assets/fonts/Gilroy-Medium.ttf',
});


const shortTexts = {
    "1 неделя": "Чтобы просто начать",
    "1 месяц": "Первые результаты",
    "3 месяца": "Привести тело в порядок",
    "Навсегда": "Всегда быть в форме",
};



export default function OfferCard ({ data }) {

    const discount = Math.trunc(((data.full_price - data.price)/data.full_price) * 100)

    return (
        <div className={`
            w-full
            bg-[#313637]
            ${data.is_best ? "lg:max-w-[746px] lg:h-[188px]" : "lg:max-w-[240px] lg:h-[335px]"} 
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
            <div className="relative flex flex-col items-center">
                <div className={`
                    absolute
                    top-0
                    ${data.is_best ? "xxs:right-[62px] lg:left-[50px]" : "xxs:right-[28px] xxs:right-[30px] lg:left-[51px]"}
                `}>
                    <div className={`
                        bg-[#FD5656]
                        rounded-b-[8px]
                        flex
                        items-center
                        justify-center
                        xxs:w-[42px]
                        xxs:h-[23px]
                        xs:w-[48px]
                        xs:h-[27px]
                        ${data.is_best ? "lg:w-[66px] lg:h-[39px]" : "lg:w-[69px] lg:h-[39px]"}
                    `}>
                        <span className={`
                            ${GilroyFont.className}
                            text-white
                            xxs:text-[13px]
                            xs:text-[16px]
                            lg:text-[22px]
                            `}>-{discount}%</span>
                    </div>
                </div>
                <span className={`
                        absolute
                        text-[#FDB056]
                        xxs:text-[13px]
                        xs:text-[16px]
                        lg:text-[22px]
                        ${data.is_best ? "lg:top-1.5 lg:right-3.5 xxs:top-[6px] xxs:right-[16px]" : " " }
                `}>
                        {data.is_best ? "хит!" : ""}
                </span>
            </div>
            <div className={`
                flex
                xxs:justify-center
                xxs:mx-[25px]
                lg:mx-0
                ${data.is_best ? "lg:justify-normal" : "lg:justify-center"}
            `}>
            <div className={`
                flex
                w-full
                h-full
                
                xxs:mt-[20px]
                lg:justify-start
                ${data.is_best ? "lg:ml-[122px] lg:mt-[30px]" : "lg:mx-[18px] lg:mt-[70px] "}
            `}>
                 <div className={`
                    flex
                    xxs:w-full
                    lg:w-auto
                    
                    ${data.is_best ? "lg:h-auto" : "lg:flex-col"}
                `}>
                    <div className={`
                        xxs:w-1/2
                        flex
                        lg:w-full
                        xxs:flex-row
                        xxs:justify-between
                        lg:justify-center
                    `}>
                        <div className={`
                            flex
                            flex-col
                            xxs:pr-[15px]
                            xxs:w-auto
                            
                            lg:pr-0
                            ${data.is_best ? "lg:w-[178px]" : "lg:items-center"}
                        `}>
                            <span className={`
                            text-white
                            xxs:text-[16px]
                            xs:text-[18px]
                            lg:text-[26px]
                            ${data.is_best ? "lg:self-center" : ""}
                        `}>
                            {data.period}
                        </span>
                            <span className={`
                            text-4xl
                            font-semibold
                            xxs:text-[28px]
                            xs:text-[34px]
                            lg:text-[50px]
                            ${data.is_best ? "text-[#FDB056]" : "text-white"}
                        `}>
                            {data.price} ₽
                        </span>
                            <span className={`
                            line-through
                            text-[#919191]
                            xxs:text-[14px]
                            xs:text-[16px]
                            lg:text-[24px]
                            self-end
                            ${data.is_best ? "" : ""}
                        `}>
                            {data.full_price} ₽
                        </span>
                        </div>
                    </div>
                    <div className={`
                        flex
                        xxs:w-1/2
                        lg:w-auto
                    `}>
                        <div className={`
                        flex
                        items-center
                        
                        xxs:pl-[15px]
                        lg:pl-0
                        ${data.is_best ? "lg:self-center lg:h-[62px] lg:w-[328px]" : "lg:mt-10 "} 
                        `}>
                            <div className={`
                            flex
                            ${data.is_best ? " justify-end lg:ml-10 lg:w-[330px]" : ""}
                        `}>
                            <span className="
                                text-white
                                xxs:text-[14px]
                                xxs:w-full
                                lg:hidden
                            ">
                                {shortTexts[data.period]}
                            </span>
                                <span className={`
                                text-white
                                xxs:text-[14px]
                                xxs:max-h-[74px]
                                lg:w-auto
                                lg:text-[16px]
                                hidden
                                lg:block  
                            `}>
                                {data.text}
                            </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
)}

