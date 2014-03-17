var infowindow = new google.maps.InfoWindow({

});

function initialize() {
    var controlOptions = {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    };
    var mapOptions = {
        center: new google.maps.LatLng(40.000, -100.644),
        mapTypeControlOptions: controlOptions,
        zoom: 4
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);



        function draw_map_marker(map_coordinates) {
            // return google marker object
            //console.log(map_coordinates)
            var reddit_longboarder = 'assets/mapmarker.svg';
            var marker = new google.maps.Marker({
                map: map,
                animation: google.maps.Animation.DROP,
                icon: reddit_longboarder,
                position: map_coordinates

            })

            return marker;
        }

        function process_longboarder_location(google_api_result) {
            var map_coordinates = google_api_result[0].geometry.location;
            console.info(google_api_result[0].formatted_address)
            var randAmount = (Math.random())/10;
            map_coordinates.k += randAmount;
            map_coordinates.A += randAmount;
                    return draw_map_marker(map_coordinates);
        }

        function lookup_longboarder_location(longboarder) {
            // return google LatLng object
           //console.log(longboarder)
           geocoder = new google.maps.Geocoder();
           geocoder.geocode({address: longboarder.location},  function (result, status) {
               var marker = process_longboarder_location(result)
               var infoContent = '<h1>' + longboarder.username + '<br>' + longboarder.age + '<br>' +'</h1>'
               infoContent += '<ul>'
               for (var i = 0; i < longboarder.discipline.length; i++ ){
                   infoContent += '<li>discipline' + ': ' + longboarder.discipline[i] + '</li>';
               }
               infoContent += '</ul>'

               google.maps.event.addListener(marker, 'click', function() {
                   infowindow.setContent(infoContent);
                   infowindow.open(map,marker);
               });
           });
        }

        function parse_api_result(parsed_result) {
            var long_boarders = parsed_result.longboarders;
            var long_boarder_count = long_boarders.length;

            for (var i = 0; i < long_boarder_count; i += 1) {
                lookup_longboarder_location(long_boarders[i]);
            }
        }

        $.get('/api/longboarder', parse_api_result, 'json');


}



function dogeDetection(){
    document.getElementById("signIn").onclick = function(){
        var dogeRegExp = new RegExp("doge");
        if (document.getElementById("user_email").value.match(dogeRegExp)){
            $("#dogePic").show("slow");
            setTimeout(function(){$("#dogePic").hide("slow");} ,2000);
        }
    }
}

window.onload = function(){
    $("#dogePic").hide(0);
    dogeDetection();
}


google.maps.event.addDomListener(window, 'load', initialize);
