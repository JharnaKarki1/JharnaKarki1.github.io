$(document).ready(function () {

   //using pure promise syntax
   $("#view_button").click(() => {

       let date = $("#date").val();
       $("#pic").show();
       //sending request here
       fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=0AJH3YGVbm8W6Ay9sNegG4sedHNzr6zBkoOh53WA`)
           //getting the promise here from the fetch request
           .then(response => response.json())
           //getting and using the response here
           .then(data => {
               $("#pic").attr("src", data.url);
               $("#titleOfPhoto").text(data.title);
               
           })
           //handling error here if any occur
           .catch(err => console.log(err.message))


   })
})