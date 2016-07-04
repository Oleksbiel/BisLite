var myCenter=new google.maps.LatLng(49.812013, -97.232792);
var marker;

function initialize() {
        var mapProp = {
            center: new google.maps.LatLng(49.812013, -97.232792),
            zoom: 10,
            disableDefaultUI:true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
        var marker = new google.maps.Marker({
            position: myCenter,
            icon: 'images/map-marker.png'
        });

        marker.setMap(map);
    }
    google.maps.event.addDomListener(window, 'load', initialize);