import s from './why_we.module.scss';
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import WhyWeSlider from "./why_we_slider/why_we_slider";
import { v4 as uuidv4 } from 'uuid';


const WhyWe = () => {
    // Minify i18next construction
    let t = (key) => i18next.t(key);

    return (
        <div className={s.container}>

            <div className={s.topLine}>
                <div className={s.leftContent}>
                    <h1 key={uuidv4()}>{t('Why we?')}</h1>
                    <p key={uuidv4()}>{t('Each training is a')}</p>
                </div>
            </div>
            <div className={s.whyWeSlider}><WhyWeSlider/></div>
        </div>
    );
};

export default withNamespaces()(WhyWe);