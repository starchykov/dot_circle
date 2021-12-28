import style from './profit.module.scss'
import {withNamespaces} from "react-i18next";

let Profit = ({t}) => {

    return (
        <div className={style.profit}>

            <div className={style.head}><h1>{t('What do you get from our open programs?')}</h1></div>

            <div className={style.content}>
                <h3>{t('Results')}</h3>

                <p>{t('A lot of practice and little theory')}</p>
                <br/>

                <h3>{t('Learning process')}</h3>

                <p>{t('Activities are held in an atmosphere of trust and understanding')}</p>
                <br/>

                <h3>{t('Strong personality skills')}</h3>

                <p>{t('You learn to effectively manage your resources and time')}</p>
                <br/>

                <h3>{t('New circle of communication')}</h3>

                <p>{t('You meet new people, gain new connections and get a lot of useful information')}</p>
            </div>
        </div>
    )
};

export default withNamespaces()(Profit);