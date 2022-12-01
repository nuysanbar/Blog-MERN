import {Link} from "react-router-dom";
const POST=({post})=>{
    return (
        <div className="Post">
        <Link to={"/post/"+post._id} className="singlePost">
            <h4 className="postTitle">{post.title}</h4>
            <p className="postDate">{post.date}</p>
        </Link>
        <p>{post.content.slice(0,200)} <Link to={"/post/"+post._id}> ...readmore</Link></p>
        </div>
    )
}
export default POST;