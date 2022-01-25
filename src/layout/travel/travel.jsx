import s from './travel.module.scss'
import {withNamespaces} from "react-i18next";
import {useCallback, useEffect} from "react";
import {ContainerTitle, PageTitle, Title} from "../common/title/title";
import MaterialBox from "../common/material_box/material_box";
import {BoldText, HintText, ItemText} from "../common/text/text";
import {
    BiWorld,
    BsDot,
    FaExternalLinkSquareAlt,
    RiArrowDropRightFill,
    RiArticleFill
} from "react-icons/all";
import nepal from '../../assets/travel_nepal.jpeg'
import korea from '../../assets/travel_korea.png'
import travel from '../../assets/travel.jpeg'
import Background from "../common/background/background";
import File from "../common/file/file";
import {NavLink} from "react-router-dom";
import program from '../../assets/files/travel.pdf'

const Travel = ({t}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('Travel'));

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), []);

    return (
        <div className={s.travel}>
            <Background background={travel}/>
            <Title title={t('Travel')} style={{color: '#333'}}/>

            <MaterialBox content={
                <>
                    <PageTitle icon={<RiArticleFill/>} title={t('Travelling means something different')}/>
                    <BoldText text={t('We invite you to find a new meaning')}/>
                </>
            } style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>

            <MaterialBox content={
                <>
                    <img src={nepal} alt=""/>
                    <PageTitle icon={<BiWorld/>} title={t('Nepal Program 1')} style={{marginTop: '30px'}}/>
                    <div className={s.videoBox}>
                        <div className={s.leftContent}>
                            <iframe title="travel" src={'https://www.youtube.com/embed/0sp4AqKj2iA'}/>
                        </div>
                        <div className={s.rightContent}><File link={program}/></div>
                    </div>
                    <PageTitle icon={<BiWorld/>} title={t('Nepal Program 2')} style={{marginTop: '30px'}}/>
                    <BoldText text={t('This practical program that is in its')}/>
                    <NavLink to={'/programs/transformation'}>
                        <ContainerTitle icon={<FaExternalLinkSquareAlt/>} title={'Navigate to Transformation program'}/>
                    </NavLink>
                </>
            } style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>


            <MaterialBox content={
                <>
                    <img src={korea} alt="South Korea"/>
                    <PageTitle icon={<BiWorld/>} title={t('South Korea - Travelling in Time')}/>
                    <BoldText text={t('You will be amazed by the breathtaking')}/>
                    <ContainerTitle icon={<RiArrowDropRightFill/>}
                                    title={t('9 full days of active leisure which include')}/>
                    {t('Medical beauty procedures').split('-').map((e, idx) => <ItemText key={uuid(idx)}
                                                                                         icon={<BsDot/>}
                                                                                         text={t(e)}/>)}
                    <HintText text={t('Program to be announced')} style={{color: 'darkgrey'}} />

                </>
            } style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>

        </div>
    )
};

export default withNamespaces()(Travel);