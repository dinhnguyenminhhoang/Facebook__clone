import { faViadeo } from "@fortawesome/free-brands-svg-icons";
import {
    faBook,
    faBullhorn,
    faCalendar,
    faFlag,
    faNewspaper,
    faStore,
    faStream,
    faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import ListItemLeft from "./ListItemLeft";

interface ModalLeftProps {
    cx: Function;
}
const ModalLeft: React.FC<ModalLeftProps> = ({ cx }) => {
    const dataLeft = [
        {
            icon: faBook,
            title: "Đăng",
        },
        {
            icon: faNewspaper,
            title: "Tin",
        },
        {
            icon: faViadeo,
            title: "Thước phim",
        },
        {
            icon: faStream,
            title: "Phòng họp mặt",
        },
        {
            icon: faFlag,
            title: "Trang",
        },
        {
            icon: faBullhorn,
            title: "Quảng cáo",
        },
        {
            icon: faUserGroup,
            title: "Nhóm",
        },
        {
            icon: faCalendar,
            title: "Sự kiện",
        },
        {
            icon: faStore,
            title: "bài niêm yết trên marketing",
        },
    ];
    return (
        <div className={cx("modal-left__wrapper")}>
            <h1 className={cx("header__create")}>Tạo</h1>
            {dataLeft?.length > 0 &&
                dataLeft.map((data, index) => (
                    <ListItemLeft cx={cx} dataLeft={data} key={index} />
                ))}
        </div>
    );
};

export default ModalLeft;
