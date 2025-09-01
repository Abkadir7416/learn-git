import blog from "../models/blog.js"
export const saveBlogService = async (data) => {
    try {
        const blogCreated = await blog.create(data);
        return blogCreated;
    } catch (error) {
        console.log(error)
        return error;
    }
}
