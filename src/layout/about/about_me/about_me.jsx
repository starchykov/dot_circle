import s from "./about_me.module.scss"
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import {Link} from "react-router-dom";
import aboutMeBg from '../../../assets/about_me.png'
import {FaFacebookSquare, FaInstagram, FaLinkedinIn} from "react-icons/fa";


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
                    <Link to={'/'} className={s.socialLink}>
                        <FaFacebookSquare className={s.faLogo}/>
                    </Link>
                    <Link to={'/'} className={s.socialLink}>
                        <FaInstagram className={s.faLogo}/>
                    </Link>
                    <Link to={'https://linkedin.com/in/anar-mammadov-a3a66727/'} className={s.socialLink}>
                        <FaLinkedinIn className={s.faLogo}/>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default withNamespaces()(AboutMe);