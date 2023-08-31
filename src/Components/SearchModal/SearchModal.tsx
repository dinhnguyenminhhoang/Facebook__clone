import classNames from "classnames/bind";
import styles from "./SearchModal.module.scss";
import React from "react";
import HeaderSearchModal from "./HeaderSearchModal";
import SearchModalItem from "./SearchModalItem";
import { Container } from "react-bootstrap";
const cx = classNames.bind(styles);
interface SearchModalProps {
    searchResult: {
        img: string;
        name: string;
        status?: Boolean | false;
    }[];
}
const SearchModal: React.FC<SearchModalProps> = ({ searchResult }) => {
    return (
        <div className={cx("search-Modal__wrapper")}>
            <Container fluid>
                <HeaderSearchModal cx={cx} />
                <SearchModalItem cx={cx} searchResult={searchResult} />
            </Container>
        </div>
    );
};

export default SearchModal;
