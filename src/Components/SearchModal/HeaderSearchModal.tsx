import { Link } from "react-router-dom";

interface HeaderSearchModalProps {
    cx: Function;
}
const HeaderSearchModal: React.FC<HeaderSearchModalProps> = ({ cx }) => {
    return (
        <div className={cx("header__wrapper")}>
            <span className={cx("near", "header__title")}>Gần đây</span>
            <Link to="/">
                <span className={cx("edit", "header__title")}>Chỉnh sữa</span>
            </Link>
        </div>
    );
};

export default HeaderSearchModal;
