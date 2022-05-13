$(document).ready(
    function () {
    $("#view_button").click(getPicture);
 });

    function getPicture () {
    $.ajax({
    url: "https://api.nasa.gov/planetary/apod",
    type: "GET",
    data:  { api_key:  "0AJH3YGVbm8W6Ay9sNegG4sedHNzr6zBkoOh53WA",
            date:  $("#date").val() },
    dataType:  "json",
    "success": showPicture,
     "error": noPicture
    });
};
    function showPicture(data) {   
    $("#pic").attr("src", data.url); 
    $("h2").text(data.title);
    };
    function noPicture(error) {
         alert(error.responseText);
    };