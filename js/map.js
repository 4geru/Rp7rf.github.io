window.onload = function(){
		var latlng = new google.maps.LatLng(34.9825,135.9637);
        var latlng1 = new google.maps.LatLng(34.9830,135.9630);
        var options = {
            zoom: 17,
            center: latlng,
            style: google.maps.NavigationControlStyle.ANDROID,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var options1 = {
            zoom: 19,   
            center: latlng1,
            style: google.maps.NavigationControlStyle.ANDROID,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map_canvas'),options);
        var map_array = new Array();
        
}
