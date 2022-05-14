$(document).ready(
    function () {    
    $("#view_button").click(getPicture);
 });

 const getPicture = async () => {
    const response = await fetch("https://api.nasa.gov/planetary/apod?api_key=0AJH3YGVbm8W6Ay9sNegG4sedHNzr6zBkoOh53WA&date=",{
     method: "GET",
     data : $("#date").val() 
           
 })
    .then((response) => response.json())
    .then(showPicture);
      
}
   function showPicture(data) {   
     
    $("#pic").attr("src", data.url); 
    $("h2").text(data.title);
    };
    