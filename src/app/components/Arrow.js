import arrow from "@/app/assets/icons/arrow.svg";

export default function Arrow ({  onChange, error  }) {
    return (
        <img alt="arrow" className={`xxs:hidden lg:block w-15 h-15 left-[-70px] top-[35px] absolute size-7 ... -scale-x-100 animate-arrow`}
             src={arrow.src}
        ></img>
    )
}



