import classNames from "classnames/bind";
import styles from "./NotifycationModal.module.scss";
import Heading from "./heading";
import ItemNoti from "./itemNoti";
import Status from "./status";
import TypeSee from "./typeSee";
import { useState } from "react";
import { faGamepad, faUserGroup } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);
interface NotifycationModalProps {}
const NotifycationModal: React.FC<NotifycationModalProps> = () => {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const noties = [
        {
            img: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/339410860_3427037230899875_1225356495449204386_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xXj0REIJyOgAX-33_xZ&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfBaSZ7FYQVmlzZw5EHzSaUdvt5ola71sN5MDwrldK5MHg&oe=64F21BC0",
            icon: faUserGroup,
            name: "Thu Nguyễn đã đăng 1 bài viết mới bấm vào để xem chi tiết.",
            time: "1 giây trước",
            status: true,
        },
        {
            img: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/366900529_662947712533706_4911613059815597696_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Di-K8N3B9yQAX8KGsUl&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfB5QPERGsg0ywC84kJrPVx9lTLTuq7bJUHeAfkeV44xGA&oe=64F0E952",
            icon: faGamepad,
            name: "Liên quân mobile đã phát trực tiếp:'14h30':TDT Esport vs MDH esport Liên Quân Mobile.",
            time: "1 tiếng trước",
            status: true,
        },
        {
            img: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/239462814_2349880831812471_7302002402268342362_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M1BTM338yuYAX8fS3Hp&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfB0rLKdnBoLVFVYYs4e7LQ8Ll5IJWSS-BZUsXMciBKitg&oe=64F0B0CB",
            icon: faUserGroup,
            name: "Độ Phùng : Hí anh em, Ăn chơi xong rồi quay lại lịch làm việc như mọi năm, mai Chủ Nhật chỉ stream bên Nimo, vlog với chuyến đi chơi thứ 2 stream bên youtube anh em cùng xem nhá.Nay tôi ngồi edit vlog nên nghỉ nốt cái, chúc cả nhà cuối tuần vui vẻ ❤",
            time: "1 ngày  trước",
            status: false,
        },
        {
            img: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/339410860_3427037230899875_1225356495449204386_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xXj0REIJyOgAX-33_xZ&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfBaSZ7FYQVmlzZw5EHzSaUdvt5ola71sN5MDwrldK5MHg&oe=64F21BC0",
            icon: faUserGroup,
            name: "Thu Nguyễn đã đăng 1 bài viết mới bấm vào để xem chi tiết.",
            time: "1 giây trước",
            status: true,
        },
        {
            img: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/366900529_662947712533706_4911613059815597696_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Di-K8N3B9yQAX8KGsUl&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfB5QPERGsg0ywC84kJrPVx9lTLTuq7bJUHeAfkeV44xGA&oe=64F0E952",
            icon: faGamepad,
            name: "Liên quân mobile đã phát trực tiếp:'14h30':TDT Esport vs MDH esport Liên Quân Mobile.",
            time: "1 tiếng trước",
            status: true,
        },
        {
            img: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/239462814_2349880831812471_7302002402268342362_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M1BTM338yuYAX8fS3Hp&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfB0rLKdnBoLVFVYYs4e7LQ8Ll5IJWSS-BZUsXMciBKitg&oe=64F0B0CB",
            icon: faUserGroup,
            name: "Độ Phùng : Hí anh em, Ăn chơi xong rồi quay lại lịch làm việc như mọi năm, mai Chủ Nhật chỉ stream bên Nimo, vlog với chuyến đi chơi thứ 2 stream bên youtube anh em cùng xem nhá.Nay tôi ngồi edit vlog nên nghỉ nốt cái, chúc cả nhà cuối tuần vui vẻ ❤",
            time: "1 ngày  trước",
            status: false,
        },
        {
            img: "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/339410860_3427037230899875_1225356495449204386_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=xXj0REIJyOgAX-33_xZ&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfBaSZ7FYQVmlzZw5EHzSaUdvt5ola71sN5MDwrldK5MHg&oe=64F21BC0",
            icon: faUserGroup,
            name: "Thu Nguyễn đã đăng 1 bài viết mới bấm vào để xem chi tiết.",
            time: "1 giây trước",
            status: true,
        },
        {
            img: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/366900529_662947712533706_4911613059815597696_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Di-K8N3B9yQAX8KGsUl&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfB5QPERGsg0ywC84kJrPVx9lTLTuq7bJUHeAfkeV44xGA&oe=64F0E952",
            icon: faGamepad,
            name: "Liên quân mobile đã phát trực tiếp:'14h30':TDT Esport vs MDH esport Liên Quân Mobile.",
            time: "1 tiếng trước",
            status: true,
        },
        {
            img: "https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-6/239462814_2349880831812471_7302002402268342362_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=M1BTM338yuYAX8fS3Hp&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfB0rLKdnBoLVFVYYs4e7LQ8Ll5IJWSS-BZUsXMciBKitg&oe=64F0B0CB",
            icon: faUserGroup,
            name: "Độ Phùng : Hí anh em, Ăn chơi xong rồi quay lại lịch làm việc như mọi năm, mai Chủ Nhật chỉ stream bên Nimo, vlog với chuyến đi chơi thứ 2 stream bên youtube anh em cùng xem nhá.Nay tôi ngồi edit vlog nên nghỉ nốt cái, chúc cả nhà cuối tuần vui vẻ ❤",
            time: "1 ngày  trước",
            status: false,
        },
    ];
    return (
        <div className={cx("NotifycationModal__wrapper")}>
            <Heading cx={cx} visible={visible} show={show} hide={hide} />
            <Status cx={cx} />
            <TypeSee cx={cx} />
            {noties?.length > 0 &&
                noties.map((noti, index) => (
                    <ItemNoti cx={cx} noti={noti} key={index} />
                ))}
        </div>
    );
};

export default NotifycationModal;
