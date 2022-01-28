import style from './corp_training.module.scss';
import {withNamespaces} from "react-i18next";
import i18next from 'i18next';
import openTrainingBg from '../../../assets/open_training.png'
import { v4 as uuidv4 } from 'uuid';


const IndividualTraining = () => {
    // Minify i18next construction
    let t = (key) => i18next.t(key);

    return (
        <div className={style.corporateTraining}>

            <div className={style.topLine}>
                <div className={style.leftContent}>
                    <img src={openTrainingBg} alt=""/>
                </div>

                <div className={style.rightContent}>
                    <h1 key={uuidv4()}>{t('Open training')}</h1>
                    <span>{t('An open training format involves a combined composition')}</span>
                </div>
            </div>

            <div className={style.item}>
                <h3 key={uuidv4()}>
                    <div className={style.circle}>
                        <span className={style.number}>1</span>
                    </div>
                    {t('Invitation process')}
                </h3>

                {t('Carry out an in-depth study of the issue')}

            </div>

            <div className={style.item}>

                <h3 key={uuidv4()}>
                    <div className={style.circle}>
                        <span className={style.number}>2</span>
                    </div>
                    {t('Skill processes')}
                </h3>

                {t('Get specific tools, knowledge, skill practices')}
            </div>

            <div className={style.item}>

                <h3 key={uuidv4()}>
                    <div className={style.circle}>
                        <span className={style.number}>3</span>
                    </div>
                    {t('Continuous growth')}
                </h3>
                {t('Bring Purity of Mind to your life')}
            </div>

        </div>
    )
};
export default withNamespaces()(IndividualTraining);