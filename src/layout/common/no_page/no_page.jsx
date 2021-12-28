import s from './empty_page.module.scss'
import {withNamespaces} from "react-i18next";
import {useEffect} from "react";

const NoPage = ({t, name}) => {

    // Set document title wia hook effect
    useEffect(() => document.title = t(name));

    return (
        <div className={s.noPage}>
            <h1>
                <span className={s.pageName}>{t(name)}</span> {t('page in development')}
            </h1>
        </div>
    )

};

export default withNamespaces()(NoPage);