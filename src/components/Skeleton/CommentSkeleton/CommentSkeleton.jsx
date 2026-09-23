import Skeleton from "react-loading-skeleton"
import "./CommentSkeleton.css"
function CommentSkeleton(){
    return(
        <div className="comment-skeleton">
            <Skeleton width={"200px"} height={"30px"}/>
            <Skeleton width={"180px"} height={"20px"} />
            <div className="p-skel" style={{ width: "100%" }}>
                <Skeleton  count={4} width={"90%"} height={"15px"} />
                <Skeleton count={1} width={"50px"} height={"15px"}/>
            </div>
        </div>
    )
}
export default CommentSkeleton