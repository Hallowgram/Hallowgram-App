
var form = document.forms.namedItem("uploadForm");

form.addEventListener('submit', function(event){

	var grabedFile = document.getElementById('myFile').files[0];

	// in order to send data as key value pairs through xml http request 
	// you have to compile it with a form data object
	var compiledData = new FormData(form); //takes in the form as param

	//create constructor for request
	var pRequest = new XMLHttpRequest();
	//initialize the request (true param is if to run async or not)
	pRequest.open("POST", "/profile/multerUpload", true);

	dataCompile.onload = function(data) {

		if (pRequest.status == 200) {
			console.log('request granted!')

		} else {
			console.log('access to server denied!')
		}
	};

	pRequest.send(compiledData);
	event.preventDefault() // stop form from behaving in default way (cancels form submit) 

}, false) // this is useCapture param - events can be activated in two ways: at the beginning (capture), and at the end (bubble) 




