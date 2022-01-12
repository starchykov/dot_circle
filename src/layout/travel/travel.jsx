import s from './travel.module.scss'
import {withNamespaces} from "react-i18next";
import {useCallback, useEffect} from "react";
import {ContainerTitle, PageTitle, Title} from "../common/title/title";
import MaterialBox from "../common/material_box/material_box";
import {BoldText, ItemText} from "../common/text/text";
import {BiWorld, BsDot, RiArrowDropRightFill, RiArticleFill} from "react-icons/all";
import nepal from '../../assets/travel_nepal.jpeg'
import korea from '../../assets/travel_korea.png'
import travel from '../../assets/travel.jpeg'
import Background from "../common/background/background";
import File from "../common/file/file";

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
                    <PageTitle icon={<RiArticleFill/>}
                               title={t('Для каждого человека смысл путешествий разный – релакс, общение с семьей, изучение истории или искусств, гастро-туризм, экстрим или оздоровление, обмен опытом или новые знания.')}/>
                    <BoldText
                        text={t('Мы предлагаем найти новый смысл и отправиться в одно из наших групповых путешествий с определенной темой. Или мы придумаем для вас уникальный маршрут, узнав вашу мечту или цель. Ведь планирование такого путешествия занимает много времени, постоянно возникают вопросы, поэтому мы предлагаем создать для вас уникальный продукт, воспользовавшись нашими ресурсами, опытом и партнерскими связями.')}/>
                </>
            } style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>

            <MaterialBox content={
                <>
                    <img src={nepal} alt=""/>
                    <PageTitle icon={<BiWorld/>}
                               title={t('Непал Программа 1 – «В поисках смыслов»')}
                               style={{marginTop: '30px'}}
                    />

                    <div className={s.videoBox}>
                        <div className={s.leftContent}>
                            <iframe src={'https://www.youtube.com/embed/0sp4AqKj2iA'}/>
                        </div>
                        <div className={s.rightContent}>
                            <File/>
                        </div>
                    </div>

                    <PageTitle icon={<BiWorld/>}
                               title={t('Непал Программа 2 – «Трансформация 3»')}/>
                    <BoldText
                        text={t('В эту практическую программу на стадии завершения могут попасть только участники программы «Трансформация». ')}/>
                </>
            } style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>


            <MaterialBox content={
                <>
                    <img src={korea} alt=""/>
                    <PageTitle icon={<BiWorld/>}
                               title={t('Южная Корея « Приключения в времени »')}/>
                    <BoldText
                        text={t('Вы будете очарованы природными красотами Кореи, великолепным Сеулом – его величественными дворцами и не повторимыми садами. ')}/>
                    <ContainerTitle icon={<RiArrowDropRightFill/>}
                                    title={t('9 полных дней Активного отдыха который в себя включает:')}/>
                    {'Медицинские процедуры красоты  - Посещение исторических мест - Не обычный опыт жизни в монастыре  - Посещение образовательных учреждений  - Гастрономическое знакомство - Культурные мероприятия'.split('-').map((e, idx) =>
                        <ItemText key={uuid(idx)} icon={<BsDot/>} text={t(e)}/>)}

                </>
            } style={{width: '-webkit-fill-available', display: 'flex', flexWrap: 'wrap'}}/>

        </div>
    )
};

export default withNamespaces()(Travel);