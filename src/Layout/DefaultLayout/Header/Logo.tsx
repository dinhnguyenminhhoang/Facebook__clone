import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React from "react";
import { logo } from "../../../asset";
interface LogoProps {
    cx: Function;
}
const Logo: React.FC<LogoProps> = ({ cx }) => {
    return (
        <div className={cx("logo__wrapper")}>
            <button className={cx("logo-btn")}>
                <img
                    src={logo}
                    alt=""
                    className={cx("logo")}
                    width="40"
                    height="40"
                />
            </button>
        </div>
    );
};

export default Logo;
