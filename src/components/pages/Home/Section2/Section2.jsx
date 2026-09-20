import "./Section2.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CourseCard from "./Card.jsx"
import { useCourses } from "../../../hooks/queries/useCourseQuery.js"

function Section2(){
    const {data: courses , isLoading , isError} = useCourses()
    return (
        <section className="section2">
            <Container  className="custom-fluid-lg">
                <h2>دوره های آموزشی</h2>
                <Row className="gy-4">
                    {
                        isLoading ? (<h2 className="text-center">در حال بارگیری...</h2>) : isError ? (
                            Array.from({ length: 4 }).map((_, index) => (
                                <Col key={index} xs={12} md={6} lg={3}>
                                    <div className="content">
                                        <h4 className="text-center text-danger">خطا در دریافت اطلاعات</h4>
                                    </div>
                                </Col>
                            ))
                        ) : (
                            courses.map(course => (
                                <Col key={course.id} xs={12} md={6} lg={3}>
                                    <CourseCard {...course} />
                                </Col>
                            ))
                        )
                    }
                </Row>
            </Container>
        </section>
    )
}

export default Section2