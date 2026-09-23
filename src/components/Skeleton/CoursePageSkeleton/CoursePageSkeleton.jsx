import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Skeleton from "react-loading-skeleton";

function CoursePageSkeleton(){
    return (
        <>
        <Header />
        <section>
            <Container>
                <Row className="align-items-center">
                    <Col md={4} lg={5}>
                        <div className="content">
                            <Skeleton style={{aspectRatio: "500 / 286"}} className="mb-3"/>
                        </div>
                    </Col>
                    <Col md={8} lg={7}>
                        <div className="content">
                            <Skeleton width={"200px"} height={"40px"} />
                            <Skeleton width={"250px"} height={"30px"} />
                            <Skeleton count={6} />
                            <Skeleton count={1} width={"35%"} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Footer />
        </>
    )
}
export default CoursePageSkeleton