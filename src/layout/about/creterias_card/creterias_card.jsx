import style from './creterias_card.module.scss'
import {withNamespaces} from "react-i18next";
import image from '../../../assets/t&d_creterias.png'
import { v4 as uuidv4 } from 'uuid';

const CriterionCard = ({t}) => {

    return (

        <div className={style.container}>
            <img src={image} alt="" className={style.leftContent}/>


            <div className={style.rightContent}>
                <h1 key={uuidv4()} className={style.title}>{t('Our trainings are for you, if ...')}</h1>
                <h1 key={uuidv4()}>{t('1 You are development oriented')}</h1>
                <span>{t('And your goals are far beyond an average company goals')}</span>
                <h1 key={uuidv4()}>{t('2 You increase sales')}</h1>
                <span>{t('And you know that investment in training always works for profit')}</span>
                <h1 key={uuidv4()}>{t('3 You take care of the image')}</h1>
                <span>{t('And employees high performance is important for you')}</span>
                <h1 key={uuidv4()}>{t('4 You build a team')}</h1>
                <span>{t('And strengths and power of corporate spirit is a priority for you')}</span>

            </div>

        </div>
    )
};

export default withNamespaces()(CriterionCard);