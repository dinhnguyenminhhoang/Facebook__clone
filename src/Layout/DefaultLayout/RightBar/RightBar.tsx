import classNames from "classnames/bind";
import styles from "./RightBar.module.scss";
import Header from "./header";
import FriendItem from "./friendItem";
import { group } from "console";
import CreateGroup from "../../../Components/CreateGroup/CreateGroup";
const cx = classNames.bind(styles);

interface RightBarProps {}
const RightBar: React.FC<RightBarProps> = () => {
    const listFriendOnline = [
        {
            img: "https://i.pinimg.com/564x/1a/79/58/1a7958e314afdd54aaa1fefd79abcbf7.jpg",
            name: "Đinh Nguyễn Minh Hoàng",
        },
        {
            img: "https://i.pinimg.com/564x/6d/c7/60/6dc760f3380d860585a84e9a25472fd2.jpg",
            name: "Nguyễn Văn A",
            status: true,
        },
        {
            img: "https://i.pinimg.com/564x/03/c5/09/03c5093f37c5bcf1ce149acf540e2c02.jpg",
            name: "Nguyễn Văn B",
        },
        {
            img: "https://i.pinimg.com/564x/ac/d0/a3/acd0a321a176ff9dd8f81cc0371c1eb3.jpg",
            name: "Nguyễn Văn C",
            status: true,
        },
        {
            img: "https://i.pinimg.com/564x/89/46/08/894608845cbde7d3baa3b0380c295164.jpg",
            name: "Nguyễn Văn D",
        },
        {
            img: "https://i.pinimg.com/564x/cd/84/44/cd8444f95a2fe1933807f09c29e39af4.jpg",
            name: "Nguyễn Văn E",
        },
        {
            img: "https://i.pinimg.com/750x/d9/cb/12/d9cb12b024558545020d9259838058b3.jpg",
            name: "Nguyễn Văn F",
        },
        {
            img: "https://i.pinimg.com/564x/a8/5c/df/a85cdf2114ab0509bb525836ed4fb165.jpg",
            name: "Nguyễn Văn G",
            status: true,
        },
        {
            img: "https://i.pinimg.com/564x/dc/aa/33/dcaa331e32012fc72965deb43c2d62ff.jpg",
            name: "Nguyễn Văn H",
            status: true,
        },
        {
            img: "https://i.pinimg.com/564x/fa/3a/6e/fa3a6ee8bbe1b51e5947d40f4a3913fd.jpg",
            name: "Nguyễn Văn J",
        },
        {
            img: "https://i.pinimg.com/564x/8d/bb/cc/8dbbcc9f2379341637e765f5049e4782.jpg",
            name: "Nguyễn Văn K",
        },
        {
            img: "https://i.pinimg.com/564x/1a/79/58/1a7958e314afdd54aaa1fefd79abcbf7.jpg",
            name: "Đinh Nguyễn Minh Hoàng",
            status: true,
        },
        {
            img: "https://i.pinimg.com/564x/6d/c7/60/6dc760f3380d860585a84e9a25472fd2.jpg",
            name: "Nguyễn Văn A",
            status: true,
        },
        {
            img: "https://i.pinimg.com/564x/03/c5/09/03c5093f37c5bcf1ce149acf540e2c02.jpg",
            name: "Nguyễn Văn B",
        },
        {
            img: "https://i.pinimg.com/564x/ac/d0/a3/acd0a321a176ff9dd8f81cc0371c1eb3.jpg",
            name: "Nguyễn Văn C",
            status: true,
        },
        {
            img: "https://i.pinimg.com/564x/89/46/08/894608845cbde7d3baa3b0380c295164.jpg",
            name: "Nguyễn Văn D",
            status: true,
        },
        {
            img: "https://i.pinimg.com/564x/cd/84/44/cd8444f95a2fe1933807f09c29e39af4.jpg",
            name: "Nguyễn Văn E",
        },
        {
            img: "https://i.pinimg.com/750x/d9/cb/12/d9cb12b024558545020d9259838058b3.jpg",
            name: "Nguyễn Văn F",
        },
        {
            img: "https://i.pinimg.com/564x/a8/5c/df/a85cdf2114ab0509bb525836ed4fb165.jpg",
            name: "Nguyễn Văn G",
            status: true,
        },
        {
            img: "https://i.pinimg.com/564x/dc/aa/33/dcaa331e32012fc72965deb43c2d62ff.jpg",
            name: "Nguyễn Văn H",
            status: true,
        },
        {
            img: "https://i.pinimg.com/564x/fa/3a/6e/fa3a6ee8bbe1b51e5947d40f4a3913fd.jpg",
            name: "Nguyễn Văn J",
            status: true,
        },
        {
            img: "https://i.pinimg.com/564x/8d/bb/cc/8dbbcc9f2379341637e765f5049e4782.jpg",
            name: "Nguyễn Văn K",
            status: true,
        },
    ];
    const listGroupOnline = [
        {
            img: "https://i.pinimg.com/564x/cc/43/78/cc4378201911c4259c110ef3b54f5e68.jpg",
            name: "IT 62",
        },
        {
            img: "https://i.pinimg.com/564x/0d/b8/1b/0db81b6eb4c4df064b83e96436c34c01.jpg",
            name: "Tư tưởng Hồ Chí Minh",
        },
    ];
    return (
        <div className={cx("right-bar__wrapper")}>
            <Header cx={cx} title="Người liên hệ " icon={true} />
            {listFriendOnline?.length > 0 &&
                listFriendOnline.map((friend, index) => (
                    <FriendItem cx={cx} key={index} friend={friend} />
                ))}
            <Header cx={cx} title="Cuộc trò chuyện nhóm" border={true} />
            {listGroupOnline?.length > 0 &&
                listGroupOnline.map((group, index) => (
                    <FriendItem cx={cx} key={index} friend={group} />
                ))}
            <CreateGroup />
        </div>
    );
};

export default RightBar;
