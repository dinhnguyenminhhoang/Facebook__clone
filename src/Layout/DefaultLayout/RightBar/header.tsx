import { faEllipsis, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import React from "react";

interface HeaderProps {
    cx: Function;
    title: string;
    border?: boolean | false;
    icon?: boolean | false;
}
const Header: React.FC<HeaderProps> = ({ cx, title, border, icon }) => {
    return (
        <div className={cx("header", { border: border })}>
            <h1 className={cx("heading")}>{title}</h1>
            {icon && (
                <div className={cx("header-icon__wrapper")}>
                    <Tippy
                        content="Tìm kiếm theo tên hoặc nhóm"
                        placement="bottom"
                    >
                        <FontAwesomeIcon
                            icon={faSearch}
                            className={cx("header-icon")}
                        />
                    </Tippy>
                    <Tippy content="tùy chọn" placement="bottom">
                        <FontAwesomeIcon
                            icon={faEllipsis}
                            className={cx("header-icon")}
                        />
                    </Tippy>
                </div>
            )}
        </div>
    );
};

export default Header;
