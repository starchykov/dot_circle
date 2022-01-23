import s from "./file.module.scss";
import {BsBoxArrowInDown} from "react-icons/all";
import {HintText} from "../text/text";
import {withNamespaces} from "react-i18next";

const File = ({t, style, content}) => {
    let css = style ?? {height: '-webkit-fill-available'};

    return (
            <div className={s.file}
                 style={css}>
                {content && content}
                <BsBoxArrowInDown/>
                <HintText text={t('Click to download the program')}/>
            </div>
    )
};

export default withNamespaces()(File);