import s from './title.module.scss'


export const Title = (props) => {
    let style = props.style ?? {color: 'white'};

    return (
            <h1 className={s.title}
                style={style}>
                {props.icon && props.icon}
                {props.title}
            </h1>
    );
};

export const PageTitle = (props) => {
    let style = props.style ?? {color: '#333'};

    return (
            <h2 className={s.pageTitle}
                style={style}>
                {props.icon && props.icon}
                {props.title}
            </h2>
    );
};

export const ContainerTitle = (props) => {
    let style = props.style ?? {color: '#333'};

    return (
            <h3 className={s.containerTitle}
                style={style}>
                {props.icon && props.icon}
                {props.title}
            </h3>
    );
};

export default Title;

