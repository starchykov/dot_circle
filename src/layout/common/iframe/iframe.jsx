import s from './iframe.module.scss'

const Iframe = ({source}) => {

    if (!source) return <div>Loading...</div>;

    return (
        <div className={s.iFrame}>
            <iframe className={s.viewPort} src={source}/>
        </div>
    );
};

export default Iframe;