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

    var infoWindow = new google.maps.InfoWindow({
    });

        function drawMapMarker(mapCoordinates) {
            // return google marker object
            var redditLongboarder = 'assets/mapmarker.svg';
            var marker = new google.maps.Marker({
                map: map,
               // animation: google.maps.Animation.DROP,
                icon: redditLongboarder,
                position: mapCoordinates

            })

            return marker;
        }

        function processLongboarderLocation(google_api_result) {
            var mapCoordinates = google_api_result[0].geometry.location;
            return drawMapMarker(mapCoordinates);
        }

        function lookupLongboarderLocation(longboarder) {
            // return google LatLng object
           // console.log(location)
           geocoder = new google.maps.Geocoder();
           geocoder.geocode({address: longboarder.location},  function (result, status) {
               var marker = processLongboarderLocation(result);
               var infoContent = '<h1>' + longboarder.username + '<br>' + 'age: ' + longboarder.age + '<br>' +'</h1>'
               infoContent += '<ul>'
               for (var i = 0; i < longboarder.discipline.length; i++ ){
                   infoContent += '<li>discipline' + ': ' + longboarder.discipline[i] + '</li>';

               infoContent += '</ul>'

               }

               google.maps.event.addListener(marker, 'click', function() {

                   infoWindow.setContent(infoContent);
                   infoWindow.open(map, marker);
               });
           });
        }

        function parseApiResult(parsedResult) {
            var longBoarders = parsedResult.longboarders;

            for (var i = 0; i < longBoarders.length; i ++) {
                lookupLongboarderLocation(longBoarders[i]);
            }
        }

        $.get('/api/longboarder', parseApiResult, 'json');





}


google.maps.event.addDomListener(window, 'load', initialize);
