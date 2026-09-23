import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaArrowLeft , FaRegClock } from "react-icons/fa";
import "./BlogCard.css"
function BlogCard({id , image , title , info , writer , time , animated}){
    return(
    <Card className={`blog-card ${animated ? "blog-animation" : ""} h-100`}>
        <Card.Img variant="top" src={image} alt="course" />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{info}</Card.Text>
            <button>
                <Link to={`${id}`}>ادامه مقاله</Link>
                <FaArrowLeft />
            </button>
            
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between p-3">
            <div className="writer">
                <span>نویسنده :</span>
                <span>{writer}</span>
            </div>
            <div className="time d-flex align-items-center gap-1">
                <FaRegClock />
                <span>{time}دقیقه </span>
            </div>
        </Card.Footer>
    </Card>
    )
}
export default BlogCard