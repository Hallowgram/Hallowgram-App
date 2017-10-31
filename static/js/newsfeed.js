var images = document.getElementsByTagName("img");
	// console.log(document.getElementsByTagName("img"))

for(var i=0; i<images.length; i++){
	images[i].addEventListener("click", function(event){
		window.location.href = "/addComment";
	});
}