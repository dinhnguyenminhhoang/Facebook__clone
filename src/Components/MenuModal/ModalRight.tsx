import {
    faCalendarPlus,
    faNewspaper,
    faStar,
    faUserGroup,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Search from "../Search/Search";
import ListItemRight from "./ListItemRight";
interface ModalRightProps {
    cx: Function;
    data: string[];
}
const ModalRight: React.FC<ModalRightProps> = ({ cx, data }) => {
    const dataRight = [
        {
            title: "xã hội",
            description:
                "tổ chức hoặc tìm sự kiện cùng những hoạt động khác trên mạng và ở quanh đây.",
            icon: faCalendarPlus,
        },
        {
            title: "Bạn bè",
            description: "Tìm kiếm bạn bè khoặc những người bạn có thể biết",
            icon: faUsers,
        },
        {
            title: "nhóm",
            description: "Kết nối với những người cùng sở thích.",
            icon: faUserGroup,
        },
        {
            title: "Bảng tin",
            description:
                "Xem bài viết phù hợp của những người và Trang bạn theo dõi.",
            icon: faNewspaper,
        },
        {
            title: "Yêu thích",
            description: "view posts by facories",
            icon: faStar,
        },
    ];
    return (
        <div className={cx("modal-right__wrapper")}>
            <Search place="tìm kiếm trong menu" />
            {data.length > 0 &&
                data.map((item, index) => (
                    <ListItemRight
                        key={index}
                        heading={item}
                        dataRight={dataRight}
                        cx={cx}
                    />
                ))}
        </div>
    );
};

export default ModalRight;
