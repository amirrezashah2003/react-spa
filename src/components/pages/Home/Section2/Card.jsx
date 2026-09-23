import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./Card.css"

function CourseCard({id , image , title , info , animated}) {
  return (
    <Card className={`course-card-container ${animated ? "course-animation" : ""}`}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {info}
        </Card.Text>
        <Button variant="primary">
          <Link to={`/courses/${id}`}>خرید دوره</Link>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;