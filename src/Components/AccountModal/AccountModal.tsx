import React from "react";
import classNames from "classnames/bind";
import styles from "./AccountModal.module.scss";
import AccountInfo from "./accountInfo";
import SettingAccount from "./settingAccount";
import {
    faArrowRight,
    faCircleExclamation,
    faGear,
    faMoon,
    faQuestion,
    faSignOut,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
interface AccountModalProps {}
const AccountModal: React.FC<AccountModalProps> = () => {
    const listSetting = [
        {
            icon: faGear,
            title: "cài đặt & quyền riêng tư",
            arrow: true,
        },
        {
            icon: faQuestion,
            title: "trợ giúp và hỗ trợ",
            arrow: true,
        },
        {
            icon: faMoon,
            title: "màn hình & trợ năng",
            arrow: true,
        },
        {
            icon: faCircleExclamation,
            title: "Đóng góp ý kiến",
        },
        {
            icon: faSignOut,
            title: "cài đặt & quyền riêng tư",
        },
    ];
    return (
        <div className={cx("account__modal")}>
            <AccountInfo cx={cx} />
            {listSetting?.length > 0 &&
                listSetting.map((setting, index) => (
                    <SettingAccount cx={cx} setting={setting} key={index} />
                ))}
        </div>
    );
};

export default AccountModal;
