import s from "./individual_consulting.module.scss"
import {withNamespaces} from "react-i18next";
import background from "../../../assets/personal-consalting.png"
import Background from "../../common/background/background";
import MaterialBox from "../../common/material_box/material_box";
import {useCallback} from "react";
import {Title, PageTitle, ContainerTitle} from "../../common/title/title";
import {
    AiFillCarryOut, AiFillInteraction,
    BiNotification,
    BsQuestionSquareFill,
    RiArrowDropRightFill,
    RiArticleFill,
} from "react-icons/all";
import {ItemText, Text} from "../../common/text/text";

const IndividualConsulting = ({t}) => {

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), []);

    let reasons = [
        'We are result-oriented',
        'Conscious choice. Life management',
        'High efficiency. Close cooperation gives'
    ]

    const BlockThree = () => <div className={s.blockThree}>

        <PageTitle icon={<BiNotification/>} title={t('What is the essence of the individual')}/>


        <details className={s.dropdownBox} open>
            <summary className={s.dropdownTitle}>
                <ContainerTitle title={t("Individual consulting is necessary in the following cases")}/>
            </summary>
            <Text text={t('constant challenge at work')} style={{textAlign: 'start'}}/>
        </details>


        <details className={s.dropdownBox} open>
            <summary className={s.dropdownTitle}>
                <ContainerTitle title={t("How to make a difference")}/>
            </summary>
            <Text text={t('First of all, you need to get rid of the burden of unnecessary memories')} style={{textAlign: 'start'}}/>
        </details>


        <details className={s.dropdownBox} open>
            <summary className={s.dropdownTitle}>
                <ContainerTitle title={t("We can’t help")}/>
            </summary>
            <Text text={t('An applicant who is trying to collect a confidential')} style={{textAlign: 'start'}}/>
        </details>
    </div>;

    return (
        <div className={s.individual}>
            <Background background={background}/>

            <Title title={t('Individual consulting')}/>

            <MaterialBox content={
                <>
                    <PageTitle icon={<RiArticleFill/>} title={t('Immerse yourself')}/>
                    <ContainerTitle icon={<RiArrowDropRightFill/>} title={t('Life Management consultation')}/>
                    <ItemText text={t('We will show you the way out of difficult life')} style={{paddingLeft: '42px'}}/>
                </>
            }/>


            <div className={s.blockTwo}>
                <PageTitle title={t('3 reasons to choose us')}
                           style={{justifyContent: 'center', color: 'white'}}/>

                <i className={'bx bx-down-arrow-alt'}/>
                <i className={'bx bx-down-arrow-alt'}/>
                <i className={'bx bx-down-arrow-alt'}/>

                {reasons.map((item, idx) =>
                    <MaterialBox key={uuid(idx)}
                                 content={<Text text={t(item)}/>}
                                 style={{flex: `${window.innerWidth <= 768 ? 1 : 100}`}}/>)}
            </div>


            <MaterialBox content={<BlockThree/>}/>


            <div className={s.blockFour}>
                <div className={s.item}>
                    <PageTitle icon={<BsQuestionSquareFill/>} title={'In why'} style={{justifyContent: 'center'}}/>
                    <Text text={t('RESULTS')} style={{flex: 1, justifyContent: 'center'}}/>
                    <Text text={t('GOALS')} style={{flex: 1, justifyContent: 'center'}}/>
                    <Text text={t('CHANGES')} style={{flex: 1, justifyContent: 'center'}}/>
                    <Text text={t('STEPS')} style={{flex: 1, justifyContent: 'center'}}/>
                </div>

                <div className={s.item}>
                    <PageTitle icon={<AiFillInteraction/>} title={'Process'} style={{justifyContent: 'center'}}/>
                    <Text text={t('MODELS')} style={{flex: 1, justifyContent: 'center'}}/>
                    <Text text={t('TOOLS')} style={{flex: 1, justifyContent: 'center'}}/>
                    <Text text={t('PROCESSES')} style={{flex: 1, justifyContent: 'center'}}/>
                    <Text text={t('SYSTEMS')} style={{flex: 1, justifyContent: 'center'}}/>
                </div>

                <div className={s.item}>
                    <PageTitle icon={<AiFillCarryOut/>} title={'Out'} style={{justifyContent: 'center'}}/>
                    <Text text={t('INFORMATION')} style={{flex: 1, justifyContent: 'center'}}/>
                    <Text text={t('PERCEPTION')} style={{flex: 1, justifyContent: 'center'}}/>
                    <Text text={t('UNDERSTANDING')} style={{flex: 1, justifyContent: 'center'}}/>
                    <Text text={t('STRATEGY')} style={{flex: 1, justifyContent: 'center'}}/>
                    <Text text={t('THEORY')} style={{flex: 1, justifyContent: 'center'}}/>
                    <Text text={t('EXPERIENCE')} style={{flex: 1, justifyContent: 'center'}}/>
                </div>
            </div>

        </div>
    )


}
export default withNamespaces()(IndividualConsulting);


