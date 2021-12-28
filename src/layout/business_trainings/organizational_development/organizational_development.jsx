import s from './organizational_development.module.scss'
import {useCallback, useEffect} from "react";
import {withNamespaces} from "react-i18next";
import Background from "../../common/background/background";
import background from "../../../assets/organizational_development.png";
import PageTitle from "../../common/title/title";
import MaterialBox from "../../common/material_box/material_box";
import {compose} from "redux";
import {connect} from "react-redux";


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
            <h2 className={s.containerTitle}><i className={'bx bx-info-square'}/>{t(h)}</h2>
            <h2 className={s.containerTitle}><i className={'bx bx-message-square-detail'}/>{t(blockOneTitle)}</h2>

            {t(blockOneContent).split('\n').map((e, idx) => <p key={uuid(idx)} className={`${s.listItem}`}>{e}</p>)}
        </>
    };

    const BlockTwo = () => {
        let middleTitle = trainings.organizationalDevelopment.middleTitle;
        let middleContent = trainings.organizationalDevelopment.middleContent;

        return <>
            <h2 className={s.containerTitle}><i className={'bx bx-info-square'}/>{t(middleTitle)}</h2>
            {middleContent.map((i, idx) => <div key={uuid(idx)} className={s.item}>
                <h2>{t(i.title)}</h2>
                <p>{t(i.content)}</p>
            </div>)}
        </>
    };

    const BlockThree = () => {
        let bottomTitle = trainings.organizationalDevelopment.bottomTitle;
        let bottomContent = trainings.organizationalDevelopment.bottomContent;

        return <>
            <h2 className={s.containerTitle}><i className={'bx bx-info-square'}/>{t(bottomTitle)}</h2>
            {t(bottomContent).split('\n').map((e, idx) => <p key={uuid(idx)} className={`${s.listItem}`}>{e}</p>)}
        </>
    };

    return (
        <div className={s.organizationalDevelopment}>
            <Background background={background}/>
            <PageTitle title={t(trainings.organizationalDevelopment.headerTitle)}/>
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