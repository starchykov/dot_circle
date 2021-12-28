import s from "./menu.module.scss";
import {useLocation, NavLink} from "react-router-dom";
import i18n from "i18next";
import {withNamespaces} from 'react-i18next';
import Logo from '../../assets/logo_title.png';
import {connect} from "react-redux";
import {compose} from "redux";
import {setActiveAC} from "../../redux/menuReducer";


const Menu = (props) => {

    let t = (v) => props.t(v);
    let menu = props.menu;

    // Change language
    const switchLang = (lng) => {
        // Set language code
        localStorage.setItem('i18nextLng', lng);

        // Change language wia i18n
        i18n.changeLanguage(lng).then(() => console.log(`Current language: ${lng}`));
    };

    const isMobile = () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return false;
        else if (/Mobile|iP(hone|od)|Android|Kindle|Silk-Accelerated|(hpw|web)OS|(obi|ini)/.test(ua)) return true;
        return false;
    };

    // Define menu state wia hook
    // const [isActive, setActive] = useState(false);
    // Set menu className to state
    // const toggleClass = () => setActive(!isActive);
    const toggleClass = () => props.setActiveAC(!menu.isActive);

    // Get current path for props
    const location = useLocation().pathname;

    // Language switcher buttons
    const langButtons = () => ['en', 'ru', 'az'].map((l) => menu.isActive
        ? <button key={l} className={`${s.open} ${i18n.language.includes(l) && s.current}`} onClick={() => switchLang(l)}>{l}</button>
        : <button key={l} className={`${i18n.language === l && s.current}`} onClick={() => switchLang(l)}>{l}</button>
    );

    // Render menu item
    let menuItems = () => menu.headerItems.map(i => {
        return (
            <li key={i.path}
                onClick={() => window.innerWidth <=500 && toggleClass()}>
                <NavLink to={i.path} activeClassName={`${location === i.path && s.activeLink}`}>
                    <i className={i.icon}/>
                    <span className={s.links_name}>{t(i.title)}</span>
                </NavLink>
                <span className={s.tooltip}>{i.title}</span>
            </li>
        )
    });

    return (
        <div className={`${s.sidebar} ${menu.isActive && s.open}`}
             onMouseEnter={() => !isMobile() && toggleClass()}
             onMouseLeave={() => !isMobile() && toggleClass()}>
            <div className={s.logo_details}
                 onClick={() => isMobile() && toggleClass()}>
                <div className={s.logo_name}><img src={Logo} alt="Logo"/>DOT&CIRCLE</div>
                <i className={`bx btn ${menu.isActive ? 'bx-menu-alt-right' : 'bx-menu'} ${s.btn}`} id="btn"/>
            </div>
            <ul className={s.item_list}>
                {menuItems()}
                <div className={s.langPanel}>{langButtons()}</div>
            </ul>
        </div>
    )
};

let mapStateToProps = (state) => ({menu: state.menuReducer});

export default compose(withNamespaces(), connect(mapStateToProps, {setActiveAC}))(Menu);