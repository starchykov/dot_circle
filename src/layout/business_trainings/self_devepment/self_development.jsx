import s from './self_development.module.scss'
import {withNamespaces} from "react-i18next";
import {connect} from "react-redux";
import {compose} from "redux";
import Background from "../../common/background/background";
import background from "../../../assets/self_development.png";
import {Title, PageTitle} from "../../common/title/title";
import MaterialBox from "../../common/material_box/material_box";
import {useCallback} from "react";
import {BiNotification} from "react-icons/all";
import {BoldText, Text} from "../../common/text/text";
import Footer from "../../footer/footer";


const SelfDevelopment = ({t, trainings}) => {

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), [])

    const InfoContent = (str) => {
        return <>{t(str).split(`\n`).map((e, idx) => <PageTitle key={uuid(idx)}
                                                                icon={<BiNotification/>}
                                                                title={e}/>
        )}</>
    };

    const BlockOne = () => {
        return <div className={s.numberRange}>
            {InfoContent(trainings.selfDevelopment.headerMessage)}
            {trainings.selfDevelopment.blockOneContent.map((i, idx) => <div key={uuid(idx)} className={s.item}>
                <Title title={i.number} style={{width: '50px', margin: 0, color: '#ff962e', alignItems: 'center'}}/>
                <Text text={t(i.content)} style={{alignItems: 'center', flex: 1}}/>
            </div>)}
        </div>
    };


    const BlockTwo = () => {
        return trainings.selfDevelopment.middleContent.map((i, idx) => <div key={uuid(idx)} className={s.blockTwo}>
            <BoldText text={t(i.content)}/>
        </div>);
    };

    const BlockThree = () => {
        return <div className={s.numberRange}>
            {InfoContent(trainings.selfDevelopment.bottomFirstTitle)}
            {trainings.selfDevelopment.bottomContent.map((i, idx) =>
                <div key={uuid(idx)} className={s.item}>
                    <PageTitle title={(t(i.content)).split('-')[0]} style={{width: '100%', margin: 0, color: '#ff962e'}}/>
                    <Text text={(t(i.content)).split('-')[1]} style={{alignItems: 'center', flex: 1}}/>
                </div>)}
        </div>
    };

    const InfoBox = () => {
        return <>
            {InfoContent(trainings.selfDevelopment.thirdTitle)}
            {InfoContent(trainings.selfDevelopment.fourthTitle)}
        </>
    };


    return (
        <div className={s.selfDevelopment}>
            <Background background={background}/>
            <Title title={t(trainings.selfDevelopment.headerTitle)}/>
            <MaterialBox content={<><BlockOne/><BlockTwo/></>}
                         style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>
            <MaterialBox content={<BlockThree/>}
                         style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>
            <MaterialBox content={<InfoBox/>}
                         style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>
            <Footer style={{borderRadius: '12px'}}/>
        </div>
    );
};


const mapStateToProps = (state) => ({trainings: state.trainingPageReducer});

export default compose(withNamespaces(), connect(mapStateToProps, null))(SelfDevelopment);