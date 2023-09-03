import Slideshow from "./Slideshow";
import classNames from "classnames/bind";
import styles from "./Slide.module.scss";
const cx = classNames.bind(styles);
const Slide = () => {
    const images = [
        {
            src: "https://i.pinimg.com/564x/9f/ad/67/9fad6784dd89c862191f4657cb697902.jpg",
            alt: "Image 1",
        },
        {
            src: "https://i.pinimg.com/736x/93/ff/b9/93ffb99227b097342218861f2c31444b.jpg",
            alt: "Image 2",
        },
        {
            src: "https://i.pinimg.com/736x/7f/38/8b/7f388bf33457e8f7932d630ab15f1eff.jpg",
            alt: "Image 3",
        },
        {
            src: "https://i.pinimg.com/564x/90/f1/b6/90f1b61a883556147890ba4221f96824.jpg",
            alt: "Image 4",
        },
        {
            src: "https://i.pinimg.com/736x/3b/ae/27/3bae275c5b380745153d9db1ab83c054.jpg",
            alt: "Image 5",
        },
        {
            src: "https://i.pinimg.com/564x/5a/14/cd/5a14cd227167c4137cfd6450d568034f.jpg",
            alt: "Image 6",
        },
        {
            src: "https://i.pinimg.com/564x/b2/d7/83/b2d78396f762df1f62cc13924223c138.jpg",
            alt: "Image 7",
        },
        {
            src: "https://i.pinimg.com/750x/4a/43/7b/4a437b355fd23c74f6394a541dd869e3.jpg",
            alt: "Image 7",
        },
        {
            src: "https://i.pinimg.com/564x/67/4c/c8/674cc8a757a7aa5c587c9565a452b9e4.jpg",
            alt: "Image 7",
        },
        {
            src: "https://i.pinimg.com/736x/40/bb/fe/40bbfe6db4b18e1b28d270e759f43544.jpg",
            alt: "Image 7",
        },
        {
            src: "https://i.pinimg.com/736x/78/75/8b/78758b3fb86ec30a2bddd0b23e2f3e84.jpg",
            alt: "Image 7",
        },
        {
            src: "https://i.pinimg.com/564x/3e/37/b1/3e37b1c21d82acbb4868777e53fe2510.jpg",
            alt: "Image 7",
        },
        {
            src: "https://i.pinimg.com/736x/52/2d/f0/522df02fb9cf1ccb7c4f62e930238e3b.jpg",
            alt: "Image 7",
        },
        {
            src: "https://i.pinimg.com/564x/2d/a8/59/2da859a7573e47ad297f273b44b951ee.jpg",
            alt: "Image 7",
        },
        {
            src: "https://i.pinimg.com/564x/1e/64/ad/1e64adbff18e8aa3e6e5a839178a9868.jpg",
            alt: "Image 7",
        },
        {
            src: "https://i.pinimg.com/564x/2d/90/31/2d9031339c5a7332b7aa1c91084f3d7d.jpg",
            alt: "Image 7",
        },
        {
            src: "https://i.pinimg.com/736x/76/d3/ea/76d3ea7a0e2402fa63333b7ef09132d0.jpg",
            alt: "Image 7",
        },
    ];

    return (
        <div style={{ width: "100%" }}>
            <Slideshow images={images} cx={cx} />
        </div>
    );
};

export default Slide;
