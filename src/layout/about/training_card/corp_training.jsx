import style from './corp_training.module.scss';
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import cardImage from '../../../assets/corp_training.png'
import { v4 as uuidv4 } from 'uuid';


const Corp_training = () => {
    // Minify i18next construction
    let t = (key) => i18next.t(key);

    return (
        <div className={style.corporateTraining}>
            <div className={style.topLine}>
                <div className={style.leftContent}><img src={cardImage} alt=""/></div>
                <div className={style.rightContent}>
                    <h1 key={uuidv4()}>{t('Corporate Training')}</h1>
                    <span>{t('Corporate training programs can effectively')}</span>
                </div>
            </div>
            <div className={style.item}>
                <h3>
                    <div className={style.circle}><span className={style.number}>1</span></div>
                    {t('Invitation process')}
                </h3>
                {t('Make a breakthrough')}
            </div>
            <div className={style.item}>
                <h3>
                    <div className={style.circle}><span className={style.number}>2</span></div>
                    {t('Skill processes')}
                </h3>
                {t('Get specific tools')}
            </div>
            <div className={style.item}>
                <h3>
                    <div className={style.circle}><span className={style.number}>3</span></div>
                    {t('Continuous growth')}
                </h3>
                {t('Tune-in to new changes and achievements')}
            </div>
        </div>
    )
};

export default withNamespaces()(Corp_training);