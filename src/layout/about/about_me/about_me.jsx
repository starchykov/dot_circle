import s from "./about_me.module.scss"
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import aboutMeBg from '../../../assets/about_me.png'
import {FaFacebookSquare, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {BsYoutube} from "react-icons/all";


let AboutMe = () => {
    let t = (key) => i18next.t(key);
    return (
        <div className={s.aboutMe}>

            <div className={s.leftContent}>
                <h1>{t('Let`s get to know each other')}</h1>
                <p>{t('Hello everyone, my name is Anar')}</p>
            </div>

            <div className={s.rightContent}>
                <img src={aboutMeBg} alt="" className={s.aboutMeBg}/>
                <div className={s.social}>
                    <a href={'https://www.youtube.com/channel/UCkrJlMOqKg_8GlbQL5_y44w'} className={s.socialLink}>
                        <BsYoutube className={s.faLogo}/>
                    </a>
                    <a href={'https://www.facebook.com/anar.mammadov.56211'} className={s.socialLink}>
                        <FaFacebookSquare className={s.faLogo}/>
                    </a>
                    <a href={'https://www.instagram.com/anarmammadov.az/'} className={s.socialLink}>
                        <FaInstagram className={s.faLogo}/>
                    </a>
                    <a href={'https://linkedin.com/in/anar-mammadov-a3a66727/'} className={s.socialLink}>
                        <FaLinkedinIn className={s.faLogo}/>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default withNamespaces()(AboutMe);