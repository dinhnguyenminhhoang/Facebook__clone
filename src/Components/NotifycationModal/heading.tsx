import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadingActionModal from "./headingActionModal";
import { useClickAway } from "@uidotdev/usehooks";
interface HeadingProps {
    cx: Function;
    visible: boolean;
    show: () => void;
    hide: () => void;
}
const Heading: React.FC<HeadingProps> = ({ cx, visible, show, hide }) => {
    const ref = useClickAway<HTMLButtonElement>(() => {
        hide();
    });

    return (
        <div className={cx("heading")}>
            <h1 className={cx("heading__title")}>Thông báo</h1>
            <button
                className={cx("heading__action")}
                ref={ref}
                onClick={visible ? hide : show}
            >
                <FontAwesomeIcon icon={faEllipsis} />
                {visible && <HeadingActionModal cx={cx} />}
            </button>
        </div>
    );
};

export default Heading;
