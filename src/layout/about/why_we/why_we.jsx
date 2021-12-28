import s from './why_we.module.scss';
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import img from '../../../assets/anar_why_we.png'
import WhyWeSlider from "./why_we_slider/why_we_slider";


const WhyWe = () => {
    // Minify i18next construction
    let t = (key) => i18next.t(key);

    return (
        <div className={s.container}>

            <div className={s.topLine}>
                <div className={s.leftContent}>
                    <h1>{t('Why we?')}</h1>
                    <p>{t('Each training is a')}</p>
                </div>
                <div className={s.rightContent}><img src={img} alt=""/></div>
            </div>
            <div className={s.whyWeSlider}><WhyWeSlider/></div>
        </div>
    );
};

export default withNamespaces()(WhyWe);