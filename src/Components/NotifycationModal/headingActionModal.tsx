import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faGears } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface HeadingActionModalProps {
    cx: Function;
}
const HeadingActionModal: React.FC<HeadingActionModalProps> = ({ cx }) => {
    return (
        <div className={cx("modal_setting")}>
            <ul className={cx("noty__setting--list")}>
                <li className={cx("setting__item")}>
                    <FontAwesomeIcon
                        className={cx("setting__icon")}
                        icon={faCheck}
                    />
                    <span className={cx("setting__title")}>
                        đánh dấu tất cả đã đọc
                    </span>
                </li>
                <li className={cx("setting__item")}>
                    <FontAwesomeIcon
                        className={cx("setting__icon")}
                        icon={faGears}
                    />
                    <span className={cx("setting__title")}>
                        cài đặt thông báo
                    </span>
                </li>
                <li className={cx("setting__item")}>
                    <FontAwesomeIcon
                        className={cx("setting__icon")}
                        icon={faTelegram}
                    />
                    <span className={cx("setting__title")}>Mở thông báo</span>
                </li>
            </ul>
        </div>
    );
};

export default HeadingActionModal;
