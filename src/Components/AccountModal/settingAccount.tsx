import {
    IconDefinition,
    faArrowRight,
    faGear,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface SettingAccountProps {
    cx: Function;
    setting: {
        icon: IconDefinition;
        title: string;
        arrow?: false | true;
    };
}
const SettingAccount: React.FC<SettingAccountProps> = ({ cx, setting }) => {
    return (
        <div className={cx("setting__account")}>
            <ul className={cx("setting__list")}>
                <li className={cx("setting__item")}>
                    <button className={cx("setting__content")}>
                        <FontAwesomeIcon
                            icon={setting.icon}
                            className={cx("setting__icon")}
                        />
                        <span>{setting.title}</span>
                    </button>
                    {setting.arrow && (
                        <button className={cx("settiing__arrow")}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default SettingAccount;
