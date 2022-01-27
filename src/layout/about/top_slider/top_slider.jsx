import {withNamespaces} from "react-i18next";
import s from './top_slider.module.scss'

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper core and required modules
import SwiperCore, {Autoplay, Keyboard, Mousewheel, Navigation, Pagination} from 'swiper';
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'

import bgImage from './../../../assets/top_slider_bg.png'
import {useCallback} from "react";
import { v4 as uuidv4 } from 'uuid';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);


const TopSlider = ({t}) => {

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), [])

    let slideData = [
        {'title': 'Goals', 'message': 'We look for tools to achieve the desired changes in our lives'},
        {'title': 'Goals', 'message': 'To study effective technologies'},
        {'title': 'Goals', 'message': 'We create the best conditions'},
        {'title': 'Values', 'message': 'Individual approach Continuous development'},
    ];

    const slides = () => slideData.map((i, idx) => {
        return <SwiperSlide key={uuid(idx)} className={s.slide}><h1 key={uuidv4()}>{t(i.title)}</h1><p key={uuidv4()}>{t(i.message)}</p></SwiperSlide>
    });

    return (
        <Swiper navigation={true}
                mousewheel={true}
                keyboard={true}
                loop={true}
                autoplay={{"delay": 2500, "disableOnInteraction": false}}
                pagination={{"dynamicBullets": true, "clickable": true}}
                className={s.swiper}>

            <img src={bgImage} alt="" className={s.bgImage}/>

            {slides()}

        </Swiper>
    )
};

export default withNamespaces()(TopSlider);