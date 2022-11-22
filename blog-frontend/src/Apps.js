import { useState } from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './index.css';
import Nav from "./Nav";
import Home from './Home';
import About  from "./About";
import Header from "./Header";
import Footer from "./Footer";
import NewPost from "./NewPost";
import Missing from "./Missing";
import PostPage from "./PostPage";
const Apps =()=>{
    const [search,setSearch]=useState('')
    const [posts,setPosts]=useState([]);
    const [newTitle,setNewTitle]=useState('');
    const [newPost,setNewPost]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        var id=posts.length;
        const createPost={id:id,title:newTitle,post:newPost,date:"35/45/54"}
        const newPosts=[...posts,createPost]
        setPosts(newPosts);
        setNewTitle('');
        setNewPost('');
    }
    const handleDelete=()=>{
        return 
    }
    return (
        <main className="main">
        <Header />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav search={search} setSearch={setSearch}/>}>
            <Route index element={<Home posts={posts}/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/post" 
                    element={<NewPost 
                                newTitle={newTitle} 
                                setNewTitle={setNewTitle} 
                                newPost={newPost} 
                                setNewPost={setNewPost} 
                                handleSubmit={handleSubmit}
                            />}
            />
            <Route path="*" element={<Missing />} />
            <Route path="/post/:id" element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
      </main>
    )
}
export default Apps;