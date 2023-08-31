import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Tippy from "@tippyjs/react";
interface NotifycationProps {
    cx: Function;
    handleShowNotification: () => void;
}
const Notifycation: React.FC<NotifycationProps> = ({
    cx,
    handleShowNotification,
}) => {
    return (
        <Tippy content="Notifycation" delay={100}>
            <button
                className={cx("item__right")}
                onClick={handleShowNotification}
            >
                <FontAwesomeIcon
                    icon={faBell}
                    className={cx("iteam__right-icon")}
                />
            </button>
        </Tippy>
    );
};

export default Notifycation;
