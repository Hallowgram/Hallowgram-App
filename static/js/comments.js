document.getElementById('addComment').addEventListener('click',function(){
	var comments = document.getElementById('comments');

	comments.innerHTML += `
		<form method="POST" action="/addComment">

			<input type="text" name="newComment" id='new-comment' placeholder="Please enter a comment"><button id="submit">Save</button>
		</form>`;



})

