import classNames from "classnames/bind";
import styles from "./MessengerModal.module.scss";
import Header from "./header";
import Search from "../Search/Search";
import MessengerItem from "./messengerItem";
import {
    faEllipsis,
    faExpand,
    faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);
const MessengerModal = () => {
    const listIcon = [faEllipsis, faExpand, faNewspaper];
    const listMessage = [
        {
            img: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/269812011_1083046655869537_4870147934702657640_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=X4TwaohPqCoAX93XvsY&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCbqYwQWUk5HUKhs62KKfXVPDfWlbJiqfFV1rLLR23YbA&oe=64F0ECA0",
            name: "Đinh Nguyễn Minh Hoàng",
            lastMessage: "đã gửi một nhãn dán",
        },
        {
            img: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.6435-1/119288420_171661961190611_1454092019416762414_n.jpg?stp=dst-jpg_s480x480&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1uo4TWuXxwMAX9hGpqF&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfDdoTMncSohKilkIn9Kjy9iTcd5-OuMb8N-GD-4vYKG5A&oe=65165BD0",
            name: "lấy đại trên mạng",
            lastMessage: "Aloo 12345",
        },
        {
            img: "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/338185888_2506151882891056_2982865428898834306_n.jpg?stp=c0.0.480.480a_dst-jpg_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1iSJJAxoKvEAX8zXXdz&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBms7Y2PUTV3KGdy8SHMTNvZW8JrafoxcC1jbFJpcLZkQ&oe=64F2F666",
            name: "lấy đại trên mạng",
            lastMessage: "aloo 4567",
        },
        {
            img: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/297882999_614044847017869_1579367317859500553_n.jpg?stp=c0.91.480.480a_dst-jpg_p480x480&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4cUI0ekjxCsAX_4RNYm&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfC2Zj5m8QxtfND7SgLjURQf-mkHVAjkJDuw2AT0ZFZA2Q&oe=64F49729",
            name: "lấy đại trên mạng",
            lastMessage: "alo 7 8 9 10",
        },
        {
            img: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/269812011_1083046655869537_4870147934702657640_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=X4TwaohPqCoAX93XvsY&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCbqYwQWUk5HUKhs62KKfXVPDfWlbJiqfFV1rLLR23YbA&oe=64F0ECA0",
            name: "Đinh Nguyễn Minh Hoàng",
            lastMessage: "đã gửi một nhãn dán",
        },
        {
            img: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.6435-1/119288420_171661961190611_1454092019416762414_n.jpg?stp=dst-jpg_s480x480&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1uo4TWuXxwMAX9hGpqF&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfDdoTMncSohKilkIn9Kjy9iTcd5-OuMb8N-GD-4vYKG5A&oe=65165BD0",
            name: "lấy đại trên mạng",
            lastMessage: "Aloo 12345",
        },
        {
            img: "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/338185888_2506151882891056_2982865428898834306_n.jpg?stp=c0.0.480.480a_dst-jpg_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1iSJJAxoKvEAX8zXXdz&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBms7Y2PUTV3KGdy8SHMTNvZW8JrafoxcC1jbFJpcLZkQ&oe=64F2F666",
            name: "lấy đại trên mạng",
            lastMessage: "aloo 4567",
        },
        {
            img: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/297882999_614044847017869_1579367317859500553_n.jpg?stp=c0.91.480.480a_dst-jpg_p480x480&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4cUI0ekjxCsAX_4RNYm&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfC2Zj5m8QxtfND7SgLjURQf-mkHVAjkJDuw2AT0ZFZA2Q&oe=64F49729",
            name: "lấy đại trên mạng",
            lastMessage: "alo 7 8 9 10",
        },
        {
            img: "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/269812011_1083046655869537_4870147934702657640_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=X4TwaohPqCoAX93XvsY&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfCbqYwQWUk5HUKhs62KKfXVPDfWlbJiqfFV1rLLR23YbA&oe=64F0ECA0",
            name: "Đinh Nguyễn Minh Hoàng",
            lastMessage: "đã gửi một nhãn dán",
        },
        {
            img: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.6435-1/119288420_171661961190611_1454092019416762414_n.jpg?stp=dst-jpg_s480x480&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1uo4TWuXxwMAX9hGpqF&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfDdoTMncSohKilkIn9Kjy9iTcd5-OuMb8N-GD-4vYKG5A&oe=65165BD0",
            name: "lấy đại trên mạng",
            lastMessage: "Aloo 12345",
        },
        {
            img: "https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/338185888_2506151882891056_2982865428898834306_n.jpg?stp=c0.0.480.480a_dst-jpg_p480x480&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1iSJJAxoKvEAX8zXXdz&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfBms7Y2PUTV3KGdy8SHMTNvZW8JrafoxcC1jbFJpcLZkQ&oe=64F2F666",
            name: "lấy đại trên mạng",
            lastMessage: "aloo 4567",
        },
        {
            img: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/297882999_614044847017869_1579367317859500553_n.jpg?stp=c0.91.480.480a_dst-jpg_p480x480&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=4cUI0ekjxCsAX_4RNYm&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfC2Zj5m8QxtfND7SgLjURQf-mkHVAjkJDuw2AT0ZFZA2Q&oe=64F49729",
            name: "lấy đại trên mạng",
            lastMessage: "alo 7 8 9 10",
        },
    ];
    return (
        <div className={cx("messengerModal__wrapper")}>
            <div className={cx("item__list")}>
                <Header cx={cx} listIcon={listIcon} />
                <Search place="tìm kiếm trên message" />
                {listMessage?.length > 0 &&
                    listMessage.map((message, index) => (
                        <MessengerItem cx={cx} key={index} message={message} />
                    ))}
            </div>
            <div className={cx("message__more")}>
                <button className={cx("more-btn")}>
                    <Link to="/">Xem tất cả trong Message</Link>
                </button>
            </div>
        </div>
    );
};

export default MessengerModal;
