import s from "./time_management.module.scss"
import {withNamespaces} from "react-i18next";
import {compose} from "redux";
import {connect} from "react-redux";
import background from "../../../assets/time_management.png"
import Background from "../../common/background/background";
import {Title, PageTitle} from "../../common/title/title";
import MaterialBox from "../../common/material_box/material_box";
import {AiOutlineCarryOut, BiNotification, BsDot, FaUserTie, RiTeamFill} from "react-icons/all";
import {useCallback} from "react";
import {ItemText, Text} from "../../common/text/text";
import Footer from "../../footer/footer";


const TimeManagement = ({t, training}) => {

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), []);

    const InfoContent = () => {
        let h = training.timeManagement.headerMessage;
        return <div className={s.topContent}>
            {t(h).split(`\n`).map((e, idx) => <PageTitle key={uuid(idx)}
                                                         icon={<BiNotification/>}
                                                         title={e}/>
            )}
            {t(training.timeManagement.content).split(`\n`).map((e, idx) => <ItemText key={uuid(idx)}
                                                                                      icon={<BsDot/>}
                                                                                      text={e}/>)}
        </div>
    };

    const NumberRange = () => {
        return <div className={s.botContent}>
            <PageTitle icon={<AiOutlineCarryOut/>}
                       title={t(training.timeManagement.bottomTitle)}/>
            {training.timeManagement.bottomContent.map((i, idx) => <div key={uuid(idx)} className={s.item}>
                <Title title={i.number} style={{width: '50px', margin: 0, color: '#ff962e', alignItems: 'center'}}/>
                <Text text={t(i.content)} style={{alignItems: 'center', flex: 1}}/>
            </div>)}
        </div>
    };

    const Targets = () => {
        return <div className={s.botContent}>
            <PageTitle icon={<RiTeamFill/>}
                       title={t(training.timeManagement.middleTitle)}/>
            {training.timeManagement.middleContent.map((i, idx) => <div key={uuid(idx)} className={s.targets}>
                <FaUserTie/>
                <Text text={t(i)} style={{justifyContent: 'center'}}/>
            </div>)}
        </div>
    };

    return (
        <div className={s.timeManagement}>
            <Background background={background}/>
            <Title title={t(training.timeManagement.headerTitle)}/>
            <MaterialBox content={<InfoContent/>}/>
            <MaterialBox style={{width: '100%'}} content={<Targets/>}/>
            <MaterialBox content={<NumberRange/>}/>
            <Footer style={{borderRadius: '12px'}}/>
        </div>
    )
};

let mapStateToProps = (state) => ({training: state.trainingPageReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(TimeManagement);

