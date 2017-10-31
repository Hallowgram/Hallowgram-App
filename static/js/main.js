document.getElementById("profileImg").style.display = "none";

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            document.getElementById("defaultImg").style.display = "none";

            document.getElementById("profileImg").style.display = "block";

            // $(".image-title").html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        removeUpload();
    }
}