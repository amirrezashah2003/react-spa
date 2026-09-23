import "./Comments.css"
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Loading from "../../Loading/Loading"
import Comment from "../../Comment/Comment"
import * as ReactPaginateModule from "react-paginate"
const ReactPaginate = ReactPaginateModule.default.default
import { FaArrowLeftLong , FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react"
import { useComments } from "../../hooks/queries/useImageQuery"
import CommentSkeleton from "../../Skeleton/CommentSkeleton/CommentSkeleton"


function Comments(){
    const [page ,setPage] = useState(1)
    const { data , total } = useComments(page)
    const { data: comments, isLoading, isError, error , isFetching } = useComments(page);
    // فرض بر این است که API شما یک آبجکت شامل { data, total } برمی‌گرداند
    const totalPages = comments ? Math.ceil(comments.total / 12) : 0;
    const changePageHandler = (e) => {
        setPage(e.selected + 1)
    }
    const shoudAnimated = isLoading || isFetching

    return(
        <>
        <Header />
        <section className="comments">
            <Container>
                <Row className="gy-3">
                    {isLoading && (
                        Array.from({ length: 12 }).map( (_,index) => (
                            <Col key={index} sm={6} md={6} lg={4} xl={3}>
                                <CommentSkeleton />
                            </Col>
                        ))
                    ) }
                    {isError && <h2>{error.message}</h2>}
                    {!isLoading && !isError && 
                        comments.data?.map(comment => (
                            <Col key={comment.id} sm={6} md={6} lg={4} xl={3}>
                                <Comment {...comment} animated={shoudAnimated} />
                            </Col>
                        )
                    )}
                </Row>
                
            </Container>
                    
            <Container>
                {
                    totalPages > 0 && (
                        <ReactPaginate
                            pageCount={totalPages}
                            onPageChange={changePageHandler}
                            breakLabel="..."
                            nextLabel= {<FaArrowRightLong size={26} />} 
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2} 
                            previousLabel= {<FaArrowLeftLong size={26} />}
                            className="pagination"
                            activeLinkClassName="active-link"
                            forcePage={page - 1} // صفحه جاری (چون این کتابخانه از 0 شروع می‌کند)
        
                        />
                    )
                }
            </Container>
        </section>
        <Footer />
        </>
    )
}
export default Comments
