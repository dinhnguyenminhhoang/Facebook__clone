import classNames from "classnames/bind";
import styles from "./CreateGroup.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
const CreateGroup = () => {
    return (
        <div className={cx("create-group__wrapper")}>
            <FontAwesomeIcon icon={faPlus} className={cx("create__icon")} />
            <span className={cx("create__title")}>Tạo nhóm mới</span>
        </div>
    );
};

export default CreateGroup;
