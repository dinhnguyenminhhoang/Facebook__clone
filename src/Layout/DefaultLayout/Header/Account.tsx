import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Tippy from "@tippyjs/react";
interface AccountProps {
    cx: Function;
}
const Account: React.FC<AccountProps> = ({ cx }) => {
    return (
        <Tippy content="Account" delay={100}>
            <button className={cx("item__right")}>
                <FontAwesomeIcon
                    icon={faUser}
                    className={cx("iteam__right-icon")}
                />
            </button>
        </Tippy>
    );
};

export default Account;
