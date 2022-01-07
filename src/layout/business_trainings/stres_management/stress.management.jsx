import s from "./stress_management.module.scss"
import {withNamespaces} from "react-i18next";
import {compose} from "redux";
import {connect} from "react-redux";
import Background from "../../common/background/background";
import background from "../../../assets/stress_management.png";
import {Title, PageTitle} from "../../common/title/title";
import MaterialBox from "../../common/material_box/material_box";
import {useCallback} from "react";
import {AiOutlineCarryOut, BiNotification, RiTeamFill} from "react-icons/all";
import {BoldText, Text} from "../../common/text/text";


const StressManagement = ({t, trainings}) => {

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), [])

    const InfoContent = () => {
        let h = trainings.stressManagement.headerMessage;
        return <div className={s.topContent}>
            {t(h).split(`\n`).map((e, idx) => <PageTitle key={uuid(idx)}
                                                         icon={<BiNotification/>}
                                                         title={e}/>
            )}
        </div>
    };

    const BlockOne = () => {
        return <div className={s.blockOne}>
            {<InfoContent/>}
            <BoldText text={t(trainings.stressManagement.blockOneTitle)}/>
            <BoldText text={t(trainings.stressManagement.blockOneContent)}/>
        </div>
    };

    const BlockTwo = () => {
        return <div className={s.numberRange}>
            <PageTitle icon={<AiOutlineCarryOut/>}
                       title={t(trainings.stressManagement.blockTwoTitle)}/>
            {trainings.stressManagement.blockTwoContent.map((i, idx) => <div key={uuid(idx)} className={s.item}>
                <Title title={i.number} style={{width: '50px', margin: 0, color: '#ef7f1a', alignItems: 'center'}}/>
                <Text text={t(i.content)} style={{alignItems: 'center'}}/>
            </div>)}
        </div>
    };

    const BlockThree = () => {
        let titleStyle = {width: '50px', margin: 0, color: '#ef7f1a', lineHeight: 1, alignItems: 'start'};
        return <div className={s.numberRange}>
            <PageTitle icon={<RiTeamFill/>}
                       title={t(trainings.stressManagement.blockThreeTitle)}/>
            {trainings.stressManagement.blockThreeContent.map((i, idx) => <div key={uuid(idx)} className={s.item}>
                <Title title={i.number} style={titleStyle}/>
                <Text text={t(i.content)}/>
            </div>)}
        </div>
    };

    return (
        <div className={s.stressManagement}>
            <Background background={background}/>
            <Title title={t(trainings.stressManagement.headerTitle)}/>
            <MaterialBox content={<BlockOne/>}/>
            <MaterialBox content={<BlockTwo/>}/>
            <MaterialBox content={<BlockThree/>}/>
        </div>
    )
}

const mapStateToProps = (state) => ({trainings: state.trainingPageReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(StressManagement);