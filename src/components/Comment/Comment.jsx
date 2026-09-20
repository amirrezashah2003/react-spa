import "./Comment.css"
function Comment({id , name ,  email , body}){
    return(
        <div className="comment">
            <h4>{name}</h4>
            <h6>{email}</h6>
            <p>{body}</p>
        </div>
    )
}
export default Comment