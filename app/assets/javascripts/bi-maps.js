function initMap() {
    var myLatLng = {lat: -25.363, lng: 131.044};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng
    });

    map.addListener('click', function(e) {
        //title = prompt("Ingrese descripción");
        title = "Ingrese descripción";
        placeMarker(e.latLng, map, title);
        saveMarker();
    });
}

function placeMarker(latLng, map, title) {
    marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: title
    });

    marker.addListener('click', function() {
        marker.setMap(null)
    });

    marker.addListener('dblclick', function() {
        alert('lalal')
    });
}