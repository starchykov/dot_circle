import {useEffect, useState} from "react";
import popupStyles from "./custom-popup.module.scss";
import PropTypes from "prop-types";
import {NavLink} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const CustomPopup = (props) => {

    const [show, setShow] = useState(false);

    useEffect(() => setShow(props.show), [props.show]);

    const closeHandler = (e) => {
        setShow(false);
        props.onClose(false);
    };

    return (
        <div style={{visibility: show ? "visible" : "hidden", opacity: show ? "1" : "0"}}
             className={popupStyles.overlay}>

            <div className={popupStyles.popup}>
                {props.title != null && <h2 key={uuidv4()}>{props.title}</h2>}
                <NavLink to={`/${props.backPath}`}
                         className={popupStyles.close}
                         onClick={closeHandler}>
                    &times;
                </NavLink>
                <div className={popupStyles.content}>{props.children}</div>
            </div>

        </div>
    );
};

CustomPopup.propTypes = {
    show: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default CustomPopup;
