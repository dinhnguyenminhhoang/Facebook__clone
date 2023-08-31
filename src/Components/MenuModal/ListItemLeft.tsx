import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface ListItemLeftProps {
    cx: Function;
    dataLeft: {
        icon: IconDefinition;
        title: string;
    };
}
const ListItemLeft: React.FC<ListItemLeftProps> = ({ cx, dataLeft }) => {
    return (
        <div className={cx("item__left--wrapper")}>
            <FontAwesomeIcon
                icon={dataLeft.icon}
                className={cx("item-left__icon")}
            />
            <span>{dataLeft.title}</span>
        </div>
    );
};

export default ListItemLeft;
