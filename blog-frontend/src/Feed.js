import POST from "./Post";
const Feed=({posts})=>{
        return (
            <article className="Feed">
                {posts.map((post)=>(
                    <POST post={post} key={post._id} />
                ))}
            </article>
        )
}
export default Feed;

