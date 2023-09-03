import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FriendItemProps {
    cx: Function;
    friend: {
        img: string;
        name: string;
        status?: boolean | false;
    };
}
const FriendItem: React.FC<FriendItemProps> = ({ cx, friend }) => {
    return (
        <div className={cx("friend-item__wrapper")}>
            <div className={cx("friend__img--wrapper")}>
                <img
                    src={friend.img}
                    alt=""
                    width={36}
                    height={36}
                    className={cx("friend_img", {
                        status: friend.status,
                    })}
                />
                <FontAwesomeIcon
                    icon={faCircle}
                    className={cx("friend__status")}
                />
            </div>
            <span className={cx("friend__name")}>{friend.name}</span>
        </div>
    );
};

export default FriendItem;
