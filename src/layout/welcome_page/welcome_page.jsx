import {withNamespaces} from "react-i18next";
import s from "./welcome_page.module.scss"
import mainLogo from "../../assets/logo.png"
import dtTitleImage from "./../../assets/dt_title_image.png"
import dtBgImage from "./../../assets/dt_bg_image.png"

import jlyTitle from "./../../assets/jly_title_image.png"
import jlyBg from "./../../assets/jly_bg_image.png"

import mwmTitle from "./../../assets/mwm_title_image.png"
import mwmBg from "./../../assets/mwm_bg_image.png"

import {NavLink} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Background from "../common/background/background";
import {PageTitle} from "../common/title/title";

const WelcomePage = ({t}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('Welcome'));

    // Define menu state wia hook
    const [currentBackground, setActive] = useState(dtBgImage);
    // Set menu className to state
    const toggleClass = (src) => setActive(src);

    return (
        <div className={s.welcomePage}>
            <Background background={currentBackground}/>

            <div className={s.logoHead}>
                <NavLink to={'/'} className={s.socialLink}>
                    <img src={mainLogo} alt="logo" className={s.sociallLogo}/>
                </NavLink>
            </div>

            <div className={s.products}>

                <PageTitle title={t('Welcome to Dot&Circle')} style={{fontWeight: 500, fontSize: '30px'}}/>
                <PageTitle title={t('Select the product you are interested in')} style={{fontWeight: 500, fontSize: '30px'}}/>

                <div className={`${s.card} ${s.slideRight}`}>
                    <NavLink to={'/'} className={s.cardContent} onMouseEnter={() => toggleClass(dtBgImage)}>
                        <div className={s.cardImg}><img src={dtTitleImage} alt=""/></div>
                        <div className={s.cardText}>
                            <h3>DOT&CIRCLE</h3>
                            <span>{t('Learn more about us and our programs')}</span>
                        </div>
                    </NavLink>
                </div>

                <div className={`${s.card} ${s.slideUp}`} onMouseEnter={() => toggleClass(jlyBg)}>
                    <div className={s.cardContent}>
                        <div className={s.cardImg}><img src={jlyTitle} alt=""/></div>
                        <div className={s.cardText}><h3>Just love yourself</h3>
                            <span>{t('Anar Mammadov\'s online program how')}</span>
                        </div>
                    </div>
                </div>

                <div className={`${s.card} ${s.slideLeft}`} onMouseEnter={() => toggleClass(mwmBg)}>
                    <div className={s.cardContent}>
                        <div className={s.cardImg}><img src={mwmTitle} alt=""/></div>
                        <div className={s.cardText}>
                            <h3>Meditate with me</h3>
                            <span>{t('Meditate with me description')}</span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default withNamespaces()(WelcomePage);