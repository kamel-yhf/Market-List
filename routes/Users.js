const express = require('express');
const userController = require('../controllers/Users');

const router = express.Router();

router.post('/', userController.createUsers);
router.post('/login', userController.login);
router.get('/', userController.getUsers);
router.put('/:id', userController.updateUser);
router.get('/:id', userController.getUserById);
router.delete('/:id', userController.deleteUser);
router.put('/lists_update/:id', userController.addListToUser);
router.put('/list_delete/:id', userController.deleteListInUser);

module.exports = router;