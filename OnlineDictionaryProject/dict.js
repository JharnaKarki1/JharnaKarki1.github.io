$(document).ready(function () {
    $("#search").click(function () {
        $wordvalue = $("#word").val();
        $.ajax("http://localhost:8080/search", {
            type: 'POST',
            data: { word: $wordvalue }
        })
            .done(successFunction);
    });
    function successFunction(data) {
        $("ul").children().remove();
        parsedData = JSON.parse(data);
        console.log(parsedData);
        for(var i=0; i<parsedData.length; i++){
            $("ul").append(`<li>${i+1} (${parsedData[i].wordtype}) :: ${parsedData[i].definition}</li>`)
        }
        console.log('hisuccessfunction');
    }
});