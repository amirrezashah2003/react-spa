import "./Comment.css"
function Comment({id , name ,  email , body , animated}){
    return(
        <div className={`comment ${animated ? "comment-animation" : ""}`}>
            <h4>{name}</h4>
            <h6>{email}</h6>
            <p>{body}</p>
        </div>
    )
}
export default Comment