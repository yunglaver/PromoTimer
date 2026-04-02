import { Timer } from "./components/Timer.js"
import man from "@/app/assets/images/man.png";
import alert from "@/app/assets/icons/Alert.svg";
import OfferCard from "@/app/components/OfferCard";

import {getOffers} from "@/app/core/api";
import ClientPart from "@/app/ClientPart"





export default async function Home() {

    const offersData = await getOffers()
    const theBestOffer = offersData.find(o => o.is_best)
    const otherOffers = offersData.filter(o => !o.is_best)

    return (
        <div className="flex flex-col flex-1 font-sans ">
            <nav className="
                flex
                w-full
                flex-col
                justify-center
                content-center
                items-center
                justify-between
                h-[87px]
                mx-auto
                bg-[#1D5B43]
            ">
                <div className="flex flex-col items-center">
                    <span className="
                        font-semibold
                        xxs:text-[14px]
                        xs:text-[24px]
                        leading-[130%]
                        tracking-[0%]
                        text-white
                    ">
                        Успейте открыть пробную неделю
                    </span>
                    <Timer/>
                </div>
            </nav>
            <main className="flex flex-1 justify-center">
                <div className="max-w-[1216px] flex flex-col w-full xxs:mx-4">
                    <div>
                        <span
                            className="font-bold
                            xs:text-[40px]
                            text-white
                            xxs:text-[24px]
                            ">
                            Выбери подходящий для себя
                        </span>
                        <span
                            className="font-bold
                            xs:text-[40px]
                            text-[#FDB056]
                            xxs:text-[24px]
                            "
                        > тариф
                        </span>
                    </div>
                    <div className="
                        flex
                        flex-col
                        items-center
                        w-full
                        max-w-[1216px]
                        xxs:mt-[24px]
                        xs:mt-[20px]
                        md:mt-[110px]
                        large:flex-row
                        justify-between
                    ">
                        <img
                            src={man.src}
                            alt="man"
                            className="
                                xxs:w-[99.28px]
                                xxs:h-[200px]
                                xs:w-[124.1px]
                                xs:h-[250px]
                                sm:w-[380.73px]
                                sm:h-[767px]
                                [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]

                        "/>

                        <div className="
                            flex
                            lg:max-w-[748px]
                            lg:h-auto
                            flex-col
                            justify-between
                            md:max-w-[748px]

                        ">
                            <div className="
                            flex
                            justify-between
                            flex-col
                            lg:m-0
                            lg:h-auto
                            ">
                                <OfferCard data={theBestOffer}/>
                                <div className="
                                    flex
                                    justify-between
                                    h-auto
                                    xxs:flex-col-reverse
                                    lg:flex-row-reverse
                                ">
                                        {otherOffers.map((item, i) => (
                                            <OfferCard
                                                key={item.id + i}
                                                data={item}
                                                id={`offer-${i}`}
                                            />
                                        ))}
                                </div>
                        </div>


                        <div className="
                            flex
                            flex-col
                            justify-between
                            lg:h-[328px]
                            xxs:mt-[4px]
                            lg:mt-1
                        ">
                            <div className="
                                flex
                                items-center
                                h-auto
                                xxs:p-3.5
                                sm:p-[18px]
                                justify-center
                                xss:w-auto
                                md:w-[499px]
                                h-[78px]
                                bg-[#313637]
                                rounded-[25px/25px]
                            ">
                                <div className="flex md:w-[459px] ">
                                    <img src={alert.src} alt="alert" className="w-[24px] h-[26px]"/>
                                        <span className="
                                            text-white
                                            xxs:text-[12px]
                                            sm:text-[16px]
                                            xxs:ml-1.5
                                            sm:ml-2
                                        ">
                                            Следуя плану на 3 месяца и более, люди получают в 2 раза лучший результат, чем за 1 месяц
                                        </span>
                                    </div>
                                </div>

                                <div>

                                </div>
                                <ClientPart />
                                <span className="
                                    text-[#9B9B9B]
                                    xxs:text-[10px]
                                    md:text-[14px]
                                    sm:text-[10px]
                                    xxs:mt-2.5
                                    xs:mt-5
                                    sm:mt-3.5
                                ">
                                    Нажимая кнопку «Купить», Пользователь соглашается на разовое списание денежных средств для получения пожизненного доступа к приложению. Пользователь соглашается, что данные кредитной/дебетовой карты будут сохранены для осуществления покупок дополнительных услуг сервиса в случае желания пользователя.
                                </span>
                            </div>

                        </div>
                    </div>
                    <div className="
                        self-center
                        w-full
                        xss:mx-4
                        xxs:p-3
                        max-w-[1216px]
                        sm:p-5
                        sm:mx-0
                        border
                        xxs:mt-[22px]
                        xxs:mb-5
                        xs:mb-[30px]
                        xs:mt-[24px]
                        sm:mt-[66px]
                        sm:mb-[150px]
                        sm:h-auto
                        border-[#484D4E]
                        rounded-[25px/35px]
                    ">
                        <div className="
                            flex
                            items-center
                            justify-center
                            xxs:mb-2.5
                            sm:mb-[30px]
                            xxs:max-w-[265px]
                            xxs:h-[41px]
                            xs:max-w-[294px]
                            xs:h-[44px]
                            sm:max-w-[461px]
                            sm:h-[68px]
                            bg-[#2D3233]
                            border
                            border-[#81FE95]
                            rounded-4xl
                        ">
                            <span className="
                                text-[#81FE95]
                                xxs:text-[16px]
                                xs:text-[18px]
                                sm:text-[28px]
                            ">
                                гарантия возврата 30 дней
                            </span>

                        </div>
                        <span className="
                            xxs:text-[13px]
                            xs:text-[14px]
                            sm:text-[24px]
                            text-[#DCDCDC]
                        ">
                            Мы уверены, что наш план сработает для тебя и ты увидишь видимые результаты уже через 4 недели! Мы даже готовы полностью вернуть твои деньги в течение 30 дней с момента покупки, если ты не получишь видимых результатов.
                        </span>
                    </div>
                </div>
            </main>
        </div>

    );

}
