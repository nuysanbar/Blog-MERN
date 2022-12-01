const blog = require('../data/blog');

const createBlog= async (req,res)=>{
    const {title,content}=req.body;
    console.log(title,content)
    if(!title && !content)return res.status(401).json({"message":"title and content should be filled"})
    const duplicate= await blog.findOne({title:title}).exec();
    if(duplicate) return res.status(409).json({"message":"the title already exist"});
    try{
        const result=await blog.create({
            "title":title,
            "content":content
        })
        console.log(result);
        res.status(201).json({"success":"new blog content is added"})
    }catch(err){
        console.log(err)
        res.status(500).json({"error":"server problem"})
    }
}
const getBlogs=async(req,res)=>{
    const blogs=await blog.find();
    if(!blogs) return res.status(204).json({"message":"no groceries found"});
    res.status(201).json(blogs);
};
const getBlog=async(req,res)=>{
    if(!req?.params?.id){
        return res.status(400).json({"message":" blog id is required"})
    }
    const choosenBlog= await blog.findOne({ _id:req.params.id}).exec();
    if(!choosenBlog) return res.status(204).json({"message":"no blog content found"});
    res.status(201).json(choosenBlog);
};
const UpdateBlog=async (req,res)=>{
    const {title,content}=req.body;
    console.log(req.params.id)
    if(!req?.params?.id){
        return res.status(400).json({"message":" blog content id is required"})
    }
    try{
     await blog.updateOne( { _id:req.params.id },{$set: { title:title,content:content}})
     res.status(201).json({"message":"blog content is successfully updated"})
    }catch(err){
        console.error(err)
        res.status(500).json({"error":"server problem"})
    }
};
const deleteBlog=async (req,res)=>{
    if(!req?.params?.id){
        return res.status(400).json({"message":" blog content id is required"})
    }
    const toBeDeletedBlog= await blog.findOne({ _id:req.params.id}).exec();
    console.log(toBeDeletedBlog);
    if(!blog){
        return res.status(204).json({"message":"No blog content matches the the id "+req.params.id})
    }
    const result= await blog.deleteOne({_id:req.params.id});
    res.status(201).json({"messaage":"blog content has successfully deleted"});
}
module.exports={createBlog,getBlog,getBlogs,UpdateBlog,deleteBlog};
