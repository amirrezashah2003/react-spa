import { useParams } from "react-router-dom"
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Spinner from "react-bootstrap/Spinner"
import "./Courses.css"
import { useCourse } from "../../hooks/queries/useCourseQuery.js"


function Courses(){
    const { courseId } = useParams()
    const {data:course , isLoading , isError} = useCourse(courseId)

    if (isLoading) {
        return (
            <>
                <Header />
                <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
                    <Spinner animation="border" variant="primary" />
                    <span className="ms-2">در حال بارگذاری...</span>
                </div>
                <Footer />
            </>
        )
    }
    if (isError || !course) {
        return (
            <>
                <Header />
                <div className="text-center my-5 text-danger">
                    <h2>خطا در دریافت اطلاعات دوره!</h2>
                    <p>لطفاً دوباره تلاش کنید یا بعداً مراجعه کنید.</p>
                </div>
                <Footer />
            </>
        )
    }

    return(
        <>
        <Header />
        <section>
            <Container>
                <Row className="align-items-center">
                    <Col md={4} lg={5}>
                        <div className="content">
                            <img className="img-fluid" src={course.image} alt="" />
                        </div>
                    </Col>
                    <Col md={8} lg={7}>
                        <div className="content">
                            <h2>{course.title}</h2>
                            <h3>نام مدرس : {course.teacher}</h3>
                            <p>{course.description}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Footer />        
        </>
    )
}
export default Courses