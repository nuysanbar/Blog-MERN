import {Link} from "react-router-dom";
const POST=({post})=>{
    return (
        <div className="Post">
        <Link to={"/post/"+post.id} className="singlePost">
            <p className="postTitle">{post.title}</p>
            <p className="postDate">{post.date}</p>
        </Link>
        <p>{post.post}</p>
        </div>
    )
}
export default POST;