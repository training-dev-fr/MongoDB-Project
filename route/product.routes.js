const express = require('express');
const router = express.Router();

const productCtrl = require('../controller/product.controller');

router.get('/', productCtrl.getAll)
router.get('/:id', productCtrl.getOne)
router.post('/', productCtrl.create)
router.put('/:id', productCtrl.update)
router.delete('/:id', productCtrl.delete)

module.exports = router;