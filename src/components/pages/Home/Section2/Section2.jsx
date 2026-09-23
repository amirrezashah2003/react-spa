import "./Section2.css"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import CourseCard from "./Card.jsx"
import { useCourses } from "../../../hooks/queries/useCourseQuery.js"
import CourseCardSkeleton from "../../../Skeleton/CourseCardSkeleton/CourseCardSkeleton.jsx"

function Section2(){
    const {data: courses , isLoading , isError , isFetching} = useCourses()
    const shoudAnimated = isLoading || isFetching
    return (
        <section className="section2">
            <Container  className="custom-fluid-lg">
                <h2>دوره های آموزشی</h2>
                <Row className="gy-4">
                    {
                        isLoading ? (
                            [1,2,3,4].map( n => (
                                <Col key={n} xs={12} md={6} lg={3}>
                                    <CourseCardSkeleton />
                                </Col>
                            ))
                        ) :
                        isError ? (
                            <div className="text-center w-100 p-5">
                                <p className="text-danger">خطا در دریافت اطلاعات. لطفا دوباره تلاش کنید.</p>
                            </div>
                        
                        ) : (
                            courses.map(course => (
                                <Col key={course.id} xs={12} md={6} lg={3}>
                                    <CourseCard {...course} animated={shoudAnimated} />
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