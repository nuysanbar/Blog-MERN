import {useParams,Link} from 'react-router-dom';
const PostPage=({posts,handleDelete})=>{
    const {id} = useParams()
    const currentPostSelected=posts.find((post)=>(post._id).toString() === id)
    return(
        <div className='postPage'>
        {currentPostSelected &&(
        <div>
            <div>
                <h3>{currentPostSelected.title}</h3>
                <p>{currentPostSelected.content}</p>
                <button onClick={()=>handleDelete(currentPostSelected._id)} className="deleteBtn">Delete</button>
            </div>
        </div>)}
        {!currentPostSelected&&(
            <div>
            <p>post been deleted</p>
            <Link to="/" >visit home page</Link>
            </div>)}
        </div>
        )
}
export default PostPage;
