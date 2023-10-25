const controller = require('../controllers/users');
const router = require('express').Router();

//CRUD Routes /users 
router.get('/', conroller.getUsers); // /users
router.get('/userId', controller.getUser); // /users/:userId
router.post('/', controlller.createUser); // /users
router.put('/:userId', controller.updateUser); // /users/:userId
router.put('/:userId', controller.deleteUserUser); // /users/:userId
