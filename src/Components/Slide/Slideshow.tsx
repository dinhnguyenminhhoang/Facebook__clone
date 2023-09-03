// Slideshow.js
import React, { useEffect, useState } from "react";
import SlideshowItem from "./SlideshowItem";
interface SlideshowProps {
    images: {
        src: string;
        alt: string;
    }[];
    cx: Function;
}
const Slideshow: React.FC<SlideshowProps> = ({ images, cx }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) =>
    //             prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //         );
    //     }, 3000);
    //     return () => clearInterval(interval);
    // }, [currentIndex, images.length]);
    useEffect(() => {
        if (currentIndex === images.length - 4) {
            setCurrentIndex(0); // Quay lại ảnh đầu tiên khi đạt đến ảnh cuối cùng
        }
    }, [currentIndex, images.length]);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };
    const handleMouseWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        if (event.deltaY > 0) {
            // Cuộn chuột xuống (sang phải)
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        } else if (event.deltaY < 0) {
            // Cuộn chuột lên (sang trái)
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        }
    };

    const slideshowItems = images.map((image, index) => (
        <SlideshowItem
            cx={cx}
            key={index}
            src={image.src}
            alt={image.alt}
            className={cx("slide", {
                "center-slide":
                    index >= currentIndex && index < currentIndex + 3,
                "side-slide": index < currentIndex || index >= currentIndex + 3,
            })}
        />
    ));

    return (
        <div className={cx("slideshow")} onWheel={handleMouseWheel}>
            {currentIndex !== 0 && (
                <button className={cx("prev")} onClick={prevSlide}>
                    &#10094;
                </button>
            )}
            {slideshowItems}
            {currentIndex !== images.length - 1 && (
                <button className={cx("next")} onClick={nextSlide}>
                    &#10095;
                </button>
            )}
        </div>
    );
};
export default Slideshow;
