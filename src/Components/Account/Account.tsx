import classNames from "classnames/bind";
import styles from "./Account.module.scss";
const cx = classNames.bind(styles);
interface AccountProps {
    // userInfo: {
    //     name: string;
    //     img: string;
    // };
}
const Account: React.FC<AccountProps> = ({}) => {
    return (
        <div className={cx("account__wrapper")}>
            <img
                src="https://scontent.fsgn5-15.fna.fbcdn.net/v/t39.30808-1/269812011_1083046655869537_4870147934702657640_n.jpg?stp=dst-jpg_p240x240&_nc_cat=111&ccb=1-7&_nc_sid=fe8171&_nc_ohc=7T29rM1LRwYAX8qqaN_&_nc_ht=scontent.fsgn5-15.fna&oh=00_AfBEmntL4DlpKLd7fTCfpU-5SZVEgHz2Amdo4aH_2uV6cw&oe=64F55C9E"
                alt=""
                width={36}
                height={36}
                className={cx("account-img")}
            />
            <span className={cx("account-name")}>Đinh Nguyễn Minh Hoàng</span>
        </div>
    );
};

export default Account;
