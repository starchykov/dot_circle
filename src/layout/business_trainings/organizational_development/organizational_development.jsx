import s from './organizational_development.module.scss'
import {useCallback, useEffect} from "react";
import {withNamespaces} from "react-i18next";
import Background from "../../common/background/background";
import background from "../../../assets/organizational_development.png";
import {Title, PageTitle, ContainerTitle} from "../../common/title/title";
import MaterialBox from "../../common/material_box/material_box";
import {compose} from "redux";
import {connect} from "react-redux";
import {BiNotification, BsDot, RiArrowDropRightFill, RiArticleFill, RiAwardFill} from "react-icons/all";
import {ItemText} from "../../common/text/text";


const OrganizationalDevelopment = ({t, trainings}) => {

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), []);

    // Set document title wia hook effect
    useEffect(() => document.title = t(trainings.organizationalDevelopment.headerTitle));

    const BlockOne = () => {
        let h = trainings.organizationalDevelopment.headerMessage;
        let blockOneTitle = trainings.organizationalDevelopment.blockOneTitle;
        let blockOneContent = trainings.organizationalDevelopment.blockOneContent;
        return <>
            <PageTitle key={uuid(this)} icon={<BiNotification/>} title={t(h)}/>
            <PageTitle key={uuid(this)} icon={<BiNotification/>} title={t(blockOneTitle)}/>
            {t(blockOneContent).split('\n').map((e, idx) => <ItemText key={uuid(idx)} icon={<BsDot/>} text={e}/>)}
        </>
    };

    const BlockTwo = () => {
        let middleTitle = trainings.organizationalDevelopment.middleTitle;
        let middleContent = trainings.organizationalDevelopment.middleContent;

        return <>
            <PageTitle key={uuid(this)} icon={<RiAwardFill/>} title={t(middleTitle)}/>
            {middleContent.map((i, idx) => <div key={uuid(idx)}>
                <ContainerTitle key={uuid(this)} icon={<RiArrowDropRightFill/>} title={t(i.title)}/>
                <ItemText text={t(i.content)} style={{paddingLeft: '42px'}}/>
            </div>)}
        </>
    };

    const BlockThree = () => {
        let bottomTitle = trainings.organizationalDevelopment.bottomTitle;
        let bottomContent = trainings.organizationalDevelopment.bottomContent;

        return <>
            <PageTitle key={uuid(this)} icon={<RiArticleFill/>} title={t(bottomTitle)}/>
            {t(bottomContent).split('\n').map((e, idx) => <ItemText key={uuid(idx)} icon={<BsDot/>} text={e}/>)}
        </>
    };

    return (
        <div className={s.organizationalDevelopment}>
            <Background background={background}/>
            <Title title={t(trainings.organizationalDevelopment.headerTitle)}/>
            <MaterialBox content={<BlockOne/>}
                         style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>
            <MaterialBox content={<BlockTwo/>}
                         style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>
            <MaterialBox content={<BlockThree/>}
                         style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>
        </div>
    )
};

const mapStateToProps = (state) => ({trainings: state.trainingPageReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(OrganizationalDevelopment);