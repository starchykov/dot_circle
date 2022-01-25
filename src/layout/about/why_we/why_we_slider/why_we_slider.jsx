import React from "react";
import s from "./why_we_slider.module.scss";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper core and required modules
import SwiperCore, {Autoplay, Keyboard, Mousewheel, Navigation, Pagination} from 'swiper';
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import {withNamespaces} from "react-i18next";


// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);


const WhyWeSlider = ({t}) => {
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
                        <span>{t('We are one of only few')}</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className={s.slideItem}>
                <div className={s.item}>
                    <h1>2</h1>
                    <div className={s.circle}>
                        <span>{t('70% of our training')}</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className={s.slideItem}>
                <div className={s.item}>
                    <h1>3</h1>
                    <div className={s.circle}>
                        <span>{t('Our training programs')}</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className={s.slideItem}>
                <div className={s.item}>
                    <h1>4</h1>
                    <div className={s.circle}>
                        <span>{t('We teach programs tested')}</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className={s.slideItem}>
                <div className={s.item}>
                    <h1>5</h1>
                    <div className={s.circle}>
                        <span>{t('At our training programs')}</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className={s.slideItem}>
                <div className={s.item}>
                    <h1>6</h1>
                    <div className={s.circle}>
                        <span>{t('Upon the completion of')}</span>
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide className={s.slideItem}>
                <div className={s.item}>
                    <h1>7</h1>
                    <div className={s.circle}>
                        <span>{t('We are available for our clients')}</span>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}

export default withNamespaces()(WhyWeSlider);