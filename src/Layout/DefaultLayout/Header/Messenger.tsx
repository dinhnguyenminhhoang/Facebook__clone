import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import React from "react";
interface MessengerProps {
    cx: Function;
}
const Messenger: React.FC<MessengerProps> = ({ cx }) => {
    return (
        <Tippy content="Messenger" delay={100}>
            <button className={cx("item__right")}>
                <FontAwesomeIcon
                    icon={faFacebookMessenger}
                    className={cx("iteam__right-icon")}
                />
            </button>
        </Tippy>
    );
};

export default Messenger;
