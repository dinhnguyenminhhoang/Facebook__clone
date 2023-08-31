import {
    IconDefinition,
    faWatchmanMonitoring,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ItemNotiProps {
    cx: Function;
    noti: {
        img: string;
        icon: IconDefinition;
        name: string;
        time: string;
        status?: boolean | true;
    };
}
const ItemNoti: React.FC<ItemNotiProps> = ({ cx, noti }) => {
    return (
        <div className={cx("noti__wrapper")}>
            <div className={cx("noti-img__wrapper")}>
                <img
                    src={noti.img}
                    alt="notiimage"
                    width={56}
                    height={56}
                    className={cx("noti__img")}
                />
                <FontAwesomeIcon icon={noti.icon} className={cx("img__icon")} />
            </div>
            <div className={cx("noty__content")}>
                <span className={cx("content__title")}>{noti.name}</span>
                <span className={cx("time")}>{noti.time}</span>
            </div>
            <div className={cx("noty__action")} hidden={!noti.status}></div>
        </div>
    );
};

export default ItemNoti;
