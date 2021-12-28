import style from './cooperation_process.module.scss'
import {withNamespaces} from "react-i18next";
import arrow from '../../../assets/arrow_cooperation_process.svg'

const CooperationProcess = ({t}) => {

    return (

        <div className={style.container}>
            <h1 className={style.cardTitle}>{t('How is the process of cooperation')}</h1>

            <div className={style.topLine}>
                <div className={style.item}>
                    <h1>1</h1>
                    <img src={arrow} alt=""/>
                    <p>{t('Training Information')}</p>
                </div>

                <div className={style.item}>
                    <h1>2</h1>
                    <img src={arrow} alt=""/>
                    <p>{t('Personal meeting')}</p>
                </div>

                <div className={style.item}>
                    <h1>3</h1>
                    <img src={arrow} alt=""/>
                    <p>{t('Timing')}</p>
                </div>

                <div className={style.item}>
                    <h1>4</h1>
                    <img src={arrow} alt=""/>
                    <p>{t('Contract')}</p>
                </div>

                <div className={style.item}>
                    <h1>5</h1>
                    <img src={arrow} alt=""/>
                    <p>{t('Training')}</p>
                </div>

                <div className={style.item}>
                    <h1>6</h1>
                    <p>{t('Summary')}</p>
                </div>
            </div>

        </div>
    )
};

export default withNamespaces()(CooperationProcess);