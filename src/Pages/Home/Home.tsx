import classNames from "classnames/bind";
import Styles from "./Home.module.scss";
const cx = classNames.bind(Styles);
function Home() {
    return <div className={cx("home-wrapper")}>Home page</div>;
}

export default Home;
