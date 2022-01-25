import s from './immersion.module.scss'
import {withNamespaces} from "react-i18next";
import {Title, PageTitle, ContainerTitle} from "../../common/title/title";
import video from './../../../assets/immersion.mp4'
import React, {useCallback, useRef} from "react";
import {
    BiNotification, BsDot, FcLeave,
    MdOutlineKeyboardArrowDown, RiArrowDropRightFill,
    RiArticleFill,
    RiChatHistoryFill,
    RiContactsFill, RiFacebookBoxFill,
    RiFeedbackFill, RiInstagramFill, RiLinkedinBoxFill, RiMailSendFill,
    RiMedalLine,
} from "react-icons/all";
import {BoldText, HintText, ItemText} from "../../common/text/text";
import File from "../../common/file/file";
import Footer from "../../footer/footer";
import program_1_rus from '../../../assets/files/immersion_1_rus.pdf';
import program_2_rus from '../../../assets/files/immersion_2_rus.pdf';
import program_1_eng from '../../../assets/files/immersion_1_eng.pdf';
import i18n from "i18next";

const Immersion = ({t}) => {

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), []);

    const contentBlock = useRef(null);

    let file = [];

    if(i18n.language === 'ru') file = [program_1_rus, program_2_rus];
    if(i18n.language === 'en') file = [program_1_eng];
    if(i18n.language === 'az') file = [program_1_eng];

    return (
        <div className={s.immersion}>

            <div className={s.header}>
                <video autoPlay muted loop id="myVideo"><source src={video} type="video/mp4"/></video>

                <Title title={t('Immersion retreat for those who needs a reboot')}/>

                <div className={s.contentBox}>
                    <PageTitle icon={<BiNotification/>} title={t('Immersion')}/>
                    <ContainerTitle icon={<FcLeave/>} title={t('Live a quality stop in one day')}/>
                </div>

                <div className={s.contentBox}>
                    <div className={s.videoBox}>
                        <div className={s.leftContent}>
                            <iframe src={'https://www.youtube.com/embed/0sp4AqKj2iA'}/>
                        </div>
                        <div className={s.rightContent}>
                            <PageTitle title={t('Watch this teaser')}/>
                        </div>
                    </div>
                </div>

                <div className={s.arrow} onClick={() => contentBlock.current.scrollIntoView({ behavior: "smooth"})}>
                    <p className={s.arrowText}>{t('See more')}</p>
                    <MdOutlineKeyboardArrowDown/>
                </div>

            </div>

            <div className={s.content} ref={contentBlock}>

                <div className={s.stars}/>
                <div className={s.stars2}/>
                <div className={s.stars3}/>

                <div className={s.contentBox} >
                    <PageTitle icon={<RiArticleFill/>} title={t('What is a retreat')}/>
                    <BoldText text={t('A Retreat is a solitude to connect with oneself')}/>
                    <BoldText text={t('This is a stop that every one of us')}/>
                </div>

                <div className={s.contentBox}>
                    <PageTitle icon={<BiNotification/>} title={t('Immersion will suit you')}/>
                    {t('If you often feel stress and want to understand').split(`\n`).map((e, idx) => {
                        return <ItemText key={uuid(idx)} icon={<BsDot/>} text={e}/>
                    })}
                </div>

                <div className={s.contentBox}>

                    <div className={s.commonBox}>
                        <PageTitle icon={<RiChatHistoryFill/>} title={t('What awaits you')}/>
                        {t('Dive - is a specially developed program').split(`\n`).map((e, idx) => {
                            return <ContainerTitle key={uuid(idx)} title={e}/>
                        })}
                        {file.map((el, idx) => <File key={uuid(idx)} link={el}/>)}
                    </div>

                    <div className={s.commonBox}>
                        <PageTitle icon={<RiMedalLine/>} title={t('What will you gain as a result')}/>
                        {t('Renewal of perception and state').split(`\n\n`).map((e, idx) => {
                            return <div className={s.contentBoxItem}>
                                <ContainerTitle key={uuid(idx)} icon={<RiArrowDropRightFill/>} title={e.split('\n')[0]}/>
                                <ItemText key={uuid(idx)} text={e.split('\n')[1]} style={{paddingLeft: '42px'}}/>
                            </div>
                        })}
                    </div>

                </div>

                <div className={s.contentBox}>
                    <div className={s.commonBox}>
                        <PageTitle icon={<RiFeedbackFill/>} title={t('Feedback')}/>
                        <iframe className={s.feedback} src={'https://www.youtube.com/embed/SvABVGRBph0?start=128'}/>
                    </div>

                    <div className={s.commonBox}>
                        <PageTitle icon={<RiContactsFill/>} title={t('Contact us')}/>
                        <ContainerTitle icon={<RiMailSendFill/>} title={t('Email: anar.m@dot-circle.com')}/>
                        <a className={s.socialLink} href="https://www.instagram.com/anarmammadov.az/">
                            <ContainerTitle icon={<RiInstagramFill/>} title={t('Instagram')} style={{width: 'max-content'}}/>
                            <HintText text={t('Click to open')}/>
                        </a>
                        <a className={s.socialLink} href="https://www.facebook.com/anar.mammadov.56211/">
                            <ContainerTitle icon={<RiLinkedinBoxFill/>} title={t('LinkedIn')} style={{width: 'max-content'}}/>
                            <HintText text={t('Click to open')}/>
                        </a>
                        <a className={s.socialLink} href="https://www.facebook.com/anar.mammadov.56211/">
                            <ContainerTitle icon={<RiFacebookBoxFill/>} title={t('Facebook')} style={{width: 'max-content'}}/>
                            <HintText text={t('Click to open')}/>
                        </a>
                    </div>
                </div>

                <Footer style={{borderRadius: '12px'}}/>

            </div>

        </div>
    )
};


export default withNamespaces()(Immersion);