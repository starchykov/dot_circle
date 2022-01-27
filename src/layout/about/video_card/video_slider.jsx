import s from './video_card.module.scss'
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import { v4 as uuidv4 } from 'uuid';

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper core and required modules
import SwiperCore, {Autoplay, Keyboard, Mousewheel, Navigation, Pagination} from 'swiper';
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import {useCallback} from "react";


// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

const VideoCard = () => {
    let t = (key) => i18next.t(key);

    let slideData = [
        {'title': 'Transformation program', 'message': 'This program was created in the basis', 'src': 'https://www.youtube.com/embed/yPN81XlZ1oo'},
        {'title': 'Self-development', 'message': 'Self-development is a continuous improvement', 'src': 'https://www.youtube.com/embed/9h84XtWV3Lg'},
        {'title': 'Stress management', 'message': 'We should cultivate our own', 'src': 'https://www.youtube.com/embed/2hp6b_k8ezY'},
        {'title': 'Time management', 'message': 'What is time and how is it valuable to us', 'src': 'https://www.youtube.com/embed/wtI4mQ4My1M'},
    ]

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), [])

    const videos = () => slideData.map((i, idx) => {
        return (
            <SwiperSlide key={uuid(idx)} className={s.videoBox}>
                <div className={s.leftContent}><iframe title={i.src} src={i.src}/></div>
                <div className={s.rightContent}><h1 key={uuidv4()}>{t(i.title)}</h1><span>{t(i.message)}</span></div>
            </SwiperSlide>
        )
    })

    return (
        <Swiper direction={'vertical'}
                spaceBetween={30}
                mousewheel={true}
                keyboard={true}
                loop={true}
                autoplay={{"delay": 2500}}
                pagination={{"dynamicBullets": true, "clickable": true}}
                className={s.swiper}>
            {videos()}
        </Swiper>
    )
};

export default withNamespaces()(VideoCard);