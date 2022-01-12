import s from './text.module.scss'


export const Text = (props) => {
    let style = props.style ?? {width: '100%'};

    return (
        <p className={s.text}
            style={style}>
            {props.icon && props.icon}
            {props.text}
        </p>
    );
};

export const BoldText = (props) => {
    let style = props.style ?? {width: '100%'};

    return (
        <p className={s.boldText}
           style={style}>
            {props.icon && props.icon}
            {props.text}
        </p>
    );
};

export const ItemText = (props) => {
    let style = props.style ?? {width: '100%'};

    return (
        <p className={s.itemText}
           style={style}>
            {props.icon && props.icon}
            {props.text}
        </p>
    );
};

export const HintText = (props) => {
    let style = props.style ?? {width: '100%'};

    return (
        <p className={s.hintText}
           style={style}>
            {props.icon && props.icon}
            {props.text}
        </p>
    );
};