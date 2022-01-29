import s from './transformation.module.scss'
import {withNamespaces} from "react-i18next";
import React, {useCallback, useEffect} from "react";
import Background from "../../common/background/background";
import MaterialBox from "../../common/material_box/material_box";
import arrow from "../../../assets/arrow_cooperation_process.svg";
import {
    BiNotification, BsDot, CgFeed,
    RiArrowDropRightFill,
    RiArticleFill, RiNodeTree,
    RiTeamFill
} from "react-icons/all";
import {ContainerTitle, PageTitle, Title} from "../../common/title/title";
import {BoldText, ItemText, Text} from "../../common/text/text";
import transformation_1 from '../../../assets/files/transformation_1.pdf';
import transformation_2 from '../../../assets/files/transformation_2.pdf';

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
// Import Swiper core and required modules
import SwiperCore, {Autoplay, Keyboard, Mousewheel, Navigation, Pagination} from 'swiper';
import 'swiper/swiper.min.css'
import 'swiper/swiper-bundle.min.css'
import comm1 from "../../../assets/comm1.png";
import comm2 from "../../../assets/comm2.png";
import comm3 from "../../../assets/comm3.png";
import comm4 from "../../../assets/comm4.png";
import comm5 from "../../../assets/comm5.png";
import comm7 from "../../../assets/comm7.png";
import comm8 from "../../../assets/comm8.png";
import comm9 from "../../../assets/comm9.png";
import comm10 from "../../../assets/comm10.png";
import File from "../../common/file/file";
import Footer from "../../footer/footer";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

