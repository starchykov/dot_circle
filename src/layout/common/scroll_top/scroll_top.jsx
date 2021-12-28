import s from './scroll_top.module.scss';
import {BiChevronUp} from "react-icons/all";

const ScrollTop = () => {
    return (
        <div className={s.scrollTop} onClick={() => window.scrollTo(0, 0)}>
            <BiChevronUp/>
        </div>
    )
}

export default ScrollTop;