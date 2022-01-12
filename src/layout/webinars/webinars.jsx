import s from './webinars.module.scss'
import {withNamespaces} from "react-i18next";
import {useEffect} from "react";
import Background from "../common/background/background";
import {PageTitle, Title} from "../common/title/title";
import {BiErrorCircle, BiInfoSquare, BiMessageSquareDetail, BiMessageSquareEdit, BsDot} from "react-icons/all";
import {BoldText, ItemText} from "../common/text/text";
import MaterialBox from "../common/material_box/material_box";

const Webinars = ({t}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('Webinars'));

    return (
        <div className={s.webinars}>
            <Background background={`${process.env.PUBLIC_URL}/assets/webinar_bg.png`}/>

            <Title title={t('Webinars')}/>

            <MaterialBox content={
                <>
                    <PageTitle icon={<BiInfoSquare/>} title={t('Webinars')}/>
                    <BoldText text={t('This is a modern and effective consultation')}/>
                    <BoldText text={t('This type of training is useful for those who have')}/>
                    <PageTitle icon={<BiMessageSquareDetail/>} title={t('Principles of webinar training')}/>
                    <ItemText icon={<BsDot/>} text={t('Interactive interaction between the trainer')}/>
                    <ItemText icon={<BsDot/>} text={t('At the next session')}/>
                </>
            } style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>

            <MaterialBox content={
                <>
                    <PageTitle icon={<BiErrorCircle/>} title={t('The advantages of webinars')}/>
                    <ItemText icon={<BsDot/>} text={t('Saving time and money')}/>
                    <ItemText icon={<BsDot/>} text={t('Obtaining knowledge')}/>
                </>
            } style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>

            <MaterialBox content={
                <>
                    <PageTitle icon={<BiMessageSquareEdit/>} title={t('Features')}/>
                    <ItemText icon={<BsDot/>} text={t('The formation of groups of no more than 10 people')}/>
                    <ItemText icon={<BsDot/>} text={t('The duration and cost of training')}/>
                </>
            } style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>

        </div>
    )
}

export default withNamespaces()(Webinars);