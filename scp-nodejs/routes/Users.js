var express = require('express');
var router = express.Router();
var cache = require('memory-cache');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(cache.get("Users"));
});

module.exports = router;
