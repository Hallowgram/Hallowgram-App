document.getElementById('like-btn').addEventListener('click', function(e){
	var userId = document.getElementById('picture').getAttribute('value');

	var xhr = new XMLHttpRequest();
	xhr.open("POST", "/like", true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	var payload = JSON.stringify({
	    userId: userId,
	    picId: e.target.value
	});
	console.log("playload:", payload);
	xhr.send(payload);
	window.location.reload();
})