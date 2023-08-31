import {
    faHome,
    faStore,
    faTelevision,
    faUserGroup,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import MenuModal from "../../../Components/MenuModal/MenuModal";
import NotifycationModal from "../../../Components/NotifycationModal/NotifycationModal";
import SearchModal from "../../../Components/SearchModal/SearchModal";
import Account from "./Account";
import styles from "./Header.module.scss";
import HeaderItem from "./HeaderItem";
import Menu from "./Menu";
import Messenger from "./Messenger";
import Notifycation from "./Notifycation";
import Search from "./Search";
import MessengerModal from "../../../Components/MessengerModal/MessengerModal";
const cx = classNames.bind(styles);
interface HeaderProps {}
const Header: React.FC<HeaderProps> = () => {
    const [isSearch, setIsSearch] = useState(false);
    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isShowNotification, setIsShowNotification] = useState(false);
    const iconList = [
        {
            icon: faHome,
            content: "Trang chủ",
        },
        {
            icon: faUserGroup,
            content: "bạn bè",
        },
        {
            icon: faTelevision,
            content: "Videos",
        },
        {
            icon: faStore,
            content: "MarketPlace",
        },
        {
            icon: faUsers,
            content: "nhóm",
        },
    ];
    const searchResult = [
        {
            img: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/331725419_506672961624178_6055825346843912195_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=PPEb4zjUrXQAX-Me7bG&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBNf6_3HmQRPqhN6vBIS_IIZ1o7DyCCAZaC2AyNZ8o07g&oe=64EF99F6",
            name: "Thu Nguyễn",
            status: true,
        },
        {
            img: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-1/269812011_1083046655869537_4870147934702657640_n.jpg?stp=dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=7206a8&_nc_ohc=X4TwaohPqCoAX_fhh-_&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfB7zVLp_HnjXTevshR_siQyFsL4aeKx_guYCL7KosBerg&oe=64EF6DDE",
            name: "Đinh Nguyễn Minh Hoàng",
            status: true,
        },
        {
            img: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t1.6435-9/126048017_1071791673271546_3455825909525154618_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=J23FXy2RGMcAX9UYxcW&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDbfZ5dzqI4nn77FZTNwPcp5AIF834LlupTyseXznBz3w&oe=651110B4",
            name: "Đinh Thị Mộng Dung",
            status: false,
        },
    ];
    const handleClickSearch = () => {
        setIsSearch(true);
    };
    const handleClickArrowSearch = () => {
        setIsSearch(false);
    };
    const handleShowMenu = () => {
        setIsShowMenu(!isShowMenu);
        if (!isShowMenu) setIsShowNotification(false);
    };
    const handleShowNotification = () => {
        setIsShowNotification(!isShowNotification);
        if (!isShowNotification) setIsShowMenu(false);
    };
    return (
        <div>
            {isSearch && <SearchModal searchResult={searchResult} />}
            <Container fluid className={cx("header__container")}>
                <Search
                    cx={cx}
                    handleClickSearch={handleClickSearch}
                    handleClickArrowSearch={handleClickArrowSearch}
                    isSearch={isSearch}
                />
                <HeaderItem cx={cx} iconList={iconList} />
                <div className={cx("header__list-right")}>
                    <Menu cx={cx} handleShowMenu={handleShowMenu} />
                    <Messenger cx={cx} />
                    <Notifycation
                        cx={cx}
                        handleShowNotification={handleShowNotification}
                    />
                    <Account cx={cx} />
                </div>
            </Container>
            {isShowMenu && <MenuModal />}
            {isShowNotification && <NotifycationModal />}
            <MessengerModal />
        </div>
    );
};

export default Header;
