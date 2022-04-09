const Blog = require("../Schema/blogSchema");

//Creating a Blog
exports.createBlog = async(req,res,next)=>{

    const blog = await Blog.create(req.body);
    res.status(201).json({
        success:true,
        blog
    })
}

//Get All Blogs
exports.getAllBlogs = async(req,res) => {

    const blogs = await Blog.find();

    res.status(200).json({
        success:"true",
        blogs
    })
}

//Delete A Blog
exports.deleteBlog = async(req,res,next) =>{

    const blog = await Blog.findById(req.params.id);

    if(!blog)
    {
        return res.status(500).json({
            success:"false",
            message:"Blog not Found"
        })
    }

    await blog.remove();
    res.status(200).json({
        success:"true",
        message:"Blog deleted Successfully"
    })

}

//Get Blog Details
exports.getBlogDetails =async(req,res,next) =>{

    const blog = await Blog.findById(req.params.id);

    if(!blog)
    {
        return res.status(500).json({
            success:"false",
            message:"Blog not Found"
        })
    }

    res.status(200).json({
        success:"true",
        blog
    })

}