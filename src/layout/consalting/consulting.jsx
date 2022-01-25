import s from "./welcome_consalting.module.scss"
import {withNamespaces} from "react-i18next";
import consulting from "../../assets/individual_consalting.png"
import managementBg from "../../assets/management_consulting.png"
import {useEffect, useState} from "react";
import IndividualConsulting from "./individual_consalting/individual_consalting";
import CustomPopup from "../common/popup/popup";
import Background from "../common/background/background";
import {Title, PageTitle} from "../common/title/title";
import HoveredItem from "../common/hovered_item/hovered_item";
import {Text} from "../common/text/text";
import { useHistory } from "react-router-dom";
import ManagementConsulting from "./ management_consultation/management_consulting";

const Consulting = ({t}) => {

    const history = useHistory();

    // Set document title wia hook effect
    useEffect(() => document.title = t('Consulting'), [t]);

    // Check path and open popup window
    useEffect(() => {
        let compare = (p) => window.location.pathname.includes(`/${p}`);
        if (compare('individual_consulting')) setShowPopup('individual_consulting');
        else if (compare('management_consulting')) setShowPopup('management_consulting');
    }, [t]);

    // Set page background image on mouse enter event
    const [currentBackground, setActive] = useState(`${process.env.PUBLIC_URL}/assets/transformation.png`);

    // Set current component to show in popup menu
    const [showPopup, setShowPopup] = useState(null);

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
                return <ManagementConsulting/>;
            default:
                return <IndividualConsulting name={cn}/>
        }
    };


    return (
        <div className={`${s.consultingPage} ${showPopup && s.mute}`}>
            <Background background={currentBackground}/>
            <Title title={t('Consulting')}/>

            <HoveredItem content={
                <div onClick={() => show('individual_consulting')}
                     onMouseEnter={() => setActive(`${consulting}`)}>
                    <PageTitle title={t('Individual consulting')} style={{justifyContent: 'center'}}/>
                    <Text text={t('Discover your talents')}/>
                </div>
            }/>

            <i className={'bx bx-sort-alt-2'}/>

            <HoveredItem content={
                <div onClick={() => show('management_consulting')}
                     onMouseEnter={() => setActive(`${managementBg}`)}>
                    <PageTitle title={t('Management consulting')} style={{justifyContent: 'center'}}/>
                    <Text text={t('When you need to take bold')}/>
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