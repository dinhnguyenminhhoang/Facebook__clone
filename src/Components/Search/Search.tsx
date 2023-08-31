import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
const cx = classNames.bind(styles);
interface SearchProps {
    place: string;
}
const Search: React.FC<SearchProps> = ({ place }) => {
    return (
        <div className={cx("modal__input")}>
            <input
                type="text"
                placeholder={place}
                className={cx("input__search")}
            />
            <FontAwesomeIcon icon={faSearch} className={cx("input__icon")} />
        </div>
    );
};

export default Search;
