import Skeleton from "react-loading-skeleton"
import Card from "react-bootstrap/Card"
import "./ArticleCardSkeleton.css"
function ArticleCardSkeleton(){
    return(
    <Card className='blog-card-skeleton h-100'>
        
            <Skeleton style={{ aspectRatio: "402 / 258", width: "100%", display: "block" }} />


        <Card.Body>
            <Card.Title>
                <Skeleton width={"200px"} />
            </Card.Title>
            <Card.Text>
                <Skeleton count={3} />
            </Card.Text>

            <Skeleton width={"80px"} height={"25px"} />
            
            
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between p-3">
            <Skeleton width={"130px"} />
            <Skeleton width={"50px"} />
        </Card.Footer>
    </Card>
    )
}
export default ArticleCardSkeleton