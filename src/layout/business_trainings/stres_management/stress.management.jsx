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
import Footer from "../../footer/footer";


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
            {trainings.stressManagement.blockTwoContent.map((i, idx) =>
                <MaterialBox key={uuid(idx)} content={
                    <>
                        <Title title={i.number}
                               style={{width: '60px', margin: 0, fontSize: '70px', color: '#878787', alignItems: 'center'}}/>
                        <Text text={t(i.content)} style={{alignItems: 'center'}}/>
                    </>
                } style={{display: 'flex'}}/>
            )}
        </div>
    };

    const BlockThree = () => {
        let titleStyle = {width: '60px', margin: 0, color: '#878787', fontSize: '70px', alignItems: 'center'};
        return <div className={s.numberRange}>
            <PageTitle icon={<RiTeamFill/>}
                       title={t(trainings.stressManagement.blockThreeTitle)}/>
            {trainings.stressManagement.blockThreeContent.map((i, idx) =>
                    <MaterialBox key={uuid(idx)} content={
                        <>
                            <Title title={i.number} style={titleStyle}/>
                            <Text text={t(i.content)} style={{alignItems: 'center'}}/>
                        </>
                    } style={{display: 'flex'}}/>
                )}
        </div>
    };

    return (
        <div className={s.stressManagement}>
            <Background background={background}/>
            <Title title={t(trainings.stressManagement.headerTitle)}/>
            <MaterialBox content={<BlockOne/>} style={{width: '-webkit-fill-available'}}/>
            <MaterialBox content={<BlockTwo/>} style={{width: '-webkit-fill-available'}}/>
            <MaterialBox content={<BlockThree/>} style={{width: '-webkit-fill-available'}}/>
            <Footer style={{borderRadius: '12px'}}/>
        </div>
    )
}

const mapStateToProps = (state) => ({trainings: state.trainingPageReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(StressManagement);