import s from "./welcome_consalting.module.scss"
import {withNamespaces} from "react-i18next";
import consulting from "../../assets/consalting.png"
import {useEffect, useState} from "react";
import Iframe from "../common/iframe/iframe";
import IndividualConsulting from "./individual_consalting/individual_consalting";
import CustomPopup from "../common/popup/popup";
import Background from "../common/background/background";
import PageTitle from "../common/title/title";
import HoveredItem from "../common/hovered_item/hovered_item";
import TimeManagement from "../business_trainings/time_management/time management";
import StressManagement from "../business_trainings/stres_management/stress.management";
import SelfDevelopment from "../business_trainings/self_devepment/self_development";
import OrganizationalDevelopment from "../business_trainings/organizational_development/organizational_development";
import NoPage from "../common/no_page/no_page";

const Consulting = ({t}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('Consulting'));

    // Set current component to show in popup menu
    const [showPopup, setShowPopup] = useState(null);
    const [showIndividual, setShowIndividual] = useState(false);

    let getComponent = (cn) => {
        switch (cn) {
            case 'individual_consulting':
                return <IndividualConsulting/>;

            case 'management_consulting':
                return <Iframe source={'https://dot-circle.com/pages/consulting.html'}/>;

            default:
                return <IndividualConsulting name={cn}/>
        }
    };


    return (
        <div className={`${s.consultingPage} ${showIndividual && s.mute} ${showPopup && s.mute}`}>
            <Background background={consulting}/>
            <PageTitle title={t('Consulting')}/>

            <HoveredItem content={
                <div onClick={() => setShowPopup('individual_consulting')}>
                    <h1>{t('Individual consulting')}</h1>
                    <p>{t('Discover your talents')}</p>
                </div>
            }/>

            <CustomPopup onClose={() => setShowIndividual(!showIndividual)}
                         show={showIndividual}
                         children={<IndividualConsulting/>}/>

            <i className={'bx bx-sort-alt-2'}/>

            <HoveredItem content={
                <div onClick={() => setShowPopup('management_consulting')}>
                    <h1>{t('Management consulting')}</h1>
                    <p>{t('www.altempuscapital.com')}</p>
                </div>
            }/>

            <CustomPopup onClose={() => setShowPopup(null)}
                         show={showPopup != null}
                         children={getComponent(showPopup)}/>
        </div>
    )
};


export default withNamespaces()(Consulting);