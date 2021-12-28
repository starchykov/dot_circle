import style from "./text.scss";

const Text = (props) => {
    return (
        <p className={style.normal}>{props.str}</p>
    )
};

export default Text;