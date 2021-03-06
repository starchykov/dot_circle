import s from "./footer.module.scss"
import {NavLink} from "react-router-dom";
import logo from "../../assets/logo.png"
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
import {useCallback} from "react";
import {BsYoutube} from "react-icons/all";
import { v4 as uuidv4 } from 'uuid';

const Footer = ({t, style}) => {

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), [])

    return (
        <footer key={uuid(new Date())} className={s.footer} style={style}>

            <div className={s.infoArea}>

                <div className={s.footerCta}>
                    <div className={s.row}>

                        <div className={s.col}>
                            <div className={s.singleCta}>
                                <FaMapMarkerAlt className={s.faLogo}/>
                                <h4 className={s.title}>{t('Find us')}</h4>
                                <span><a href="https://goo.gl/maps/n84XFtehTvHDRy596"><span>Sabit Rahman 72 A , Baku</span></a></span>
                            </div>
                        </div>

                        <div className={s.col}>
                            <div className={s.singleCta}>
                                <FaPhone className={s.faLogo}/>
                                <h4 className={s.title}>{t('Call us')}</h4>
                                <span><a href="tel:+1234567890"><span>{'+994503353548'}</span></a></span>
                            </div>
                        </div>

                        <div className={s.col}>
                            <div className={s.singleCta}>
                                <FaEnvelope className={s.faLogo}/>
                                <h4 className={s.title}>{t('Mail us')}</h4>
                                <span><a href='mailto:anar.m@dot-circle.com'><span>anar.m@dot-circle.com</span></a></span>
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
                                    <h3 key={uuidv4()} className={s.title}>{t('Follow us')}</h3>
                                    <a href={'https://www.youtube.com/channel/UCkrJlMOqKg_8GlbQL5_y44w'}>
                                        <BsYoutube className={s.faLogo}/>
                                    </a>
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
                                <h3 key={uuidv4()} className={`${s.title} ${s.underlined}`}>{t('Useful Links')}</h3>
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
                                <h3 key={uuidv4()} className={`${s.title} ${s.underlined}`}>{t('Subscribe')}</h3>
                                <div className={s.footerText}>
                                    <p key={uuidv4()}>Don???t miss to subscribe to our new feeds, kindly fill the form below.</p>
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

                    <div className={s.row}>
                        <div className={s.col}>
                            <div className={s.copyrightText}>
                                <p key={uuidv4()}>?? 2019 Copyright: dot-circle.com</p>
                            </div>
                        </div>
                    </div>

            </div>

        </footer>
    );
};

export default compose(withNamespaces(), connect(null, null))(Footer);