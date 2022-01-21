import s from "./management_consulting.module.scss"
import {withNamespaces} from "react-i18next";
import background from "../../../assets/management_consulting.png"
import Background from "../../common/background/background";
import MaterialBox from "../../common/material_box/material_box";
import {useCallback} from "react";
import {Title, PageTitle, ContainerTitle} from "../../common/title/title";
import {
    BiNotification,
    FaChartLine, FaConnectdevelop, FaHandshake,
    FaUsersCog,
    GiMisdirection, GiStoneTower,
    HiOutlinePresentationChartLine,
    MdTransform,
    SiHomeadvisor,
} from "react-icons/all";
import {BoldText, ItemText, Text} from "../../common/text/text";

const ManagementConsulting = ({t}) => {

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), []);

    const BlockOne = () => {
        return <>
            <PageTitle key={uuid(this)} icon={<BiNotification/>} title={t('When you need to take bold')}/>
            <Text text={t('Whether you have an urgent need to improve')}/>
            <Text text={t('Business Transformation spans your')}/>
            <Text text={t('If your company is falling short')}/>
        </>
    };

    const BlockTwo = () => {
        return <>
            <PageTitle key={uuid(this)} icon={<BiNotification/>} title={t('Our consulting approaches')}/>
            <BoldText text={t('As dedicated business consultants')}/>
            <ContainerTitle icon={<FaChartLine/>} title={t('Business Development')}/>
            <ItemText text={t('We deliver actionable insight')} style={{paddingLeft: '42px'}}/>
            <ContainerTitle icon={<FaUsersCog/>} title={t('Human – centered transformation')}/>
            <ItemText text={t('Charting the path for a positive')} style={{paddingLeft: '42px'}}/>
            <ContainerTitle icon={<HiOutlinePresentationChartLine/>} title={t('Accelerate change in organization')}/>
            <ItemText text={t('Improve the “metabolic rate” of')} style={{paddingLeft: '42px'}}/>
            <ContainerTitle icon={<GiMisdirection/>} title={t('Adaptation')}/>
            <ItemText text={t('Adjust the design of your')} style={{paddingLeft: '42px'}}/>
        </>
    };

    const BlockThree = () => {
        return <>
            <PageTitle key={uuid(this)} icon={<BiNotification/>} title={t('Consulting Services')}/>

            <ItemText icon={<FaChartLine/>} text={t('Learning & Development')}/>

            <ItemText icon={<FaConnectdevelop/>} text={t('Organizational development')}/>

            <ItemText icon={<FaHandshake/>} text={t('Business development')}/>

            <ItemText icon={<MdTransform/>} text={t('Business Transformation')}/>

            <ItemText icon={<GiStoneTower/>} text={t('Sustainability & Responsibility')}/>

            <ItemText icon={<SiHomeadvisor/>} text={t('Property Management')}/>
        </>;
    };

    return (
        <div className={s.management}>
            <Background background={background}/>

            <Title title={t('Management consulting')}/>
            <MaterialBox content={<BlockOne/>}
                         style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>
            <MaterialBox content={<BlockTwo/>}
                         style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>
            <MaterialBox content={<BlockThree/>}
                         style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>

        </div>
    )


}
export default withNamespaces()(ManagementConsulting);


