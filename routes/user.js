const express = require('express');
const router = express.Router();


router.post('/user', user.saveUser)
router.put('/user/:id', user.updateUser);
router.get('/user', user.AllUsers);
router.get('/user/:id', user.userDetails)
module.exports = router;