const express = require('express');
const router = express.Router();
import user from '../controllers/user.js'


router.post('/user', user.saveUser)
router.get('/user', user.getAllUsers);
// router.put('/user/:id', user.updateUser);
// router.get('/user/:id', user.userDetails)
module.exports = router;