import { useState } from "react";
interface StatusProps {
    cx: Function;
}
const Status: React.FC<StatusProps> = ({ cx }) => {
    const [IsFull, setIsFull] = useState(true);
    const handleActive = () => {
        setIsFull(!IsFull);
    };
    return (
        <div className={cx("status__wrapper")}>
            <button
                onClick={handleActive}
                className={cx("status__btn", {
                    active: IsFull,
                })}
            >
                tất cả
            </button>
            <button
                onClick={handleActive}
                className={cx("status__btn", {
                    active: !IsFull,
                })}
            >
                chưa đọc
            </button>
        </div>
    );
};

export default Status;
