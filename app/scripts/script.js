

var SearchName = encodeURIComponent("tauno palo");


 




var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/search/multi?include_adult=false&query="+SearchName+"&api_key=***REMOVED***",
    "method": "GET",
    "headers": {},
    "data": "{}"
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);

    response = JSON.parse(response);

    $.each( response.items, function( i, item ) {
        // $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        console.log(item + "1");
     
        
         });
  });

 




 



