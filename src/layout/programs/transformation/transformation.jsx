import s from './transformation.module.scss'
import {withNamespaces} from "react-i18next";
import {useEffect} from "react";
import Background from "../../common/background/background";
import MaterialBox from "../../common/material_box/material_box";
import arrow from "../../../assets/arrow_cooperation_process.svg";
import {
    BiNotification,
    BsBoxArrowInDown, BsDot,
    RiArrowDropRightFill,
    RiArticleFill, RiNodeTree,
    RiTeamFill
} from "react-icons/all";
import {ContainerTitle, PageTitle, Title} from "../../common/title/title";
import {BoldText, ItemText, Text} from "../../common/text/text";

const Transformation = ({t}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('Transformation'));

    const InlineItems = () => {
        let titleStyle = {width: '50px', margin: 0, color: '#ef7f1a', lineHeight: 1, alignItems: 'center'};
        let h = [
            'For adults',
            'For those who are in searching of new achievements in life',
            'For those who want to learn new skill',
            'For those who are looking for a new self'
        ];
        let i = 1;
        return (
            <>
                <PageTitle icon={<RiTeamFill/>} title={t('For whom is this programme')}/>
                {h.map(e => <div className={s.block}>
                    <Title title={i++} style={titleStyle}/>
                    <Text text={t(e)} style={{alignItems: 'center'}}/>
                    </div>)}
            </>
        );
    };

    const Process = () => {
        let titleStyle = {width: '50px', margin: 0, color: '#ef7f1a', lineHeight: 1, alignItems: 'center'};
        return (
            <div className={s.process}>
                <PageTitle title={t('Program structure')}/>
                <PageTitle icon={<RiNodeTree/>} title={t('The full program consists of')}/>
                <div className={s.topLine}>
                    <div className={s.item}>
                        <Title title={1} style={titleStyle}/>
                        <img src={arrow} alt=""/>
                        <Text text={t('Movement. Breathing. Consciousness.')} style={{color: '#878787'}}/>
                        <div className={s.file}><BsBoxArrowInDown/></div>
                        <p className={s.hint}>{t('Click to download the program')}</p>
                    </div>
                    <div className={s.item}>
                        <Title title={2} style={titleStyle}/>
                        <img src={arrow} alt=""/>
                        <Text text={t('Time. Energy. Action.')} style={{color: '#878787'}}/>
                        <div className={s.file}><BsBoxArrowInDown/></div>
                        <p className={s.hint}>{t('Click to download the program')}</p>
                    </div>
                    <div className={s.item}>
                        <Title title={3} style={titleStyle}/>
                        <Text text={t('Course')} style={{color: '#878787'}}/>
                        <div className={s.file}><BsBoxArrowInDown/></div>
                        <p className={s.hint}>{t('Click to download the program')}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={s.transformation}>
            <Background background={`${process.env.PUBLIC_URL}/assets/transformation.png`}/>

            <Title title={t('Transformation')}/>

            <MaterialBox content={
                <>
                    <PageTitle icon={<BiNotification/>} title={t('Transformation program')}/>
                    <BoldText text={t('This program was created in the basis')}/>
                    <PageTitle icon={<RiArticleFill/>} title={t('Knowledge and practical skills')}/>
                    <BoldText text={t('Many of us live our lives')}/>
                </>
            } style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>

            <MaterialBox content={
                <>
                    <PageTitle icon={<BiNotification/>} title={t('Transformation')}/>
                    <BoldText text={t('By attending this program')}/>
                    <ContainerTitle icon={<RiArrowDropRightFill/>}
                                    title={t('You should attend the program in the following cases')}/>
                    {t('You come to a dead-end in your life').split('\n').map(e => <ItemText text={e}
                                                                                             icon={<BsDot/>}/>)}
                </>
            } style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>

            <MaterialBox content={<InlineItems/>}
                         style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>

            <MaterialBox content={<Process/>}
                         style={{width: '-webkit-fill-available', display: 'flex'}}/>

        </div>
    );
};

export default withNamespaces()(Transformation);