const Transformation = ({t}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('Transformation'));

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), [])

    const InlineItems = () => {
        let titleStyle = {width: '50px', margin: 0, color: '#ff962e', lineHeight: 1, alignItems: 'center'};
        let h = [
            'For adults',
            'For those who are in searching of new achievements in life',
            'For those who want to learn new skill',
            'For those who are looking for a new self'
        ];
        let i = 1;
        return (
            <>
                <PageTitle icon={<RiTeamFill/>} title={t('For whom is this programme')}/>
                {h.map((e, idx) => <div key={uuid(idx)} className={s.block}>
                    <Title title={i++} style={titleStyle}/>
                    <Text text={t(e)} style={{alignItems: 'center'}}/>
                </div>)}
            </>
        );
    };

    const Process = () => {
        let titleStyle = {margin: 0, color: '#bed73d', lineHeight: 1, alignItems: 'center'};
        return (
            <div className={s.process}>
                <PageTitle icon={<RiNodeTree/>}  title={t('Program structure')}/>
                <PageTitle title={t('The full program consists of')} style={{width: '100%'}}/>
                <div className={s.topLine}>
                    <div className={s.item}>
                        <div>
                            <Title title={1} style={titleStyle}/>
                            <Text text={t('Course')} style={{justifyContent: 'center'}}/>
                        </div>
                        <div>
                            <Text text={t('3 - 4 month')}/>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div>
                            <Title title={2} style={titleStyle}/>
                            <Text text={t('Course')} style={{justifyContent: 'center'}}/>
                        </div>
                        <div>
                            <Text text={t('3 - 4 month')}/>
                            <img src={arrow} alt=""/>
                        </div>
                    </div>
                    <div className={s.item}>
                        <div>
                            <Title title={3} style={titleStyle}/>
                            <Text text={t('Course')} style={{justifyContent: 'center'}}/>
                        </div>
                    </div>

                </div>
                <div className={s.bottomLine}>
                    <File content={<BoldText text={t('Movement. Breathing. Consciousness.')}
                                                   style={{justifyContent: 'center', textAlign: 'center' ,color: '#333'}}/>}
                          style={{width: '350px', height: '180px', margin: '10px 0'}}
                          link={transformation_1}/>
                    <File content={<BoldText text={t('Time. Energy. Action.')}
                                                   style={{justifyContent: 'center', textAlign: 'center' ,color: '#333'}}/>}
                          style={{width: '350px', height: '180px', margin: '10px 0'}}
                          link={transformation_2}/>
                    <File content={<BoldText text={t('Course')}
                                                   style={{justifyContent: 'center', textAlign: 'center' ,color: '#333'}}/>}
                          style={{width: '350px', height: '180px', margin: '10px 0'}}
                          link={transformation_2}/>
                </div>
            </div>
        );
    };

    const FeedBack = () => {
        let mobile = window.innerWidth <= 600;

        const data = [
            {
                name: 'Эсмира Гюль',
                position: 'Руководитель творческого пространства «ArtSchoolbyEsmiraGul”',
                image: comm1,
                social: [
                    {icon: 'facebook', link: 'https://www.facebook.com/anar.mammadov.56211/'},
                    {icon: 'instagram', link: 'https://www.instagram.com/anarmammadov.az/'},
                    {icon: 'linkedin', link: 'https://www.linkedin.com/in/anar-mamm/'},
                ],
                comment: 'Я очень рада, что участвовала на семинарах'
            },
            {
                name: 'Ольга Казанская',
                position: "Профессиональный сертифицированный коуч (Erickson Professional Coach)",
                image: comm2,
                social: [
                    {icon: 'facebook', link: '/'},
                    {icon: 'instagram', link: '/'},
                    {icon: 'linkedin', link: '/'},
                ],
                comment: 'Глубоко убеждена, что все встречи не случайны'
            },
            {
                name: 'Юлия Яковлева',
                position: "Старший Тренер-Консультант CBSD",
                image: comm3,
                social: [
                    {icon: 'facebook', link: '/'},
                    {icon: 'instagram', link: '/'},
                    {icon: 'linkedin', link: '/'},
                ],
                comment: 'Я прошла Трансформацию 1'
            },
            {
                name: 'Фарид Махмудов',
                position: 'Менеджер по продажам',
                image: comm4,
                social: [
                    {icon: 'facebook', link: '/'},
                    {icon: 'instagram', link: '/'},
                    {icon: 'linkedin', link: '/'},
                ],
                comment: 'Я очень благодарен за такую возможность'
            },
            {
                name: 'Масума Алиева',
                position: 'HR specialist',
                image: comm5,
                social: [
                    {icon: 'facebook', link: '/'},
                    {icon: 'instagram', link: '/'},
                    {icon: 'linkedin', link: '/'},
                ],
                comment: 'Благодаря семинару Трансформация понятия кармы'
            },
            {
                name: 'Биллура Магеррамова',
                position: 'Certified Human Resources Professional',
                image: comm9,
                social: [
                    {icon: 'facebook', link: '/'},
                    {icon: 'instagram', link: '/'},
                    {icon: 'linkedin', link: '/'},
                ],
                comment: 'Программа Трансформация - это уникальный'
            },
            {
                name: 'Светлана Ильинская',
                position: 'Предприниматель и Профессиональный Коуч',
                image: comm7,
                social: [
                    {icon: 'facebook', link: '/'},
                    {icon: 'instagram', link: '/'},
                    {icon: 'linkedin', link: '/'},
                ],
                comment: 'Меня зовут Светлана и я участвовала'
            },
            {
                name: 'Эмиль Алиев',
                position: 'Специалист по Охране Труда, Здоровья и Экологии Saudi AramCo',
                image: comm10,
                social: [
                    {icon: 'facebook', link: '/'},
                    {icon: 'instagram', link: '/'},
                    {icon: 'linkedin', link: '/'},
                ],
                comment: 'Я принял участие на тренинге'
            },
            {
                name: 'Александр',
                position: 'Руководитель отдела',
                image: comm8,
                social: [
                    {icon: 'facebook', link: '/'},
                    {icon: 'instagram', link: '/'},
                    {icon: 'linkedin', link: '/'},
                ],
                comment: 'От души благодарю организаторов'
            },
        ];

        return (
            <>
                <PageTitle icon={<CgFeed/>} title={t('Feedback')}/>

                <Swiper direction={'horizontal'}
                        spaceBetween={30}
                        slidesPerView={`${mobile ? 1 : 3}`}
                        mousewheel={false}
                        keyboard={true}
                        loop={true}
                        autoplay={false}
                        navigation={true}
                        pagination={{"dynamicBullets": true, "clickable": true}}
                        className={s.userFeedback}>

                    {data.map((i, idx) =>
                        <SwiperSlide key={uuid(idx)} className={s.card}><img src={i.image} alt=""/>
                            <div className={s.description}>
                                <PageTitle title={t(i.name)} style={{margin: '15px 0', color: '#333'}}/>
                                <ContainerTitle title={t('Position')}/>
                                <Text text={t(i.position)} style={{minHeight: '50px'}}/>
                                <ContainerTitle title={t('Feedback')} style={{margin: '15px 0', color: '#333'}}/>
                                <details className={s.dropdownBox}>
                                    <summary className={s.dropdownTitle}>
                                        <Text text={mobile
                                            ? t(i.comment).replace(/^(.{30}).{2,}/, "$1…")
                                            : t(i.comment).replace(/^(.{35}).{2,}/, "$1…")}
                                              style={{width: 'auto'}}/>
                                    </summary>
                                    <Text text={t(i.comment)} style={{textAlign: 'justify'}}/>
                                </details>
                            </div>
                        </SwiperSlide>
                    )}

                </Swiper>
            </>
        )
    };

    return (
        <div className={s.transformation}>
            <Background background={`${process.env.PUBLIC_URL}/assets/transformation.png`}/>
            <Title title={t('Transformation')}/>
            <MaterialBox content={
                <>
                    <PageTitle icon={<BiNotification/>} title={t('Transformation program')}/>
                    <BoldText text={t('This program was created in the basis')}/>
                    <ContainerTitle icon={<RiArticleFill/>} title={t('Knowledge and practical skills')}/>
                    <BoldText text={t('Many of us live our lives')}/>
                </>
            } style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>
            <MaterialBox content={
                <>
                    <PageTitle icon={<BiNotification/>} title={t('Transformation')}/>
                    <BoldText text={t('By attending this program')}/>
                    <ContainerTitle icon={<RiArrowDropRightFill/>}
                                    title={t('You should attend the program in the following cases')}/>
                    {t('You come to a dead-end in your life').split('\n').map((e, idx) => <ItemText key={uuid(idx)}
                                                                                                    text={e}
                                                                                                    icon={<BsDot/>}/>)}
                </>
            } style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>
            <MaterialBox content={<InlineItems/>}
                         style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>
            <MaterialBox content={<Process/>}
                         style={{width: '-webkit-fill-available', display: 'flex'}}/>
            <MaterialBox content={<FeedBack/>}
                         style={{width: '-webkit-fill-available', height: 'auto', display: 'flex', flexWrap: 'wrap'}}/>

            <Footer style={{borderRadius: '12px'}}/>

        </div>
    );
};

export default withNamespaces()(Transformation);