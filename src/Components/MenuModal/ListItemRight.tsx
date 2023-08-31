import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface ListItemRightProps {
    cx: Function;
    heading: string;
    dataRight: {
        icon: IconDefinition;
        title: string;
        description: string;
    }[];
}
const ListItemRight: React.FC<ListItemRightProps> = ({
    cx,
    heading,
    dataRight,
}) => {
    return (
        <div className={cx("list-item__right")}>
            <h1 className={cx("heading")}>{heading}</h1>
            {dataRight &&
                dataRight.map((data, index) => (
                    <div className={cx("item__wrapper")} key={index}>
                        <FontAwesomeIcon
                            icon={data.icon}
                            className={cx("icon")}
                        />
                        <div className={cx("item__Content")}>
                            <span className={cx("title")}>{data.title}</span>
                            <span className={cx("description")}>
                                {data.description}
                            </span>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default ListItemRight;
