function initialize() {
    var controlOptions = {
        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    };
    var mapOptions = {
        center: new google.maps.LatLng(-34.397, 150.644),
        mapTypeControlOptions: controlOptions,
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    jQuery(document).ready(function () {
        var count = 0;
        var eyes = $('#logo').find('.eyes');

        function change_eye_color() {
            setTimeout(function () {
                var eye_color = (count % 2) ? '#f00' : '#0f0';
                eyes.css('background-color', eye_color);
                count++;
                change_eye_color();
            }, 1000);
        }

        change_eye_color();

        function add_marker_to_map(map, map_coordinates) {
            // draw marker on map
        }

        function create_map_marker(map_coordinates) {
            // return google marker object
            return {}
        }

        function lookup_longboarder_location(location) {
            // return google LatLng object
            return {}
        }

        function add_longboarder_to_map(longboarder) {
            console.info('adding longboarder(/u/' + longboarder.username + ') from ' + longboarder.location + ' to map');
            var map_coordinates = lookup_longboarder_location(longboarder.location);
            var marker = create_map_marker(map_coordinates);
            add_marker_to_map(map, marker)
        }

        function parse_api_result(parsed_result) {
            var long_boarders = parsed_result.longboarders;
            var long_boarder_count = long_boarders.length;

            for (var i = 0; i < long_boarder_count; i += 1) {
                add_longboarder_to_map(long_boarders[i]);
            }
        }

        jQuery.get('/api/longboarder', parse_api_result, 'json');
    });

}


google.maps.event.addDomListener(window, 'load', initialize);




