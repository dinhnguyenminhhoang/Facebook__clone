import classNames from "classnames/bind";
import styles from "./MenuModal.module.scss";
import ModalRigth from "./ModalRight";
import ModalLeft from "./ModalLeft";
import { Container } from "react-bootstrap";

const cx = classNames.bind(styles);
interface MenuModalProps {}
const MenuModal: React.FC<MenuModalProps> = () => {
    const dataRight = [
        "xã hội",
        "giải trí",
        "Mua sắm",
        "cá nhân",
        "chuyên nghiệp",
        "nguồn lực cho cộng đồng",
        "Sản phẩm khác của Meta",
    ];
    return (
        <div className={cx("menu-modal__wrapper")}>
            <h1 className={cx("header")}>Menu</h1>
            <div className={cx("modal__content")}>
                <ModalRigth cx={cx} data={dataRight} />
                <ModalLeft cx={cx} />
            </div>
        </div>
    );
};

export default MenuModal;
