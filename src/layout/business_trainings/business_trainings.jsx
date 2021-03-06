import s from './business_trainings.module.scss'
import {withNamespaces} from "react-i18next";
import {compose} from "redux";
import {connect} from "react-redux";
import HoveredItem from "../common/hovered_item/hovered_item";
import {Title, PageTitle} from "../common/title/title";
import Background from "../common/background/background";
import {useCallback, useEffect, useState} from "react";
import CustomPopup from "../common/popup/popup";
import SelfDevelopment from "./self_devepment/self_development";
import NoPage from "../common/no_page/no_page";
import TimeManagement from "./time_management/time management";
import StressManagement from "./stres_management/stress.management";
import OrganizationalDevelopment from "./organizational_development/organizational_development";
import {BoldText, Text} from "../common/text/text";
import {useHistory} from "react-router-dom";
import trainings_1 from '../../assets/trainings_1.png';
import trainings_2 from '../../assets/trainings_2.png';
import corporate_trainings from '../../assets/corporate_trainings.png';


const BusinessTrainings = ({t, trainings, name}) => {

    const history = useHistory();

    // Set document title wia hook effect
    useEffect(() => document.title = t('Business trainings'));

    // Check path and open popup window
    useEffect(() => {
        let compare = (p) => window.location.pathname.includes(`/${p}`);
        if (compare('time_management')) setShowPopup('time_management');
        else if (compare('stress_management')) setShowPopup('stress_management');
        else if (compare('self_development')) setShowPopup('self_development');
        else if (compare('organizational_development')) setShowPopup('organizational_development');
    }, []);

    // Set page background image on mouse enter event
    const [currentBackground, setActive] = useState(`${corporate_trainings}`);

    // Set current component to show in popup menu
    const [showPopup, setShowPopup] = useState(null);

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), []);

    let getComponent = (cn) => {
        switch (cn) {
            case 'time_management':
                return <TimeManagement/>;
            case 'stress_management':
                return <StressManagement/>;
            case 'self_development':
                return <SelfDevelopment/>;
            case 'organizational_development':
                return <OrganizationalDevelopment/>;
            default:
                return <NoPage name={cn}/>
        }
    };

    // Set new path and show popup window
    const show = (path) => {
        history.push(`/trainings/${path}`)
        setShowPopup(`${path}`);
    };

    let Content = () => trainings.businessTraining.content.map((i, idx) =>
        <HoveredItem key={uuid(idx)} content={
            <div onMouseEnter={() => setActive(`${process.env.PUBLIC_URL}/assets/${i.src}`)}
                 onClick={() => show(i.link)}>
                <PageTitle title={t(i.name)} style={{textAlign: 'center', justifyContent: 'center'}}/>
                <Text text={t(i.massage)}/>
            </div>
        }/>
    );

    let Trainings = () => {
        return (
            <div className={`${s.otherTrainings} ${showPopup != null && s.mute}`}
                 onMouseEnter={() => setActive(`${corporate_trainings}`)}>
                <Title title={t('Corporate trainings')} style={{margin: '50px 0', color: 'white'}}/>
                <div className={s.training_1}>
                    <img src={trainings_1} alt=""/>
                    <BoldText text={t('Cooperation & Effective Team building')}
                              style={{top: '-15%', left: '20%', position: 'absolute', width: 'auto'}}/>
                    <BoldText text={t('??Self- Efficiency?? Program')}
                              style={{top: '30%', left: '-5%', position: 'absolute', width: 'auto'}}/>
                    <BoldText text={t('Corporate culture Implementation')}
                              style={{top: '5%', right: '-8%', position: 'absolute', width: 'auto'}}/>
                    <BoldText text={t('Organizational development')}
                              style={{top: '45%', right: '-8%', position: 'absolute', width: 'auto'}}/>
                    <BoldText text={t('Train the Trainer program')}
                              style={{top: '80%', right: '-5%', position: 'absolute', width: 'auto'}}/>
                    <BoldText text={t('Business Retreat Based')}
                              style={{bottom: '-15%', left: '20%', position: 'absolute', width: 'auto'}}/>
                </div>

                <div className={s.training_2}>
                    <img src={trainings_2} alt=""/>
                    <BoldText text={t('Management of Changes')}
                              style={{top: '-5%', left: '20%', position: 'absolute', width: 'auto'}}/>
                    <BoldText text={t('Effective Communications')}
                              style={{top: '35%', left: '-13%', position: 'absolute', width: 'auto'}}/>
                    <BoldText text={t('Decision Making')}
                              style={{top: '10%', right: '8%', position: 'absolute', width: 'auto'}}/>
                    <BoldText text={t('Effective organizations')}
                              style={{top: '45%', right: '-20%', position: 'absolute', width: 'auto'}}/>
                    <BoldText text={t('Strategic sessions')}
                              style={{top: '80%', right: '-5%', position: 'absolute', width: 'auto'}}/>
                    <BoldText text={t('Business Couching For')}
                              style={{bottom: '-15%', left: '30%', position: 'absolute', width: 'auto'}}/>
                </div>
            </div>
        )
    };

    return (
        <div className={`${s.businessTrainings} ${showPopup != null && s.mute}`}>
            <Title title={t(name)}/>
            <Background background={currentBackground}/>
            <Content/>
            <Trainings/>
            <CustomPopup onClose={() => setShowPopup(null)}
                         show={showPopup != null}
                         children={getComponent(showPopup)}
                         backPath={'trainings'}
            />
        </div>
    );
};

let mapStateToProps = (state) => ({trainings: state.trainingPageReducer});


export default compose(withNamespaces(), connect(mapStateToProps, null))(BusinessTrainings);

