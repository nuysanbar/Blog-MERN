const express=require('express');
const router=express.Router();
const blogController = require('../../controllers/blogController')
router.route('/')
    .post(blogController.createBlog)
    .get(blogController.getBlogs)
router.route('/post/:id')
    .patch(blogController.UpdateBlog)
    .delete(blogController.deleteBlog)
    .get(blogController.getBlog)
module.exports=router;