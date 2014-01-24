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
}
google.maps.event.addDomListener(window, 'load', initialize);
$(function () {
    var count = 0, eyes = $('#logo').find('.eyes');
    function change_eye_color() {
        setTimeout(function () {
            var eye_color = (count % 2) ? '#f00' : '#0f0';
            eyes.css('background-color', eye_color);
            count++;
            change_eye_color();
        }, 1000);
    }
    change_eye_color();
});
