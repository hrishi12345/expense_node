const express = require('express');
const router = express.Router();
const mainController = require('../controller/main');

// Route to render the expense form
router.get('/', mainController.getIndex);

// Route to handle form submission
router.post('/', mainController.postAddProduct);

module.exports = router;
