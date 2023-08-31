import { faArrowLeft, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Logo from "./Logo";
interface SearchProps {
    cx: Function;
    handleClickSearch: () => void;
    handleClickArrowSearch: () => void;
    isSearch: Boolean;
}
const Search: React.FC<SearchProps> = ({
    cx,
    handleClickSearch,
    handleClickArrowSearch,
    isSearch,
}) => {
    return (
        <div className={cx("search__container")}>
            <div className={cx("search")}>
                {!isSearch ? (
                    <Logo cx={cx} />
                ) : (
                    <FontAwesomeIcon
                        icon={faArrowLeft}
                        className={cx("search__arrow")}
                        onClick={handleClickArrowSearch}
                    />
                )}
                <div className={cx("search__wrapper")}>
                    <input
                        type="text"
                        className={cx("input__search")}
                        placeholder="tìm kiếm trên facebook"
                        onClick={handleClickSearch}
                    />
                    {!isSearch && (
                        <button className={cx("search__btn")}>
                            <FontAwesomeIcon
                                icon={faSearch}
                                className={cx("search-icon")}
                            />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;
