import s from './webinars.module.scss'
import {withNamespaces} from "react-i18next";
import {useEffect} from "react";
import Background from "../common/background/background";

const Webinars = ({t}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('Webinars'));

    return (
        <div className={s.webinars}>
            <Background background={`${process.env.PUBLIC_URL}/assets/webinar_bg.png`}/>

            <h1 className={s.title}>{t('Webinars')}</h1>

            <div className={s.contentBox}>
                <h1 className={s.containerTitle}><i className={'bx bx-info-square'}/>{t('Webinars')}</h1>
                <p className={s.normal}>{t('This is a modern and effective consultation')}</p>
                <p className={s.normal}>{t('This type of training is useful for those who have')}</p>
                <h1 className={s.containerTitle}><i className={'bx bx-message-square-detail'}/>{t('Principles of webinar training')}</h1>
                <p className={`${s.listItem}`}>{t('Interactive interaction between the trainer')}</p>
                <p className={`${s.listItem}`}>{t('At the next session')}</p>
            </div>

            <div className={s.contentBox}>
                <h1 className={s.containerTitle}><i className={'bx bx-error-circle'}/>{t('The advantages of webinars')}</h1>
                <p className={`${s.listItem}`}>{t('Saving time and money')}</p>
                <p className={`${s.listItem}`}>{t('Obtaining knowledge')}</p>
            </div>

            <div className={s.contentBox}>
                <h1 className={s.containerTitle}><i className={'bx bx-message-square-edit'}/>{t('Features')}</h1>
                <p className={`${s.listItem}`}>{t('The formation of groups of no more than 10 people')}</p>
                <p className={`${s.listItem}`}>{t('The duration and cost of training')}</p>
            </div>

        </div>
    )
}

export default withNamespaces()(Webinars);