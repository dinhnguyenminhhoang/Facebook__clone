import React from "react";
import Account from "../Account/Account";
interface AccountInfoProps {
    cx: Function;
}
const AccountInfo: React.FC<AccountInfoProps> = ({ cx }) => {
    return (
        <div className={cx("account__info")}>
            <Account />
            <div className={cx("seen__profile")}>
                <button className={cx("profile-btn")}>
                    Xem tất cả trang cá nhân
                </button>
            </div>
        </div>
    );
};

export default AccountInfo;
