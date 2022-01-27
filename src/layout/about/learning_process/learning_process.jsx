import s from './learning_process.module.scss'
import {withNamespaces} from "react-i18next";
import titleImage_1 from "../../../assets/obg1_learning_process.png"
import titleImage_2 from "../../../assets/obg2_learning_process.png"
import titleImage_3 from "../../../assets/obg3_learning_process.png"
import titleImage_4 from "../../../assets/obg4_learning_process.png"
import { v4 as uuidv4 } from 'uuid';


const LearningProcess = ({t}) => {
    return (
        <div className={s.container}>
            <h1 key={uuidv4()}>{t('Learning process')}</h1>

            <div className={s.leftContent}>
                <div className={s.items}>
                    <div className={s.lineOne}>
                        <img src={titleImage_1} alt={"#"}/>
                        <h3>{t('Work in groups')}</h3>
                        <p key={uuidv4()}>{t('Each participant voices his/her goals in the presence')}</p>
                    </div>

                    <div className={s.lineOne}>
                        <img src={titleImage_2} alt={"#"}/>
                        <h3>{t('Business Game')}</h3>
                        <p key={uuidv4()}>{t('Identifying the strengths and weaknesses of habitual')}</p>
                    </div>

                    <div className={s.lineOne}>
                        <img src={titleImage_3} alt={"#"}/>
                        <h3>{t('Work with a trainer')}</h3>
                        <p key={uuidv4()}>{t('Familiarization with personal cases of participants')}</p>
                    </div>

                    <div className={s.lineOne}>
                        <img src={titleImage_4} alt={"#"}/>
                        <h3>{t('Work in pairs')}</h3>
                        <p key={uuidv4()}>{t('Each participant practices and consolidates the')}</p>
                    </div>
                </div>
                <div className={s.percents}><h2 key={uuidv4()}>{t('Practice')}</h2></div>
            </div>

            <div className={s.leftContent}>
                <div className={s.items}>
                    <div className={s.lineOne}>
                        <img src={titleImage_1} alt={"#"}/>
                        <h3>{t('Lecture material')}</h3>
                        <p key={uuidv4()}>{t('Outline of basic principles, concepts and stereotypes')}</p>
                    </div>
                </div>
                <div className={s.percents}><h2 key={uuidv4()}>{t('Theory')}</h2></div>
            </div>
        </div>
    )
};

export default withNamespaces()(LearningProcess);