document.getElementById('like-btn').addEventListener('click', function(){

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/like", true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify({
	    user: "some user"
	}));
	window.location.reload();
})