var express = require('express');
var router = express.Router();
const db = require("./connection/connect")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
