import s from './life_management.module.scss'
import {withNamespaces} from "react-i18next";
import {useCallback, useEffect} from "react";
import Background from "../../common/background/background";
import MaterialBox from "../../common/material_box/material_box";
import {Title, PageTitle, ContainerTitle} from "../../common/title/title";
import {BiNotification, BsDot, RiArrowDropRightFill, RiArticleFill, RiTeamFill} from "react-icons/all";
import {BoldText, ItemText, Text} from "../../common/text/text";
import Footer from "../../footer/footer";

const LifeManagement = ({t}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('Life Management'));

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), [])

    const InlineItems = () => {
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
                {h.map((e, idx) => <div key={uuid(idx)} className={s.block}>
                    <Title title={i++} style={{width: '50px', margin: 0, color: '#ff962e', lineHeight: 1, alignItems: 'center'}}/>
                    <Text text={t(e)} style={{alignItems: 'center'}}/>
                </div>)}
                <PageTitle icon={<RiArticleFill/>} title={t('The training is held in an open')}/>
            </>
        );
    };

    return (
        <div className={s.lifeManagement}>
            <Background background={`${process.env.PUBLIC_URL}/assets/life_management.png`}/>

            <Title title={t('Wheel of Events - LIFE MANAGEMENT')}/>

            <div className={s.contentBox}>
                <PageTitle icon={<BiNotification/>} title={t('Aims and goals of the training')}/>
                <BoldText text={t('By attending this program')}/>
                <ContainerTitle icon={<RiArrowDropRightFill/>} title={t('You should attend the program in the following cases')}/>
                {t('Develop personality traits and habits of').split('\n').map((e, idx) => <ItemText key={uuid(idx)}
                                                                                                     icon={<BsDot/>}
                                                                                                     text={e}/>)}
            </div>

            <MaterialBox content={<InlineItems/>}
                         style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>

            <Footer style={{borderRadius: '12px'}}/>

        </div>
    );
};

export default withNamespaces()(LifeManagement);