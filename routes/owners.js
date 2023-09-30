const express = require('express');
const router = express.Router();

const ownerController = require('../controllers/owners')

router.get('/', ownerController.getAll);
router.get('/:id', ownerController.getSingle);

router.post('/', ownerController.createOwner);
router.put('/:id', ownerController.updateOwner);

router.delete('/:id', ownerController.deleteOwner);

module.exports = router;