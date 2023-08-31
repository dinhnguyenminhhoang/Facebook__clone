import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface HeaderProps {
    cx: Function;
    listIcon: IconDefinition[];
}
const Header: React.FC<HeaderProps> = ({ cx, listIcon }) => {
    return (
        <div className={cx("header__wrapper")}>
            <h1 className={cx("heading")}>Chat</h1>
            <div className={cx("header__action")}>
                {listIcon?.length > 0 &&
                    listIcon.map((icon, index) => (
                        <button className={cx("action-btn")}>
                            <FontAwesomeIcon
                                icon={icon}
                                className={cx("action-icon")}
                            />
                        </button>
                    ))}
            </div>
        </div>
    );
};

export default Header;
