import CorporateTraining from "./training_card/corp_training";
import Video from "./video_card/video_slider";
import TextBox from "./profit/profit";
import AboutMe from "./about_me/about_me";
import {compose} from "redux";
import {withFirstRedirect} from "../../services/withFirstRedirect";
import {withRouter} from "react-router-dom";
import IndividualTraining from "./training_card/individual_training";
import LearningProcess from "./learning_process/learning_process";
import CriterionCard from "./creterias_card/creterias_card";
import LinkCard from "./link_card/link_card";
import TopSlider from "./top_slider/top_slider";
import WhyWe from "./why_we/why_we";
import {useEffect} from "react";
import {withNamespaces} from "react-i18next";
import CooperationProcess from "./coopereation_process/cooperation_process";

const About = ({t}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('About'));

    return (
        <>
            <TopSlider/>
            <CorporateTraining/>
            <IndividualTraining/>
            <TextBox/>
            <Video/>
            <AboutMe/>
            <WhyWe/>
            <LearningProcess/>
            <CooperationProcess/>
            <CriterionCard/>
            <LinkCard/>
        </>
    )
};

export default compose(withFirstRedirect, withRouter, withNamespaces())(About);