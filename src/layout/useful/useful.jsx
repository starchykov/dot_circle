import s from "./useful.module.scss"
import {withNamespaces} from "react-i18next";
import usefulBg from "../../assets/useful_bg.png";
import {compose} from "redux";
import {connect} from "react-redux";
import {useCallback, useEffect} from "react";
import Background from "../common/background/background";
import Title, {PageTitle} from "../common/title/title";
import {ItemText} from "../common/text/text";
import {BiNotification} from "react-icons/all";


const Useful = ({t, name, useful}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('Useful'));

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), [])

    // Map store data to item list
    const dropdown = () => useful.data.map((i, idx) =>
        <details key={uuid(idx)} className={s.dropdownBox}>
            <summary className={s.dropdownTitle}><PageTitle icon={<BiNotification/>} title={t(i.title)}/></summary>
            <ItemText text={t(i.message)} style={{paddingLeft: '42px', color: 'white'}}/>

        </details>
    );

    return (
        <div className={s.useful}>
            <Background background={usefulBg}/>
            <Title title={t(name)}/>
            {dropdown()}
        </div>
    )
};

let mapStateToProps = (state) => ({useful: state.usefulPageReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(Useful);
