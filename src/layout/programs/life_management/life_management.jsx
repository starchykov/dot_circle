import s from './life_management.module.scss'
import {withNamespaces} from "react-i18next";
import {useCallback, useEffect} from "react";
import Background from "../../common/background/background";
import MaterialBox from "../../common/material_box/material_box";
import PageTitle from "../../common/title/title";

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
                <h1 className={s.containerTitle}><i className={'bx bx-info-square'}/>{t('For whom is this programme')}</h1>
                {h.map((e, idx) => <div key={uuid(idx)} className={s.block}><h2>{i++}</h2><p>{t(e)}</p></div>)}
                <h1 className={s.containerTitle}>{t('The training is held in an open')}</h1>
            </>
        );
    };

    return (
        <div className={s.lifeManagement}>
            <Background background={`${process.env.PUBLIC_URL}/assets/life_management.png`}/>

            <PageTitle title={t('Wheel of Events - LIFE MANAGEMENT')}/>

            <div className={s.contentBox}>
                <h1 className={s.containerTitle}><i className={'bx bx-error-circle'}/>{t('Aims and goals of the training')}</h1>
                <p className={`${s.normal}`}>{t('By attending this program')}</p>
                <p className={`${s.normal}`}>{t('You should attend the program in the following cases')}</p>
                {t('Develop personality traits and habits of').split('\n').map((e, idx) => <p key={uuid(idx)} className={`${s.listItem}`}>{e}</p>)}
            </div>

            <MaterialBox content={<InlineItems/>}
                         style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>

        </div>
    );
};

export default withNamespaces()(LifeManagement);