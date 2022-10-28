const express = require('express');
const router = express.Router();

const { createUser, getAllusers, getOneUser, updateOne } = require('../controllers/user');

// User route
router.post('/user', createUser);
router.get('/user', getAllusers);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateOne);

module.exports = router;