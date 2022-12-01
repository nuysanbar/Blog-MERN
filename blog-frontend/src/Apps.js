import { useEffect, useState } from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import './index.css';
import Nav from "./Nav";
import Home from './Home';
import About  from "./About";
import NewPost from "./NewPost";
import Missing from "./Missing";
import PostPage from "./PostPage";
import axios from 'axios';
const Apps =()=>{
    // important variable to store form data
    const [search,setSearch]=useState('')
    const [posts,setPosts]=useState([]);
    const [newTitle,setNewTitle]=useState('');
    const [newPost,setNewPost]=useState('');
    // for defining our api with axios
    const api=axios.create({
      baseURL:`http://localhost:3500/reactBlog`
    })
    // to get all contents in the api
    async function fetchData(){
      const res=await api.get('/');
      return setPosts(res.data.reverse())
    }
    fetchData();
    // to create a content
    const handleSubmit=async(e)=>{
        e.preventDefault();
        var result= await api.post('/',{title:newTitle,content:newPost});
        console.log(result);
        fetchData();
        setNewTitle('');  
        setNewPost('');
    }
    // to delete a content
    const handleDelete=async (id)=>{
        const result= await api.delete(`/post/${id}`);
        console.log(result);
    }
    return (
        <main className="main">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav search={search} setSearch={setSearch}/>}>
            <Route index element={<Home posts={posts.filter((post)=>post.title.toLowerCase().includes(search))}/>} />
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
      </main>
    )
}
export default Apps;