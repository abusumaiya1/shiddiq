const express = require('express');
const router = express.Router();

const { createUser, getAllusers, getOneUser, updateOne, deleteOne } = require('../controllers/user');
//sales route
const { createSale,  } = require('../controllers/sale');

// User route
router.post('/user', createUser);
router.get('/user', getAllusers);
router.get('/user/:id', getOneUser);
router.put('/user/:id', updateOne);
router.delete('/user/:id', deleteOne);



router.post('/sale', createSale);
//router.get('/sales', getAllusers);
//router.get('/user/:id', getOneUser);
//router.put('/user/:id', updateOne);


module.exports = router;