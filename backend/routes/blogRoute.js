const express =require("express");
const { getAllBlogs,createBlog, deleteBlog, getBlogDetails } = require("../controllers/blogController");
const router= express.Router();


router.route("/blogs").get(getAllBlogs);  //route to get all blogs
router.route("/blog/new").post(createBlog); //route to create a blog
router.route("/blog/:id").delete(deleteBlog); //route to delete a blog
router.route("/blog/:id").get(getBlogDetails); //route to get all the blogs



module.exports = router;