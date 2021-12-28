import s from './hovered_item.module.scss'

const HoveredItem = (props) => {
    return <div className={s.hoveredItem}>{props.content}</div>
};

export default HoveredItem;