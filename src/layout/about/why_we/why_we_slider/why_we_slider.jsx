import React, {useRef, useState} from "react";
import s from "./why_we_slider.module.scss";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper core and required modules
import SwiperCore, {Autoplay, Keyboard, Mousewheel, Navigation, Pagination} from 'swiper';
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'


// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);


const WhyWeSlider = () => {
    return (
            <Swiper direction={'vertical'}
                    spaceBetween={30}
                    mousewheel={true}
                    keyboard={true}
                    loop={true}
                    autoplay={{"delay": 2500}}
                    pagination={{"dynamicBullets": true, "clickable": true}}
                    className={s.whyWeSlider}>

                <SwiperSlide className={s.slideItem}>
                    <div className={s.item}>
                        <h1>1</h1>
                        <div className={s.circle}>
                        <span>We are one of only few training companies that provide courses both for companies and for individuals.
                        </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={s.slideItem}>
                    <div className={s.item}>
                        <h1>2</h1>
                        <div className={s.circle}>
                        <span>70% of our training programs are unique and have no analogy in the market.
                        </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={s.slideItem}>
                    <div className={s.item}>
                        <h1>3</h1>
                        <div className={s.circle}>
                        <span>Our training programs have a minimum of boring rules and a maximum of practical skills. The theoretical content is provided in an interactive way and immediately fixed by practical tasks.
                        </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={s.slideItem}>
                    <div className={s.item}>
                        <h1>4</h1>
                        <div className={s.circle}>
                        <span> We teach programs tested on a personal experience and consistent with the realities of our market.
                        </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={s.slideItem}>
                    <div className={s.item}>
                        <h1>5</h1>
                        <div className={s.circle}>
                        <span>-At our training programs the participants get knowledge within 1-2 days, make new acquaintances, exchange experience, which give them a strong motivation for actions!
                        </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={s.slideItem}>
                    <div className={s.item}>
                        <h1>6</h1>
                        <div className={s.circle}>
                        <span> Upon the completion of our training programs we provide a follow-up support and guidance to the clients and happy to keep in touch with all participants by phone, email and skype.
                        </span>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide className={s.slideItem}>
                    <div className={s.item}>
                        <h1>7</h1>
                        <div className={s.circle}>
                        <span> We are one of only few training companies that provide courses both for companies and for individuals.
                        </span>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
    )
}

export default WhyWeSlider;