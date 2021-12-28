import s from './business_trainings.module.scss'
import {withNamespaces} from "react-i18next";
import {compose} from "redux";
import {connect} from "react-redux";
import HoveredItem from "../common/hovered_item/hovered_item";
import PageTitle from "../common/title/title";
import Background from "../common/background/background";
import {useCallback, useEffect, useState} from "react";
import CustomPopup from "../common/popup/popup";
import SelfDevelopment from "./self_devepment/self_development";
import NoPage from "../common/no_page/no_page";
import TimeManagement from "./time_management/time management";
import StressManagement from "./stres_management/stress.management";
import OrganizationalDevelopment from "./organizational_development/organizational_development";


const BusinessTrainings = ({t, trainings, name}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('Business trainings'));

    // Set page background image on mouse enter event
    const [currentBackground, setActive] = useState(`${process.env.PUBLIC_URL}/assets/time_management.png`);

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


    let Content = () => trainings.businessTraining.content.map((i, idx) =>
        <HoveredItem key={uuid(idx)} content={
            <div onMouseEnter={() => setActive(`${process.env.PUBLIC_URL}/assets/${i.src}`)}
                 onClick={() => setShowPopup(i.link)}>
                <h1>{t(i.name)}</h1>
                <p>{t(i.massage)}</p>
            </div>
        }/>
    );

    return (
        <div className={`${s.businessTrainings} ${showPopup != null && s.mute}`}>
            <PageTitle title={t(name)}/>
            <Background background={currentBackground}/>
            <Content/>
            <CustomPopup onClose={() => setShowPopup(null)}
                         show={showPopup != null}
                         children={getComponent(showPopup)}/>
        </div>
    );
};

let mapStateToProps = (state) => ({trainings: state.trainingPageReducer});


export default compose(withNamespaces(), connect(mapStateToProps, null))(BusinessTrainings);

