import express from 'express';
const router = express.Router();
import {saveUser, getAllUsers, userDetails, updateUser, deleteUser} from '../controllers/user.js'


router.post('/user', saveUser)
router.get('/users', getAllUsers);
router.put('/user/:id', updateUser);
router.get('/user/:id', userDetails)
router.delete('/user/:id', deleteUser)
export default router;