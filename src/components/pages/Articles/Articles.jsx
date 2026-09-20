import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./Articles.css"
import BlogCard from "./BlogCard/BlogCard"
import { useArticles } from "../../hooks/queries/useArticleQueries.js"
function Articles(){
    const {data: articles , isLoading , isError} = useArticles()

    return (
        <>
        <Header />
        <section>
            <h1 className="text-center">صفحه مقالات</h1>
            <Container>
                <Row className="gy-4">
                    {
                        isLoading ? (<h2 className="text-center">در حال بارگیری...</h2>) : isError ? (
                            Array.from({ length: 8 }).map((_, index) => (
                                <Col key={index} xs={12} md={6} lg={4} xl={3}>
                                    <div className="content">
                                        <h4 className="text-center text-danger">خطا در دریافت اطلاعات</h4>
                                    </div>
                                </Col>
                            ))
                        ) : (
                            articles.map(article => (
                                <Col key={article.id} md={6} lg={4} xl={3}>
                                    <BlogCard {...article} />
                                </Col>
                            ))
                        )
                    }
                </Row>
            </Container>
            
        </section>
        <Footer />

        </>
    )
}
export default Articles