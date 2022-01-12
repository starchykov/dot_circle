import s from "./footer.module.scss"
import {NavLink} from "react-router-dom";
import logo from "../../assets/logo.png"
import {Link} from "react-router-dom";
import {
    FaEnvelope,
    FaFacebookSquare,
    FaInstagram,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaPhone
} from "react-icons/fa";
import {compose} from "redux";
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";

const Footer = ({t}) => {
    return (
        <footer className={s.footer}>

            <div className={s.infoArea}>

                <div className={s.footerCta}>
                    <div className={s.row}>

                        <div className={s.col}>
                            <div className={s.singleCta}>
                                <FaMapMarkerAlt className={s.faLogo}/>
                                <h4 className={s.title}>Find us</h4>
                                <span>{'Sabit Rahman 72 A , Baku'}</span>
                            </div>
                        </div>

                        <div className={s.col}>
                            <div className={s.singleCta}>
                                <FaPhone className={s.faLogo}/>
                                <h4 className={s.title}>Call us</h4>
                                <span><a href="tel:+1234567890"><span>{'+994503353548'}</span></a></span>
                            </div>
                        </div>

                        <div className={s.col}>
                            <div className={s.singleCta}>
                                <FaEnvelope className={s.faLogo}/>
                                <h4 className={s.title}>Mail us</h4>
                                <span>anar.m@dot-circle.com</span>
                            </div>
                        </div>

                    </div>

                </div>
                <div className={s.footerContent}>
                    <div className={s.row}>
                        <div className={s.col}>
                            <div className={s.footerWidget}>
                                <img className={s.footerLogo} src={logo} alt=""/>
                                <div className={s.footerSocialIcon}>
                                    <h3 className={s.title}>Follow us</h3>
                                    <a href={'https://www.facebook.com/anar.mammadov.56211'}>
                                        <FaFacebookSquare className={s.faLogo}/>
                                    </a>
                                    <a href={'https://www.instagram.com/anarmammadov.az/'}>
                                        <FaInstagram className={s.faLogo}/>
                                    </a>
                                    <a href={'https://linkedin.com/in/anar-mammadov-a3a66727/'}>
                                        <FaLinkedinIn className={s.faLogo}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={s.col}>
                            <div className={s.footerWidget}>
                                <h3 className={`${s.title} ${s.underlined}`}>Useful Links</h3>
                                <ul>
                                    <li><NavLink to={'/'}>{t('About')}</NavLink></li>
                                    <li><NavLink to={'/trainings'}>{t('Business trainings')}</NavLink></li>
                                    <li><NavLink to={'/consulting'}>{t('Consulting')}</NavLink></li>
                                    <li><NavLink to={'/programs'}>{t('Open programs')}</NavLink></li>
                                    <li><NavLink to={'/webinars'}>{t('Webinars')}</NavLink></li>
                                    <li><NavLink to={'/useful'}>{t('Useful')}</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className={s.col}>
                            <div className={s.footerWidget}>
                                <h3 className={`${s.title} ${s.underlined}`}>Subscribe</h3>
                                <div className={s.footerText}>
                                    <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                </div>
                                <div className={s.subscribeForm}>
                                    <form action="#">
                                        <input type="text" placeholder="Email Address"/>
                                        <button><FaPaperPlane className={s.faLogo}/></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.copyrightArea}>
                <div className={s.container}>
                    <div className={s.row}>
                        <div className={s.col}>
                            <div className={s.copyrightText}>
                                <p>© 2019 Copyright: dot-circle.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default compose(withNamespaces(), connect(null, null))(Footer);