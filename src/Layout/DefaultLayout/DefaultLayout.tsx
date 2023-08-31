import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames/bind";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import { ReactNode } from "react";
import RightBar from "./RightBar/RightBar";
import styles from "./DefaultLayout.module.scss";
const cx = classNames.bind(styles);
interface DefaultLayoutProps {
    children: ReactNode;
}
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <div className={cx("container")}>
            <Header />
            <Container fluid>
                <Row>
                    <Col md={2}>
                        <Sidebar />
                    </Col>
                    <Col md={8}>{children}</Col>
                    <Col md={2}>
                        <RightBar />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DefaultLayout;
