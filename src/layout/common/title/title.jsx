import s from './title.module.scss'


export const Title = (props) => {
    let style = props.style ?? {color: 'white'};

    return (
        <div className={s.title}>
            <h1 style={style}>{props.title}</h1>
        </div>
    );
};

export const PageTitle = (props) => {
    let style = props.style ?? {color: '#333'};

    return (
        <div className={s.pageTitle}>
            <h2 style={style}>{props.title}</h2>
        </div>
    );
};

export const ContainerTitle = (props) => {
    let style = props.style ?? {color: '#333'};

    return (
        <div className={s.containerTitle}>
            <h3 style={style}>{props.title}</h3>
        </div>
    );
};

export default Title;

