import React from "react";

interface SlideshowItemProps {
    src: string;
    alt: string;
    cx: Function;
    active?: boolean | true;
}

const SlideshowItem: React.FC<SlideshowItemProps> = ({
    src,
    alt,
    cx,
    active,
}) => {
    return (
        <div className={cx("slideshow-item", { active })}>
            <img src={src} alt={alt} className={cx("item__img")} />
            <div className={cx("po-top")}>
                <img src={src} alt={alt} className={cx("po__img")} />
            </div>
            <div className={cx("name")}>
                <span>Đinh Nguyễn Minh Hoàng</span>
            </div>
        </div>
    );
};

export default SlideshowItem;
