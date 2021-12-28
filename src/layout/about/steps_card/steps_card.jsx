import s from "./steps_card.module.scss"
import {withNamespaces} from "react-i18next";

const Steps_card = () => {

    return (
        <div className={s.container}>
            <div className={s.topLine}>
                <h1>{t('Why we')}</h1>
                <p>{t('Each training is a well-thought-out open')}</p>
            </div>
        </div>
    )
};


export default withNamespaces()(Steps_card);