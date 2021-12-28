import s from './transformation.module.scss'
import {withNamespaces} from "react-i18next";
import {useEffect} from "react";
import Background from "../../common/background/background";
import MaterialBox from "../../common/material_box/material_box";
import arrow from "../../../assets/arrow_cooperation_process.svg";
import {BsBoxArrowInDown} from "react-icons/all";

const Transformation = ({t}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('Transformation'));

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
                <h1 className={s.containerTitle}><i className={'bx bx-info-square'}/>{t('For whom is this programme')}
                </h1>
                {h.map(e => <div className={s.block}><h2>{i++}</h2><p>{t(e)}</p></div>)}
            </>
        );
    };

    const Process = () => {
        return (
            <div className={s.process}>
                <h1 className={s.cardTitle}>{t('Program structure')}</h1>
                <h1 className={s.containerTitle}>{t('The full program consists of')}</h1>
                <div className={s.topLine}>
                    <div className={s.item}>
                        <h1>1</h1>
                        <img src={arrow} alt=""/>
                        <p>{t('Movement. Breathing. Consciousness.')}</p>
                        <div className={s.file}><BsBoxArrowInDown/></div>
                        <p className={s.hint}>{t('Click to download the program')}</p>
                    </div>
                    <div className={s.item}>
                        <h1>2</h1>
                        <img src={arrow} alt=""/>
                        <p>{t('Time. Energy. Action.')}</p>
                        <div className={s.file}><BsBoxArrowInDown/></div>
                        <p className={s.hint}>{t('Click to download the program')}</p>
                    </div>
                    <div className={s.item}>
                        <h1>3</h1>
                        <p>{t('Course')}</p>
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

            <h1 className={s.title}>{t('Transformation')}</h1>

            <div className={s.contentBox}>
                <h1 className={s.containerTitle}><i className={'bx bx-info-square'}/>{t('Transformation program')}</h1>
                <p className={s.normal}>{t('This program was created in the basis')}</p>
                <h1 className={s.containerTitle}><i className={'bx bx-message-square-detail'}/>{t('Knowledge and practical skills')}</h1>
                <p className={`${s.normal}`}>{t('Many of us live our lives')}</p>
            </div>

            <div className={s.contentBox}>
                <h1 className={s.containerTitle}><i className={'bx bx-error-circle'}/>{t('Transformation')}</h1>
                <p className={`${s.normal}`}>{t('By attending this program')}</p>
                <p className={`${s.normal}`}>{t('You should attend the program in the following cases')}</p>
                {t('You come to a dead-end in your life').split('\n').map(e => <p className={`${s.listItem}`}>{e}</p>)}
            </div>

            <MaterialBox content={<InlineItems/>}
                         style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>

            <MaterialBox content={<Process/>}
                         style={{width: '-webkit-fill-available', display: 'flex'}}/>

        </div>
    );
};

export default withNamespaces()(Transformation);