export default function BuyButton ({ onClick }) {


    let offerChoice = null

    return (
        <div>
            <button
                onClick={onClick}
                className="
                xxs:mt-4
                xs:mt-5
                sm:mt-4
                xxs:max-w-[288px]
                mob:max-w-[343px]
                md:w-[352px]
                xxs:h-[55px]
                mob:h-[63px]
                md:h-[66px]
                w-full
                bg-[#FDB056]
                rounded-[20px]
                text-[#191E1F]
                text-[20px]
                font-bold
                hover:bg-[#e68a1e]
                ">
                    Купить
            </button>
        </div>
    )
}