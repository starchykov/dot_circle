import s from "./welcome_consalting.module.scss"
import {withNamespaces} from "react-i18next";
import consulting from "../../assets/consalting.png"
import {useEffect, useState} from "react";
import Iframe from "../common/iframe/iframe";
import IndividualConsulting from "./individual_consalting/individual_consalting";
import CustomPopup from "../common/popup/popup";
import Background from "../common/background/background";
import {Title, PageTitle} from "../common/title/title";
import HoveredItem from "../common/hovered_item/hovered_item";
import {Text} from "../common/text/text";
import { useHistory } from "react-router-dom";

const Consulting = ({t}) => {

    const history = useHistory();

    // Set document title wia hook effect
    useEffect(() => document.title = t('Consulting'));

    // Check path and open popup window
    useEffect(() => {
        let compare = (p) => window.location.pathname.includes(`/${p}`);
        if (compare('individual_consulting')) setShowPopup('individual_consulting');
        else if (compare('management_consulting')) setShowPopup('management_consulting');
    });



    // Set current component to show in popup menu
    const [showPopup, setShowPopup] = useState(null);
    const [showIndividual, setShowIndividual] = useState(false);

    // Set new path and show popup window
    const show = (path) => {
        history.push(`/consulting/${path}`)
        setShowPopup(`${path}`);
    };

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
            <Title title={t('Consulting')}/>

            <HoveredItem content={
                <div onClick={() => show('individual_consulting')}>
                    <PageTitle title={t('Individual consulting')} style={{justifyContent: 'center'}}/>
                    <Text text={t('Discover your talents')}/>
                </div>
            }/>

            <CustomPopup onClose={() => setShowIndividual(!showIndividual)}
                         show={showIndividual}
                         children={<IndividualConsulting/>}/>

            <i className={'bx bx-sort-alt-2'}/>

            <HoveredItem content={
                <div onClick={() => show('management_consulting')}>
                    <PageTitle title={t('Management consulting')} style={{justifyContent: 'center'}}/>
                    <Text text={t('www.altempuscapital.com')}/>
                </div>
            }/>

            <CustomPopup onClose={() => setShowPopup(null)}
                         show={showPopup != null}
                         children={getComponent(showPopup)}
                         backPath={'consulting'}
            />
        </div>
    )
};


export default withNamespaces()(Consulting);