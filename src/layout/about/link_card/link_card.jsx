import style from './link_card.module.scss'
import {withNamespaces} from "react-i18next";
import img1 from '../../../assets/item1_link_card.png'
import img2 from '../../../assets/iitem2_link_card.png'
import img3 from '../../../assets/iitem3_link_card.png'
import img4 from '../../../assets/item4_link_card.png'
import {NavLink} from "react-router-dom";

const LinkCard = ({t}) => {
    return (

        <div className={style.goTo}>

            <div className={style.box}>
                <img src={img1} alt=""/>
                <p>{t('Dream team')}</p>
                <hr/>
                <NavLink to={'/useful'}><span>{t('Go to')}</span></NavLink>
            </div>

            <div className={style.box}>
                <img src={img2} alt=""/>
                <p>{t('Useful')}</p>
                <hr/>
                <NavLink to={'/'}><span>{t('Go to')}</span></NavLink>
            </div>

            <div className={style.box}>
                <img src={img3} alt=""/>
                <p>{t('Webinars')}</p>
                <hr/>
                <NavLink to={'/'}><span >{t('Go to')}</span></NavLink>
            </div>

            <div className={style.box}>
                <img src={img4} alt=""/>
                <p>{t('Gallery')}</p>
                <hr/>
                <NavLink to={'/'}><span>{t('Go to')}</span></NavLink>
            </div>

        </div>
    )
};

export default withNamespaces()(LinkCard);