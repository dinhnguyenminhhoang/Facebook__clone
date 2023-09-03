import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import Account from "../../../Components/Account/Account";
import SidebarItem from "./sidebarItem";
import {
    faCreditCard,
    faFeed,
    faGamepad,
    faHeart,
    faHistory,
    faSave,
    faTv,
    faUserGroup,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Shortcuts from "./shortcuts";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const Sedebar = () => {
    const itemData = [
        {
            icon: faUsers,
            title: "Bạn bè",
        },
        {
            icon: faHistory,
            title: "kỷ niệm",
        },
        {
            icon: faSave,
            title: "Đã lưu",
            color: "#a157e7",
        },
        {
            icon: faUserGroup,
            title: "Nhóm",
        },
        {
            icon: faTv,
            title: "Video",
        },
        {
            icon: faFeed,
            title: "Bảng feed",
        },
        {
            icon: faHeart,
            title: "Chiến dịch gây quỹ",
            color: "#f34b69",
        },
        {
            icon: faGamepad,
            title: "Chơi game",
        },
        {
            icon: faCreditCard,
            title: "Chiến dịch gây quỹ",
            color: "#00173a",
        },
    ];
    const shortcuts = [
        {
            img: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/242085765_1778717029184213_2423606832337663646_n.png?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=1ac024&_nc_ohc=KeUCRIDSaFcAX_zgWxG&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCaftClGWKRbkKgKjYF9LiRdnw60RoT4fCDBNmJZnSr0g&oe=64F4A19F",
            title: "Công nghệ thông tin K62 - UTC2",
        },
        {
            img: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/302444672_133055812798837_1243952903483913055_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1ac024&_nc_ohc=xedL4PWfB-kAX_uaRYd&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA5dyF5k_w4VFwNdIj9SDtiBJnXCWG_-a7guf_wX6-ogw&oe=64F5ACEC",
            title: "UTC2 - Diễn đàn Sinh viên Đại học Giao thông Vận tải Phân hiệu tại TPHCM",
        },
        {
            img: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/242085765_1778717029184213_2423606832337663646_n.png?stp=dst-jpg_p960x960&_nc_cat=104&ccb=1-7&_nc_sid=1ac024&_nc_ohc=KeUCRIDSaFcAX_zgWxG&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfCaftClGWKRbkKgKjYF9LiRdnw60RoT4fCDBNmJZnSr0g&oe=64F4A19F",
            title: "Cộng Đồng Rap Việt Underground",
        },
        {
            img: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/317846786_450127827309330_1179166961045900493_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=1ac024&_nc_ohc=P--NRLYHLREAX9U0fqL&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfCSY57CMmWtRQyucmgsc-UKhnS8ShYKprkd0yKjDItA8g&oe=64F4726B",
            title: "Chợ Bàn Phím Cơ Việt Nam ✅",
        },
        {
            img: "https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/126164158_10207602068445256_4720263081356036963_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8631f5&_nc_ohc=D6kBBqtKZAMAX_YoKCp&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfA9HM3kiNgdfdTowuqGnnqncuugVKACGNzqHY9lgT_sug&oe=6517BBB6",
            title: "BM Công nghệ thông tin - UTC2",
        },
    ];
    return (
        <div className={cx("sidebar__wrapper")}>
            <Account />
            {itemData?.length > 0 &&
                itemData.map((item, index) => {
                    if (index <= 4) {
                        return <SidebarItem cx={cx} key={index} data={item} />;
                    }
                })}

            <div className={cx("shortcuts__wrapper")}>
                <div className={cx("heading__wrapper")}>
                    <span className={cx("heading")}>Lối tắt của bạn</span>
                    <Link to="/" className={cx("edit")}>
                        Chỉnh sữa
                    </Link>
                </div>
                {shortcuts?.length > 0 &&
                    shortcuts.map((shortcut, index) => (
                        <Shortcuts cx={cx} key={index} data={shortcut} />
                    ))}
            </div>
        </div>
    );
};

export default Sedebar;
