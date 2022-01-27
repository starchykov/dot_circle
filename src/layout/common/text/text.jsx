import s from './text.module.scss'
import { v4 as uuidv4 } from 'uuid';


export const Text = (props) => {
    let style = props.style ?? {width: '100%'};

    return (
        <p key={uuidv4()} className={s.text}
            style={style}>
            {props.icon && props.icon}
            {props.text}
        </p>
    );
};

export const BoldText = (props) => {
    let style = props.style ?? {width: '100%'};

    return (
        <p key={uuidv4()} className={s.boldText}
           style={style}>
            {props.icon && props.icon}
            {props.text}
        </p>
    );
};

export const ItemText = (props) => {
    let style = props.style ?? {width: '100%'};

    return (
        <p key={uuidv4()} className={s.itemText}
           style={style}>
            {props.icon && props.icon}
            {props.text}
        </p>
    );
};

export const HintText = (props) => {
    let style = props.style ?? {width: '100%'};

    return (
        <p key={uuidv4()} className={s.hintText}
           style={style}>
            {props.icon && props.icon}
            {props.text}
        </p>
    );
};