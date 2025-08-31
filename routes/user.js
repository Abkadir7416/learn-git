import express from 'express';
const router = express.Router();
import {saveUser, getAllUsers} from '../controllers/user.js'


router.post('/user', saveUser)
router.get('/users', getAllUsers);
// router.put('/user/:id', user.updateUser);
// router.get('/user/:id', user.userDetails)
export default router;