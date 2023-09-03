import classNames from "classnames/bind";
import Styles from "./Home.module.scss";
import News from "../../Components/News/News";
const cx = classNames.bind(Styles);
function Home() {
    return (
        <div className={cx("home-wrapper")}>
            <News />
        </div>
    );
}

export default Home;
