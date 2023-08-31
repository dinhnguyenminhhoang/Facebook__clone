import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface SearchModalItemProps {
    cx: Function;
    searchResult: {
        img: string;
        name: string;
        status?: Boolean | false;
    }[];
}
const SearchModalItem: React.FC<SearchModalItemProps> = ({
    cx,
    searchResult,
}) => {
    return (
        <ul className={cx("list__result")}>
            {searchResult?.length > 0 &&
                searchResult.map((result, index) => (
                    <li className={cx("result__item")} key={index}>
                        <div className={cx("account__result")}>
                            <img
                                src={result.img}
                                alt="avata"
                                width="36"
                                height="36"
                                className={cx("avata")}
                            />
                            <div className={cx("acount__info")}>
                                <span className={cx("account__name")}>
                                    {result.name}
                                </span>
                                <span className={cx("account__status")}>
                                    {result.status ? "bạn bè" : ""}
                                </span>
                            </div>
                        </div>
                        <div className={cx("action")}>
                            <FontAwesomeIcon
                                icon={faClose}
                                className={cx("action__icon")}
                            />
                        </div>
                    </li>
                ))}
        </ul>
    );
};

export default SearchModalItem;
