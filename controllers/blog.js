import { saveBlogService, getAllBlogsService, blogDetailsService } from "../services/blog.js";

export const saveBlog = async (req, res) => {
    try {
        const blogData = req.body;
        const savedBlog = await saveBlogService(blogData);
        res.status(201).json({
            success: true,
            data: savedBlog
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const getAllBlogs = async (req, res) => {
    try {
        const getAllBlogs = await getAllBlogsService();
        res.status(201).json({
            success: true,
            data: getAllBlogs
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const updateBlog = async (req, res) => {

}

export const blogDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const getBlogDetails = await blogDetailsService(id);
        res.status(201).json({
            success: true,
            data: getBlogDetails
        });
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const deleteBlog = async (req, res) => {

}