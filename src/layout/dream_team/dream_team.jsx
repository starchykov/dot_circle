import s from "./dream_team.module.scss"
import {withNamespaces} from "react-i18next";
import executiveDirector from '../../assets/anar_dream_team.png'
import trainingAssistant from '../../assets/Zulfia_dream_team.png'
import challenger from '../../assets/Nurtac_dream_team.png'
import background from "../../assets/dream_team.png";
import {FaFacebookSquare, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import {useCallback, useEffect} from "react";
import Background from "../common/background/background";
import Title, {ContainerTitle, PageTitle} from "../common/title/title";
import {Text} from "../common/text/text";


const DreamTeam = ({t}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t('Dream team'));

    // Generate UUID key
    const uuid = useCallback((idx) => encodeURI(`${idx}`), [])

    const data = [
        {
            name: 'Anar Mammadov',
            position: 'Executive Director',
            image: executiveDirector,
            social: [
                {icon: 'facebook', link: 'https://www.facebook.com/anar.mammadov.56211/'},
                {icon: 'instagram', link: 'https://www.instagram.com/anarmammadov.az/'},
                {icon: 'linkedin', link: 'https://www.linkedin.com/in/anar-mamm/'},
            ]
        },
        {
            name: 'Zulfiya Nagiyeva',
            position: "Training Assistant",
            image: trainingAssistant,
            social: [
                {icon: 'facebook', link: '/'},
                {icon: 'instagram', link: '/'},
                {icon: 'linkedin', link: '/'},
            ]
        },
        {
            name: 'Guliyeva Nurtac',
            position: "Challenger",
            image: challenger,
            social: [
                {icon: 'facebook', link: '/'},
                {icon: 'instagram', link: '/'},
                {icon: 'linkedin', link: '/'},
            ]
        }
    ];

    let card = data.map((i, idx) =>
        <div key={uuid(idx)} className={s.card}><img src={i.image} alt=""/>
            <div className={s.description}>
                <PageTitle title={t(i.name)} style={{margin: '15px 0', color: '#333'}}/>
                <ContainerTitle title={t('Position')}/>
                <Text text={t(i.position)}/>
                <ContainerTitle title={t('Contacts')} style={{margin: '15px 0', color: '#333'}}/>
                <div className={s.social}>{
                    i.social?.map((i, idx) =>
                        <a key={uuid(idx)} className={s.socialLink} href={i.link}>
                            {i.icon === 'facebook' && <FaFacebookSquare className={s.faLogo}/>}
                            {i.icon === 'instagram' && <FaInstagram className={s.faLogo}/>}
                            {i.icon === 'linkedin' && <FaLinkedinIn className={s.faLogo}/>}
                        </a>)}
                </div>
            </div>
        </div>
    );

    return (
        <div className={s.dreamTeam}>
            <Background background={background}/>
            <Title title={t('Dream team')}/>
            {card}
        </div>
    );
};

export default withNamespaces()(DreamTeam);