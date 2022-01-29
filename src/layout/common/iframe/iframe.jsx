import s from './iframe.module.scss'

const Iframe = ({source, style}) => {
    let css = style ?? {height: '-webkit-fill-available'};

    if (!source) return <div>Loading...</div>;

    return (
        <div className={s.iFrame} style={css}>
            <iframe title="iframe" className={s.viewPort} src={source}/>
        </div>
    );
};

export default Iframe;