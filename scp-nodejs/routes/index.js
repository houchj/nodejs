var express = require('express');
var router = express.Router();
var cache = require('memory-cache');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'PBS Test' });

    console.log("clearing store by index request...");
    cache.clear();


	$('#syncbutton').click(function(){
	    console.log('sync clicked');
	});

});

module.exports = router;
