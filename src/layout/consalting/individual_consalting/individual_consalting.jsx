import s from "./individual_consulting.module.scss"
import {withNamespaces} from "react-i18next";
import background from "../../../assets/individual_consalting.png"
import Background from "../../common/background/background";
import MaterialBox from "../../common/material_box/material_box";
import {useCallback, useState} from "react";
import {Title, PageTitle, ContainerTitle} from "../../common/title/title";
import {
    AiOutlineFileDone,
    BiNotification,
    BsPersonXFill, GiHorizonRoad, ImArrowDown2, ImArrowDownLeft2, ImArrowDownRight2,
    MdPublishedWithChanges,
    RiArticleFill,
} from "react-icons/all";
import {ItemText, Text} from "../../common/text/text";
import circleBg from '../../../assets/circle.png';
import Footer from "../../footer/footer";
import File from "../../common/file/file";
import i18n from "i18next";
import program_rus from "../../../assets/files/consulting_rus.pdf";
import program_az from "../../../assets/files/consulting_az.pdf";

const IndividualConsulting = ({t}) => {

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), []);

    let file = [];

    if(i18n.language === 'ru') file = [program_rus];
    if(i18n.language === 'en') file = [program_rus];
    if(i18n.language === 'az') file = [program_az];

    const [styleWhy, setStyleWhy] = useState({display: 'flex'});
    const [styleHow, setStyleHow] = useState({display: 'none'});
    const [styleWhom, setStyleWhom] = useState({display: 'none'});

    const setWhy = () => {
        setStyleWhy({display: 'flex'});
        setStyleHow({display: 'none'});
        setStyleWhom({display: 'none'});

    }
    const setHow = () => {
        setStyleWhy({display: 'none'});
        setStyleHow({display: 'flex'});
        setStyleWhom({display: 'none'});

    }
    const setWhom = () => {
        setStyleWhy({display: 'none'});
        setStyleHow({display: 'none'});
        setStyleWhom({display: 'flex'});
    }

    let reasons = [
        {header: 'We are result-oriented', text: 'After each consultation session'},
        {header: 'Conscious choice. Life management', text: 'Life management consultation'},
        {header: 'High efficiency. Close cooperation gives', text: 'Close cooperation gives excellent'},
    ]

    const BlockThree = () => <div className={s.blockThree}>

        <PageTitle icon={<BiNotification/>} title={t('What is the essence of the individual')}/>
        <ContainerTitle title={t('Its purpose is a competent correction')}/>


        <details className={s.dropdownBox} open>
            <summary className={s.dropdownTitle}>
                <ContainerTitle icon={<RiArticleFill/>} title={t("Individual consulting is necessary in the following cases")}/>
            </summary>
            {t('constant challenge at work').split('\n').map((e, idx) =>
                <ItemText key={uuid(idx)}
                          text={e}
                          style={{paddingLeft: '42px', textAlign: 'start'}}/>)}

        </details>


        <details className={s.dropdownBox} open>
            <summary className={s.dropdownTitle}>
                <ContainerTitle icon={<MdPublishedWithChanges/>} title={t("How to make a difference")}/>
            </summary>
            {t('First of all, you need to get rid of the burden of unnecessary memories').split('\n').map((e, idx) =>
                <ItemText key={uuid(idx)}
                          text={e}
                          style={{paddingLeft: '42px', textAlign: 'start'}}/>)}
        </details>


        <details className={s.dropdownBox} open>
            <summary className={s.dropdownTitle}>
                <ContainerTitle icon={<BsPersonXFill/>} title={t("We can’t help")}/>
            </summary>
            {t('An applicant who is trying to collect a confidential').split('\n').map((e, idx) =>
                <ItemText key={uuid(idx)}
                          text={e}
                          style={{paddingLeft: '42px', textAlign: 'start'}}/>)}
        </details>
    </div>;

    return (
        <div className={s.individual}>
            <Background background={background}/>

            <Title title={t('Individual consulting')}/>

            <MaterialBox content={
                <>
                    <PageTitle icon={<RiArticleFill/>} title={t('Immerse yourself')}/>
                    <PageTitle icon={<GiHorizonRoad/>}
                               title={t('Life Management consultation')}/>
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '20px'}}>
                        <ItemText text={t('We will show you the way out of difficult life')}
                                  style={{paddingLeft: '42px', flex: 3, textAlign: 'justify'}}/>
                        <File link={file} style={{height: '130px'}}/>
                    </div>
                </>
            }/>


            <div className={s.blockTwo}>
                <PageTitle title={t('3 reasons to choose us')}
                           style={{justifyContent: 'center', color: 'white'}}/>

               <ImArrowDownLeft2/>
               <ImArrowDown2/>
               <ImArrowDownRight2/>

                {reasons.map((item, idx) =>
                    <MaterialBox key={uuid(idx)}
                                 style={{flex: `${window.innerWidth <= 768 ? 1 : 100}`}}
                                 content={
                                     <>
                                         <ContainerTitle icon={<AiOutlineFileDone/>}
                                                         title={t(item.header)}/>
                                         <Text text={t(item.text)} style={{padding: '0', textAlign: 'left'}}/>
                                     </>
                                     }
                    />)}
            </div>


            <MaterialBox content={<BlockThree/>}/>


            <div className={s.blockFour}>
                <MaterialBox content={
                    <>
                        <div className={s.container}>

                            <div className={s.circleHeaders}>
                                <PageTitle title={t('In why')}
                                           style={{justifyContent: 'center', color: 'dimgray', width: '115px'}}/>
                                <PageTitle title={t('Process')}
                                           style={{justifyContent: 'center', color: 'dimgray', width: '115px'}}/>
                                <PageTitle title={t('Out')}
                                           style={{justifyContent: 'center', color: 'dimgray', width: '115px'}}/>
                            </div>

                            <div className={s.circleBox}
                                 style={{marginLeft: '-15%'}}
                                 onMouseEnter={() => setWhy()}
                            >
                                <img src={circleBg} alt="circle"/>
                                <PageTitle title={t('Why')}
                                           style={{justifyContent: 'center', position: 'absolute', color: 'white', width: '190px'}}/>
                            </div>

                            <div className={s.circleBox}
                                 onMouseEnter={() => setHow()}
                            >
                                <img src={circleBg} alt="circle"/>
                                <PageTitle title={t('How')}
                                           style={{justifyContent: 'center', position: 'absolute', color: 'white', width: '190px'}}/>
                            </div>

                            <div className={s.circleBox}
                                 style={{marginRight: '-15%'}}
                                 onMouseEnter={() => setWhom()}
                            >
                                <img src={circleBg} alt="circle"/>
                                <PageTitle title={t('For whom')}
                                           style={{justifyContent: 'center', position: 'absolute', color: 'white', width: '190px'}}/>
                            </div>
                        </div>

                        <div className={s.item} style={styleWhy}>
                            <ContainerTitle title={t('RESULTS')}
                                            style={{flex: 1, justifyContent: 'center', color: 'dimgray'}}/>
                            <ContainerTitle title={t('GOALS')}
                                            style={{flex: 1, justifyContent: 'center', color: 'dimgray'}}/>
                            <ContainerTitle title={t('CHANGES')}
                                            style={{flex: 1, justifyContent: 'center', color: 'dimgray'}}/>
                            <ContainerTitle title={t('STEPS')}
                                            style={{flex: 1, justifyContent: 'center', color: 'dimgray'}}/>
                        </div>

                        <div className={s.item} style={styleHow}>
                            <ContainerTitle title={t('MODELS')}
                                            style={{flex: 1, justifyContent: 'center', color: 'dimgray'}}/>
                            <ContainerTitle title={t('TOOLS')}
                                            style={{flex: 1, justifyContent: 'center', color: 'dimgray'}}/>
                            <ContainerTitle title={t('PROCESSES')}
                                            style={{flex: 1, justifyContent: 'center', color: 'dimgray'}}/>
                            <ContainerTitle title={t('SYSTEMS')}
                                            style={{flex: 1, justifyContent: 'center', color: 'dimgray'}}/>
                        </div>

                        <div className={s.item} style={styleWhom}>
                            <ContainerTitle title={t('INFORMATION')}
                                            style={{flex: 1, justifyContent: 'center', color: 'dimgray'}}/>
                            <ContainerTitle title={t('PERCEPTION')}
                                            style={{flex: 1, justifyContent: 'center', color: 'dimgray'}}/>
                            <ContainerTitle title={t('UNDERSTANDING')}
                                            style={{flex: 1, justifyContent: 'center', color: 'dimgray'}}/>
                            <ContainerTitle title={t('STRATEGY')}
                                            style={{flex: 1, justifyContent: 'center', color: 'dimgray'}}/>
                            <ContainerTitle title={t('THEORY')}
                                            style={{flex: 1, justifyContent: 'center', color: 'dimgray'}}/>
                            <ContainerTitle title={t('EXPERIENCE')}
                                            style={{flex: 1, justifyContent: 'center', color: 'dimgray'}}/>
                        </div>
                    </>
                } style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap', gap: '50px 15px'}}/>
            </div>

            <Footer style={{borderRadius: '12px'}}/>

        </div>
    )


}
export default withNamespaces()(IndividualConsulting);


