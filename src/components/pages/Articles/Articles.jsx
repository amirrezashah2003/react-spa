import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./Articles.css"
import BlogCard from "./BlogCard/BlogCard"
import { useArticles } from "../../hooks/queries/useArticleQueries.js"
import ArticleCardSkeleton from "../../Skeleton/ArticleCardSkeleton/ArticleCardSkeleton.jsx"
function Articles(){
    const {data: articles , isLoading , isError , isFetching} = useArticles()
    const ShoudAnimated = isLoading || isFetching

    return (
        <>
        <Header />
        <section>
            <h1 className="text-center">صفحه مقالات</h1>
            <Container className="mt-4">
                <Row className="gy-4">
                    {
                        isLoading ? (
                            Array.from({ length: 8 }).map( (_,index) => (
                                <Col key={index} md={6} lg={4} xl={3}>
                                    <ArticleCardSkeleton />
                                </Col>
                            ))
                        ) : isError ? (
                            Array.from({ length: 8 }).map((_, index) => (
                                <Col key={index} md={6} lg={4} xl={3}>
                                    <div className="content">
                                        <h4 className="text-center text-danger">خطا در دریافت اطلاعات</h4>
                                    </div>
                                </Col>
                            ))
                        ) : (
                            articles.map(article => (
                                <Col key={article.id} md={6} lg={4} xl={3}>
                                    <BlogCard {...article} animated={ShoudAnimated} />
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