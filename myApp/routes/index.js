const express = require('express');
const router = express.Router();
const indexController = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexController.index);

router.get('/detalle/:id', indexController.detalle);

module.exports = router;
