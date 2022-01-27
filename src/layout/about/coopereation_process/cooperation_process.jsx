import style from './cooperation_process.module.scss'
import {withNamespaces} from "react-i18next";
import arrow from '../../../assets/arrow_cooperation_process.svg'
import { v4 as uuidv4 } from 'uuid';

const CooperationProcess = ({t}) => {

    return (

        <div className={style.container}>
            <h1 key={uuidv4()} className={style.cardTitle}>{t('How is the process of cooperation')}</h1>

            <div className={style.topLine}>
                <div className={style.item}>
                    <h1 key={uuidv4()}>1</h1>
                    <img src={arrow} alt=""/>
                    <p key={uuidv4()}>{t('Training Information')}</p>
                </div>

                <div className={style.item}>
                    <h1 key={uuidv4()}>2</h1>
                    <img src={arrow} alt=""/>
                    <p key={uuidv4()}>{t('Personal meeting')}</p>
                </div>

                <div className={style.item}>
                    <h1 key={uuidv4()}>3</h1>
                    <img src={arrow} alt=""/>
                    <p key={uuidv4()}>{t('Timing')}</p>
                </div>

                <div className={style.item}>
                    <h1 key={uuidv4()}>4</h1>
                    <img src={arrow} alt=""/>
                    <p key={uuidv4()}>{t('Contract')}</p>
                </div>

                <div className={style.item}>
                    <h1 key={uuidv4()}>5</h1>
                    <img src={arrow} alt=""/>
                    <p key={uuidv4()}>{t('Training')}</p>
                </div>

                <div className={style.item}>
                    <h1 key={uuidv4()}>6</h1>
                    <p key={uuidv4()}>{t('Summary')}</p>
                </div>
            </div>

        </div>
    )
};

export default withNamespaces()(CooperationProcess);