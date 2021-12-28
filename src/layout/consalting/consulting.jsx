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

const Consulting = ({t}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('Consulting'));

    const [showPopup, setShowPopup] = useState(null);
    const [showIndividual, setShowIndividual] = useState(false);


    return (
        <div className={`${s.consultingPage} ${showIndividual && s.mute} ${showPopup && s.mute}`}>
            <Background background={consulting}/>
            <PageTitle title={t('Consulting')}/>

            <HoveredItem content={
                <div onClick={() => setShowIndividual(!showIndividual)}>
                    <h1>{t('Individual consulting')}</h1>
                    <p>{t('Discover your talents')}</p>
                </div>
            }/>

            <CustomPopup onClose={() => setShowIndividual(!showIndividual)}
                         show={showIndividual}
                         children={<IndividualConsulting/>}/>

            <i className={'bx bx-sort-alt-2'}/>

            <HoveredItem content={
                <div onClick={() => setShowPopup(!showPopup)}>
                    <h1>{t('Management consulting')}</h1>
                    <p>{t('www.altempuscapital.com')}</p>
                </div>
            }/>

            <CustomPopup onClose={() => setShowPopup(!showPopup)}
                         show={showPopup}
                         title={t('Management consulting')}
                         children={<Iframe source={'https://dot-circle.com/pages/consulting.html'}/>}/>
        </div>
    )
};


export default withNamespaces()(Consulting);