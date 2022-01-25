import s from "./file.module.scss";
import {BsBoxArrowInDown} from "react-icons/all";
import {HintText} from "../text/text";
import {withNamespaces} from "react-i18next";

const File = ({t, style, content, link}) => {
    let css = style ?? {height: '-webkit-fill-available'};

    return (
        <a href={link}
           className={s.file}
           style={css} download>
            {content && content}
            <BsBoxArrowInDown/>
            <HintText text={t('Click to download the program')}/>
        </a>
    )
};

export default withNamespaces()(File);