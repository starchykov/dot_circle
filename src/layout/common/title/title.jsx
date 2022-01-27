import s from './title.module.scss'
import { v4 as uuidv4 } from 'uuid';

export const Title = (props) => {
    let style = props.style ?? {color: 'white'};

    return (
            <h1 key={uuidv4()} className={s.title}
                style={style}>
                {props.icon && props.icon}
                {props.title}
            </h1>
    );
};

export const PageTitle = (props) => {
    let style = props.style ?? {color: '#333'};

    return (
            <h2 key={uuidv4()} className={s.pageTitle}
                style={style}>
                {props.icon && props.icon}
                {props.title}
            </h2>
    );
};

export const ContainerTitle = (props) => {
    let style = props.style ?? {color: '#333'};

    return (
            <h3 key={uuidv4()} className={s.containerTitle}
                style={style}>
                {props.icon && props.icon}
                {props.title}
            </h3>
    );
};

export default Title;

