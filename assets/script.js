
$("#horoscope" ).on( "click", function() {
    getHoroscope();
  } );

function getHoroscope(){

    var horoscope;

    $.ajax({
        type:'GET',
        url: '	https://ohmanda.com/api/horoscope/pisces',
        success:function(data){
            horoscope = data;
            console.log(horoscope);
            $("#today").text(data.horoscope);
        },
        error: function (request, status, error) {
            console.log(request.responseText);
        }
   });
}