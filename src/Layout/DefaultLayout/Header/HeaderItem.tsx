import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import React, { useState } from "react";

interface HeaderItemProps {
    cx: Function;
    iconList: { icon: IconDefinition; content: string }[];
}

const HeaderItem: React.FC<HeaderItemProps> = ({ cx, iconList }) => {
    const [activeIcon, setActiveIcon] = useState<IconDefinition | null>(null);
    const handleIconClick = (icon: IconDefinition) => {
        setActiveIcon((prevActiveIcon) =>
            prevActiveIcon === icon ? null : icon
        );
    };
    return (
        <div className={cx("header__item")}>
            {iconList.length > 0 &&
                iconList.map((icon, index) => (
                    <Tippy content={icon.content} key={index} delay={100}>
                        <button
                            className={cx("item-btn", {
                                active: activeIcon === icon.icon,
                            })}
                            onClick={() => handleIconClick(icon.icon)}
                        >
                            <FontAwesomeIcon
                                icon={icon.icon}
                                className={cx("item-icon")}
                            />
                        </button>
                    </Tippy>
                ))}
        </div>
    );
};

export default HeaderItem;
