const NewPost=({newTitle,setNewTitle,newPost,setNewPost,handleSubmit})=>{
    return(
        <div className="newPost">
            <form action="/">
                <label htmlFor="postTitle">Title</label>
                <input
                    autoFocus
                    id="postTitle"
                    type="text"
                    value={newTitle}
                    placeholder="Title"
                    onChange={(e)=>setNewTitle(e.target.value)}
                />
                <label htmlFor="post">post</label>
                <textarea
                    id="post"
                    value={newPost}
                    placeholder="content"
                    onChange={(e)=>setNewPost(e.target.value)}
                />
                <button type="submit" onClick={handleSubmit}>Post</button>
            </form>
        </div>
    )
}
export default NewPost;

