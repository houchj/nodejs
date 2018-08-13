var express = require('express');
var router = express.Router();
var o = require("odata");
var cache = require('memory-cache');


/* GET users listing. */
router.get('/', function(req, res, next) {
  
	var api = req.query.api;
	var username = req.query.username;
	var password = req.query.password;
	var filter = req.query.filter;
	console.log("api is: " + api);
	console.log("username is: " + username);
	console.log("password is: " + password);
	console.log("filter is: " + filter);


	// var globalTunnel = require('global-tunnel');

	// globalTunnel.initialize({
	//   host: 'http://proxy',
	//   port: 8080
	// });


	console.log("start to read data from bizx");

	const odata = require('odata-client');
		var q = odata({	service: "https://services.odata.org/V3/OData/OData.svc/", 
						resources: 'Persons',
						headers : {
							"Authorization": "Basic YWRtaW5ARUNHRVBQMzpkZW1vMTAx",
							"format": "json"
						},
						format : "json"
						});
		q.top(1).get().then(function(response) {
		console.log(response.body);
        cache.clear();
        cache.put('Users', response.body);
		res.send(response.body);
	});


	// o().config({
	//     endpoint: api,   // The default endpoint to use.
	//     format: 'json', 	// The media format. Default is JSON.
	//     version: 4, 		// currently only tested for Version 4. Most will work in version 3 as well.
	// // an array of additional headers [{name:'headername',value:'headervalue'}]
	//     username: username, 	// the basic auth username
	//     password: password		// the basic auth password
	// });

	//   o("PerPerson").filter("personIdExternal eq 'scriss1'").get(function(data) {
		  
	// 	  store.clear();
	// 	  store.set('Users', data.d.results[0]);

	// 	  console.log(store.data);
	// 	  res.send(data);
	//   }, function(status) {
	// 	  console.error('error and status is ' + status); // error with status
	// 	  res.send('error and status is ' + status);
	//   }).fail(function(ex) {
 //  		console.log(ex);
	//   });

	  // console.log("saving to database!");

	  // const { Client } = require('pg')

	  // const client = new Client({
		 //  connectionString: "postgres://CXJO5c_z6RMNzuhV:AEEM3rUdSnaa0MG7@10.11.241.18:33798/oMCyilR-CjpO0W-y"
	  //  });

	  // client.connect((err) => {
		 //  if (err) {
		 //    console.error('connection error', err.stack);
		 //    res.send('database connection error!');
		 //  } else {
		 //    console.log('connected');
		 //    res.send('database connected');
		 //  }
	  // });





});

module.exports = router;
