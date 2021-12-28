import s from './material_box.module.scss'

const MaterialBox = (props) => {
    return <div className={s.materialBox} style={props.style}>
        {props.content}
    </div>
};

export default MaterialBox;