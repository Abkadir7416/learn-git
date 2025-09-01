import express from 'express';
const router = express.Router();
import {saveBlog, getAllBlogs, updateBlog, blogDetails, deleteBlog} from '../controllers/blog.js'


router.post('/blog', saveBlog)
router.get('/blogs', getAllBlogs);
router.put('/blog/:id', updateBlog);
router.get('/blog/:id', blogDetails)
router.delete('/blog/:id', deleteBlog)
export default router;