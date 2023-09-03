import {
    IconDefinition,
    faArrowAltCircleDown,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

interface SidebarItemProps {
    cx: Function;
    data: {
        icon: IconDefinition;
        title: string;
        color?: string;
    };
}
const SidebarItem: React.FC<SidebarItemProps> = ({ cx, data }) => {
    return (
        <div className={cx("sidebarItem__wrapper")}>
            <button className={cx("item__btn")}>
                <FontAwesomeIcon
                    icon={data.icon}
                    className={cx("item__icon")}
                    style={{ color: data.color }}
                />
            </button>
            <span className={cx("item__title")}>{data.title}</span>
        </div>
    );
};

export default SidebarItem;
