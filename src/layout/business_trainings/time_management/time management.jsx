import s from "./time_management.module.scss"
import {withNamespaces} from "react-i18next";
import {compose} from "redux";
import {connect} from "react-redux";
import background from "../../../assets/time_management.png"
import Background from "../../common/background/background";
import PageTitle from "../../common/title/title";
import MaterialBox from "../../common/material_box/material_box";
import {FaUserTie} from "react-icons/all";
import {useCallback} from "react";


const TimeManagement = ({t, training}) => {

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), []);

    const InfoContent = () => {
        let h = training.timeManagement.headerMessage;
        return <div className={s.topContent}>
            {t(h).split(`\n`).map((e, idx) => <h1 key={uuid(idx)} className={s.title}><i className={'bx bx-message-square-detail'}/>{e}</h1>)}
            {t(training.timeManagement.content).split(`\n`).map((e, idx) => <p key={uuid(idx)} className={`${s.listItem}`}>{e}</p>)}
        </div>
    };

    const NumberRange = () => {
        return <div className={s.botContent}>
            {training.timeManagement.bottomContent.map((i, idx) => <div key={uuid(idx)} className={s.item}>
                <h1>{i.number}</h1>
                <p>{t(i.content)}</p>
            </div>)}
        </div>
    };

    const Targets = () => {
        return <div className={s.botContent}>
            {training.timeManagement.middleContent.map((i, idx) => <div key={uuid(idx)} className={s.targets}>
                <FaUserTie/>
                <p>{t(i)}</p>
            </div>)}
        </div>
    };

    return (
        <div className={s.timeManagement}>
            <Background background={background}/>

            <PageTitle title={t(training.timeManagement.headerTitle)}/>
            <InfoContent/>

            <h1 className={s.pageTitle}>{t(training.timeManagement.middleTitle)}</h1>
            <MaterialBox style={{width: '100%'}} content={<Targets/>}/>

            <h1 className={s.pageTitle}>{t(training.timeManagement.bottomTitle)}</h1>
            <MaterialBox content={<NumberRange/>}/>
        </div>
    )
};

let mapStateToProps = (state) => ({training: state.trainingPageReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(TimeManagement);

