import s from "./stress_management.module.scss"
import {withNamespaces} from "react-i18next";
import {compose} from "redux";
import {connect} from "react-redux";
import Background from "../../common/background/background";
import background from "../../../assets/stress_management.png";
import PageTitle from "../../common/title/title";
import MaterialBox from "../../common/material_box/material_box";
import {useCallback} from "react";


const StressManagement = ({t, trainings}) => {

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), [])

    const InfoContent = () => {
        let h = trainings.stressManagement.headerMessage;
        return <div className={s.topContent}>
            {t(h).split(`\n`).map((e, idx) => <h2 key={uuid(idx)} className={s.title}><i className={'bx bx-message-square-detail'}/>{e}</h2>)}
        </div>
    };

    const BlockOne = () => {
        return <div className={s.blockOne}>
            {<InfoContent/>}
            <p className={s.normal}>{t(trainings.stressManagement.blockOneTitle)}</p>
            <p className={s.normal}>{t(trainings.stressManagement.blockOneContent)}</p>
        </div>
    };

    const BlockTwo = () => {
        return <div className={s.numberRange}>
            <h1 className={s.pageTitle}>{t(trainings.stressManagement.blockTwoTitle)}</h1>
            {trainings.stressManagement.blockTwoContent.map((i, idx) => <div key={uuid(idx)} className={s.item}>
                <h2>{i.number}</h2>
                <p>{t(i.content)}</p>
            </div>)}
        </div>
    };

    const BlockThree = () => {
        return <div className={s.numberRange}>
            <h1 className={s.pageTitle}>{t(trainings.stressManagement.blockThreeTitle)}</h1>
            {trainings.stressManagement.blockThreeContent.map((i, idx) => <div key={uuid(idx)} className={s.item}>
                <h1>{i.number}</h1>
                <p>{t(i.content)}</p>
            </div>)}
        </div>
    };

    return (
        <div className={s.stressManagement}>
            <Background background={background}/>
            <PageTitle title={t(trainings.stressManagement.headerTitle)}/>
            <MaterialBox content={<BlockOne/>}/>
            <MaterialBox content={<BlockTwo/>}/>
            <MaterialBox content={<BlockThree/>}/>
        </div>
    )
}

const mapStateToProps = (state) => ({trainings: state.trainingPageReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(StressManagement);