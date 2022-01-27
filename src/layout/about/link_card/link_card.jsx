import style from './link_card.module.scss'
import {withNamespaces} from "react-i18next";
import img1 from '../../../assets/item1_link_card.png'
import img2 from '../../../assets/iitem2_link_card.png'
import img3 from '../../../assets/iitem3_link_card.png'
import img4 from '../../../assets/item4_link_card.png'
import {NavLink} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const LinkCard = ({t}) => {
    return (

        <div className={style.goTo}>

            <div className={style.box}>
                <img src={img1} alt=""/>
                <p key={uuidv4()}>{t('Dream team')}</p>
                <hr/>
                <NavLink to={'/useful'}><span>{t('Go to')}</span></NavLink>
            </div>

            <div className={style.box}>
                <img src={img2} alt=""/>
                <p key={uuidv4()}>{t('Useful')}</p>
                <hr/>
                <NavLink to={'/useful'}><span>{t('Go to')}</span></NavLink>
            </div>

            <div className={style.box}>
                <img src={img3} alt=""/>
                <p key={uuidv4()}>{t('Webinars')}</p>
                <hr/>
                <NavLink to={'/webinars'}><span >{t('Go to')}</span></NavLink>
            </div>

            <div className={style.box}>
                <img src={img4} alt=""/>
                <p key={uuidv4()}>{t('Gallery')}</p>
                <hr/>
                <NavLink to={'/gallery'}><span>{t('Go to')}</span></NavLink>
            </div>

        </div>
    )
};

export default withNamespaces()(LinkCard);