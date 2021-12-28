import s from './comensts.module.scss'

const Comments = () => {
    return (
        <div className={s.container}>
            <>
                <Swiper slidesPerView={3}
                        spaceBetween={30}
                        slidesPerGroup={3}
                        loop={true}
                        loopFillGroupWithBlank={true}
                        pagination={{"clickable": true}}
                        navigation={true}
                        className="mySwiper">
                    <SwiperSlide>
                        <div className={s.item}>
                            <img src="" alt=""/>
                            <div className={s.name}>
                                Эсмира Гюль
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className={s.item}>
                            <img src="" alt=""/>
                            <div className={s.name}>
                                Parviz
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className={s.item}>
                            <img src="" alt=""/>
                            <div className={s.name}>

                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className={s.item}>
                            <img src="" alt=""/>
                            <div className={s.name}>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className={s.item}>
                            <img src="" alt=""/>
                            <div className={s.name}>

                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className={s.item}>
                            <img src="" alt=""/>
                            <div className={s.name}>
                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className={s.item}>
                            <img src="" alt=""/>
                            <div className={s.name}>

                            </div>
                        </div>
                    </SwiperSlide>


                    <SwiperSlide>
                        <div className={s.item}>
                            <img src="" alt=""/>
                            <div className={s.name}>

                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className={s.item}>
                            <img src="" alt=""/>
                            <div className={s.name}>

                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </div>
    )
};

export default Comments;