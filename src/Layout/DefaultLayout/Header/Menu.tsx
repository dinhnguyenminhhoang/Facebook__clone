import { IconDefinition, faGrip } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import React from "react";
interface MenuProps {
    cx: Function;
    handleShowMenu: () => void;
}
const Menu: React.FC<MenuProps> = ({ cx, handleShowMenu }) => {
    return (
        <Tippy content="Menu" delay={100}>
            <button className={cx("item__right")} onClick={handleShowMenu}>
                <FontAwesomeIcon
                    icon={faGrip}
                    className={cx("iteam__right-icon")}
                />
            </button>
        </Tippy>
    );
};

export default Menu;
