import s from './immersion.module.scss'
import {withNamespaces} from "react-i18next";
import PageTitle from "../../common/title/title";
import video from './../../../assets/immersion.mp4'
import {useCallback, useRef} from "react";
import {
    BsBoxArrowInDown,
    BsFillInfoSquareFill,
    GrStatusInfo, MdCommentBank,
    MdOutlineKeyboardArrowDown
} from "react-icons/all";

const Immersion = ({t}) => {

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), []);

    const contentBlock = useRef(null);

    let file = ['', '']

    return (
        <div className={s.immersion}>

            <div className={s.header}>
                <video autoPlay muted loop id="myVideo">
                    <source src={video} type="video/mp4"/>
                </video>

                <PageTitle title={t('Immersion retreat for those who needs a reboot')}/>

                <div className={s.contentBox}>
                    <h1 className={s.containerTitle}><GrStatusInfo/>{t('Immersion')}</h1>
                    <h3 >{t('Live a quality stop in one day')}</h3>
                </div>

                <div className={s.contentBox}>
                    <div className={s.videoBox}>
                        <div className={s.leftContent}>
                            <iframe src={'https://www.youtube.com/embed/0sp4AqKj2iA'}/>
                        </div>
                        <div className={s.rightContent}><h1>{t('Watch this teaser')}</h1><span>{t('')}</span></div>
                    </div>
                </div>

                <div className={s.arrow} onClick={() => contentBlock.current.scrollIntoView({ behavior: "smooth"})}>
                    <p className={s.arrowText}>{t('See more')}</p>
                    <MdOutlineKeyboardArrowDown/>
                </div>

            </div>

            <div className={s.content} ref={contentBlock}>
                <div className={s.contentBox} >
                    <h1 className={s.containerTitle}><BsFillInfoSquareFill/>{t('What is a retreat')}</h1>
                    <p>{t('A Retreat is a solitude to connect with oneself')}</p>
                    <p>{t('This is a stop that every one of us')}</p>
                </div>

                <div className={s.contentBox}>
                    <h1 className={s.containerTitle}><i className={'bx bx-message-square-detail'}/>{t('Immersion will suit you')}</h1>
                    {t('If you often feel stress and want to understand').split(`\n`).map((e, idx) => <p key={uuid(idx)} className={`${s.listItem}`}>{e}</p>)}
                </div>

                <div className={s.contentBox}>

                    <div className={s.commonBox}>
                        <h1 className={s.containerTitle}><i className={'bx bx-message-square-detail'}/>{t('What awaits you')}</h1>
                        {t('Dive - is a specially developed program').split(`\n`).map((e, idx) => <p key={uuid(idx)}>{e}</p>)}
                        {file.map(e => <div className={s.file}><BsBoxArrowInDown/></div>)}
                        <p className={s.hint}>{t('Click to download the program')}</p>
                    </div>

                    <div className={s.commonBox}>
                        <h1 className={s.containerTitle}><i className={'bx bx-message-square-detail'}/>{t('What will you gain as a result')}</h1>
                        {t('Renewal of perception and state').split(`\n\n`).map((e, idx) => {
                            return <div className={s.contentBoxItem}>
                                {<h3>{e.split('\n')[0]}</h3>}
                                <p key={uuid(idx)}>{e.split('\n')[1]}</p>
                            </div>
                        })}
                    </div>

                </div>

                <div className={s.contentBox}>
                    <div className={s.commonBox}>
                        <h1 className={s.containerTitle}><MdCommentBank/>{t('Feedback')}</h1>
                        <iframe className={s.feedback} src={'https://www.youtube.com/embed/SvABVGRBph0?start=128'}/>
                    </div>

                    <div className={s.commonBox}>
                        <h1 className={s.containerTitle}><GrStatusInfo/>{t('Contact us')}</h1>
                        <h3 className={`${s.listItem}`}>{'Email: anar.m@dot-circle.com'}</h3>
                        <h3 className={`${s.listItem}`}>{'Instagram: '}<a href="#">{'open in new window'}</a></h3>
                        <h3 className={`${s.listItem}`}>{'LinkedIn: '}<a href="#">{'open in new window'}</a></h3>
                        <h3 className={`${s.listItem}`}>{'Facebook: '}<a href="#">{'open in new window'}</a></h3>
                    </div>
                </div>
            </div>

        </div>
    )
};


export default withNamespaces()(Immersion);