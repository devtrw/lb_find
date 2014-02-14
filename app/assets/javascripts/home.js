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
            return draw_map_marker(map_coordinates);
        }

        function lookup_longboarder_location(longboarder) {
            // return google LatLng object
           // console.log(location)
           geocoder = new google.maps.Geocoder();
           geocoder.geocode({address: longboarder.location},  function (result, status) {
               var marker = process_longboarder_location(result)
               var infoContent = '<h1>' + longboarder.username + '<br>' + longboarder.age + '<br>' +'</h1>'
               infoContent += '<ul>'
               for (var i = 0; i < longboarder.discipline.length; i++ ){
                   infoContent += '<li>discipline number ' + i + ': ' + longboarder.discipline[i] + '</li>';
               }
               infoContent += '</ul>'
               var infowindow = new google.maps.InfoWindow({
                   content: infoContent

               });

               google.maps.event.addListener(marker, 'click', function() {
                   infowindow.open(map,marker);
               });
           });
        }

        function add_longboarder_to_map(longboarder) {
           // console.info('adding longboarder(/u/' + longboarder.username + ') from ' + longboarder.location + ' to map');
            lookup_longboarder_location(longboarder);

        }

        function parse_api_result(parsed_result) {
            var long_boarders = parsed_result.longboarders;
            var long_boarder_count = long_boarders.length;

            for (var i = 0; i < long_boarder_count; i += 1) {
                lookup_longboarder_location(long_boarders[i]);
            }
        }

        jQuery.get('/api/longboarder', parse_api_result, 'json');



}


google.maps.event.addDomListener(window, 'load', initialize);

//facebook
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
