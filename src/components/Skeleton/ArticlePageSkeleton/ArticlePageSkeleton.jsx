import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Skeleton from "react-loading-skeleton"
import "./ArticlePageSkeleton.css"
function ArticlePageSkeleton(){
    return(
        <section className="article">
            <Container>
                <Row className="gy-3"> 
                    <Col lg={4}>
                        <div className="article-skeleton">
                            <Skeleton className="img" style={{aspectRatio: "340 / 219"}} />
                            <div className="title">
                                <Skeleton  height={35} width={250}/>
                            </div>
                            <Skeleton className="para" width={240} height={20} />
                            <Skeleton className="para" width={240} height={20} />
                            <Skeleton className="para" width={240} height={20} />
                            <div className="d-flex flex-wrap gap-2 button">
                                <Skeleton width={93} height={35} />
                                <Skeleton width={93} height={35} />
                            </div>
                        </div> 
                    </Col>
                    <Col lg={8}>
                        <Skeleton count={40} />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default ArticlePageSkeleton