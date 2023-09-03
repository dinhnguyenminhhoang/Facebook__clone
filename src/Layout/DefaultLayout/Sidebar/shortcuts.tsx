interface ShortcutsProps {
    cx: Function;
    data: {
        img: string;
        title: string;
    };
}
const Shortcuts: React.FC<ShortcutsProps> = ({ cx, data }) => {
    return (
        <div className={cx("shortcut-item__wrapper")}>
            <div>
                <img
                    src={data.img}
                    alt=""
                    className={cx("shortcut__img")}
                    width={36}
                    height={36}
                />
            </div>
            <span className={cx("shortcuts__name")}>{data.title}</span>
        </div>
    );
};

export default Shortcuts;
