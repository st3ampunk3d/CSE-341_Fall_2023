const express = require('express');
const router = express.Router();

const ownerController = require('../controllers/owners')
const { isAuth } = require('../middleware/authenticate')

router.get('/', ownerController.getAll);
router.get('/:id', ownerController.getSingle);

router.post('/', isAuth, ownerController.createOwner);
router.put('/:id', isAuth, ownerController.updateOwner);

router.delete('/:id', isAuth, ownerController.deleteOwner);

module.exports = router;