import { IconDefinition, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MessengerItemProps {
    cx: Function;
    message: {
        img: string;
        name: string;
        lastMessage: string;
        icon?: IconDefinition;
    };
}
const MessengerItem: React.FC<MessengerItemProps> = ({ cx, message }) => {
    return (
        <div className={cx("item__wrapper")}>
            <div className={cx("info__wrapper")}>
                <img
                    src={message.img}
                    alt=""
                    width={56}
                    height={56}
                    className={cx("item__img")}
                />
                <div className={cx("item__info")}>
                    <span className={cx("info__name")}>{message.name}</span>
                    <span>{message.lastMessage}</span>
                </div>
            </div>
            {/* <div>
                <FontAwesomeIcon icon={message.icon || faBell} />
            </div> */}
        </div>
    );
};

export default MessengerItem;
