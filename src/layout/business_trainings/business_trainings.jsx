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
import {Text} from "../common/text/text";
import {useHistory} from "react-router-dom";


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
    });

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

    return (
        <div className={`${s.businessTrainings} ${showPopup != null && s.mute}`}>
            <Title title={t(name)}/>
            <Background background={currentBackground}/>
            <Content/>
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

