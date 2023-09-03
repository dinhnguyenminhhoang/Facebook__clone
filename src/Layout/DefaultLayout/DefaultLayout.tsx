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
            <Container fluid style={{ marginTop: "12px" }}>
                <Row>
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={6} style={{ width: "600px", margin: "0 auto" }}>
                        {children}
                    </Col>
                    <Col md={3}>
                        <RightBar />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DefaultLayout;
