import s from "./individual_consulting.module.scss"
import {withNamespaces} from "react-i18next";
import background from "../../../assets/personal-consalting.png"
import Background from "../../common/background/background";
import MaterialBox from "../../common/material_box/material_box";
import {useCallback} from "react";
import {Title, PageTitle, ContainerTitle} from "../../common/title/title";

const IndividualConsulting = ({t}) => {

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), []);

    let reasons = [
        'We are result-oriented',
        'Conscious choice. Life management',
        'High efficiency. Close cooperation gives'
    ]

    return (
        <div className={s.individual}>
            <Background background={background}/>

            <Title title={t('Individual consulting')}/>

            <MaterialBox content={
                <>
                    <PageTitle title={t('Immerse yourself')}/>
                    <p>{t('Life Management consultation')}</p>
                    <p>{t('We will show you the way out of difficult life')}</p>
                </>
            }/>


            <div className={s.blockTwo}>
                <Title title={t('3 reasons to choose us')}/>

                <i className={'bx bx-down-arrow-alt'}/>
                <i className={'bx bx-down-arrow-alt'}/>
                <i className={'bx bx-down-arrow-alt'}/>

                {reasons.map((item, idx) =>
                    <MaterialBox key={uuid(idx)}
                                 content={<p className={s.reasons}>{t(item)}</p>}
                                 style={{flex: `${window.innerWidth <= 768 ? 1 : 100}`}}/>)}
            </div>


            <div className={s.blockThree}>

                <PageTitle title={t('What is the essence of the individual')}/>


                <details className={s.dropdownBox}>
                    <summary className={s.dropdownTitle}>
                        <ContainerTitle title={t("Individual consulting is necessary in the following cases")}/>
                    </summary>
                    <p className={s.dropdownMassage}>{t('constant challenge at work')}</p>
                </details>


                <details className={s.dropdownBox}>
                    <summary className={s.dropdownTitle}>
                        <ContainerTitle title={t("How to make a difference")}/>
                    </summary>
                    <p className={s.dropdownMassage}>
                        {t('First of all, you need to get rid of the burden of unnecessary memories')}
                    </p>
                </details>


                <details className={s.dropdownBox}>
                    <summary className={s.dropdownTitle}>
                        <ContainerTitle title={t("We can’t help")}/>
                    </summary>
                    <p className={s.dropdownMassage}>
                        {t('An applicant who is trying to collect a confidential')}
                    </p>
                </details>
            </div>


            <div className={s.blockFour}>
                <div className={s.item}>
                    <PageTitle title={'In why'} style={{textAlign: 'center'}}/>
                    <span>#RESULTS</span>
                    <span>#GOALS</span>
                    <span>#CHANGES</span>
                    <span>#STEPS</span>
                </div>

                <div className={s.item}>
                    <PageTitle title={'Process'} style={{textAlign: 'center'}}/>
                    <span>#MODELS</span>
                    <span>#TOOLS</span>
                    <span>#PROCESSES</span>
                    <span>#SYSTEMS</span>
                </div>

                <div className={s.item}>
                    <PageTitle title={'Out'} style={{textAlign: 'center'}}/>
                    <span>#INFORMATION</span>
                    <span>#PERCEPTION</span>
                    <span>#UNDERSTANDING</span>
                    <span>#STRATEGY</span>
                    <span>#THEORY</span>
                    <span>#EXPERIENCE</span>
                </div>
            </div>

        </div>
    )


}
export default withNamespaces()(IndividualConsulting);


