window.onload = function() {
    var latlng = new google.maps.LatLng(34.9830,135.963);
    var myOptions = {
        center: latlng,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    var map = new google.maps.Map($("#map_canvas").get(0), myOptions);

    
    var triangleCoords = new Array();
    var treeArea = new Array();
    triangleCoords[0] = [
        new google.maps.LatLng(34.98812,135.965311),
        new google.maps.LatLng(34.98461,135.9659),
        new google.maps.LatLng(34.98465,135.9645),
        new google.maps.LatLng(34.98701,135.96305)
    ];
    
    
    triangleCoords[1] = [
        new google.maps.LatLng(34.98461,135.9659),
        new google.maps.LatLng(34.9838,135.9657),
        new google.maps.LatLng(34.98229,135.9662),
        new google.maps.LatLng(34.98195,135.96585),
        new google.maps.LatLng(34.98195,135.96500),
        new google.maps.LatLng(34.9817,135.96435),
        new google.maps.LatLng(34.9815,135.96435),
        new google.maps.LatLng(34.9815,135.9636),
        new google.maps.LatLng(34.9820,135.9636),
        new google.maps.LatLng(34.9829,135.9632),
        new google.maps.LatLng(34.98465,135.9645)
    ];
    
    triangleCoords[2] = [
        new google.maps.LatLng(34.9815,135.9636),
        new google.maps.LatLng(34.9815,135.96435),
        new google.maps.LatLng(34.9817,135.96435),
        new google.maps.LatLng(34.98195,135.96500),
        new google.maps.LatLng(34.98195,135.96585),
        new google.maps.LatLng(34.9810,135.9651),
        new google.maps.LatLng(34.9785,135.9650),
        new google.maps.LatLng(34.9786,135.9635)
    ];
    triangleCoords[3] = [
        new google.maps.LatLng(34.9820,135.9636),
        new google.maps.LatLng(34.9786,135.9635),
        new google.maps.LatLng(34.9786,135.9624),
        new google.maps.LatLng(34.9799,135.9621),
        new google.maps.LatLng(34.9808,135.9614),
        
    ];
    triangleCoords[4] = [
        new google.maps.LatLng(34.9820,135.9636),
        new google.maps.LatLng(34.9829,135.9632),
        new google.maps.LatLng(34.9846,135.9609),
        new google.maps.LatLng(34.9834,135.9596),
        new google.maps.LatLng(34.9820,135.9602),
        new google.maps.LatLng(34.9815,135.9606),
        new google.maps.LatLng(34.9813,135.9604),
        new google.maps.LatLng(34.9806,135.9605),
        new google.maps.LatLng(34.9799,135.9612),
        new google.maps.LatLng(34.98039,135.9617),
        new google.maps.LatLng(34.9808,135.9614),
        
    ];
    for(var i = 0 ; i < triangleCoords.length ; i ++){
        treeArea[i] = new google.maps.Polygon({
            paths: triangleCoords[i],
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 3,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        });
        treeArea[i].setMap(map);
        switch(i){
        case 0 :
            google.maps.event.addListener(treeArea[0], 'click', zoom0); break;
        case 1 :
            google.maps.event.addListener(treeArea[1], 'click', zoom1); break;
        case 2 :
            google.maps.event.addListener(treeArea[2], 'click', zoom2); break;
        case 3 :
            google.maps.event.addListener(treeArea[3], 'click', zoom3); break;
        case 4 :
            google.maps.event.addListener(treeArea[4], 'click', zoom4); break;
        default :
            console.log(i + " error");
            
        };
    }
}

function zoom0(event) {
    console.log("zoom0");
    var myOptions = {
        zoom: 17,
    };
    var map = new google.maps.Map($("#map_canvas").get(0), myOptions);
    var latlng = new google.maps.LatLng(34.9855,135.965);
    map.setCenter(latlng);
}
function zoom1(event) {
    console.log("zoom1");
    var myOptions = {
        zoom: 17,
    };
    var map = new google.maps.Map($("#map_canvas").get(0), myOptions);
    var latlng = new google.maps.LatLng(34.9823,135.9645);
    map.setCenter(latlng);
}
function zoom2(event) {
    console.log("zoom2");
    var myOptions = {
        zoom: 17,
    };
    var map = new google.maps.Map($("#map_canvas").get(0), myOptions);
    var latlng = new google.maps.LatLng(34.9806,135.9645);
    map.setCenter(latlng);
}
function zoom3(event) {
    console.log("zoom3");
    var myOptions = {
        zoom: 17,
    };
    var map = new google.maps.Map($("#map_canvas").get(0), myOptions);
    var latlng = new google.maps.LatLng(34.9806,135.9625);
    map.setCenter(latlng);
}
function zoom4(event) {
    console.log("zoom4");
    var myOptions = {
        zoom: 17,
    };
    var map = new google.maps.Map($("#map_canvas").get(0), myOptions);
    var latlng = new google.maps.LatLng(34.9824,135.9620);
    map.setCenter(latlng);
}
