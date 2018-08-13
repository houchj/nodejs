


$(document).ready(function(){

	$('#hint').text("");
	$('#syncResponse').prop("value", "");

	$('#syncbutton').click(function(){
		$('#syncbutton').prop('disabled', true);
		$('#syncResponse').prop('value', "");
	    console.log('sync clicked');
	    var api = $('#api').val();
	    var username = $('#username').val();
	    var password = $('#password').val();
	    var filter = $('#filter').val();

		$('#hint').text("start to read data from remote server...");

	      $.get("/sync", {api : api, username : username, password : password, filter: filter}, function(result){
		    console.log(result);
		    $('#syncbutton').prop('disabled', false);
		    $('#syncResponse').prop('value', result);
		    $('#hint').text("data is stored, please read data by this api: " + window.location.href + "Users");
		  });
	});
});