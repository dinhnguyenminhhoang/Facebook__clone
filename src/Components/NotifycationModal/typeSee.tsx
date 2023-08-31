interface TypeSeeProps {
    cx: Function;
}
const TypeSee: React.FC<TypeSeeProps> = ({ cx }) => {
    return (
        <div className={cx("type-see__wrapper")}>
            <span className={cx("type__before")}>Trước đó</span>
            <button className={cx("type__all")}>Xem tất cả</button>
        </div>
    );
};

export default TypeSee;
