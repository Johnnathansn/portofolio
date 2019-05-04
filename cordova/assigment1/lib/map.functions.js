let MapController = {

    locations:  [],
    map:        "",

    setLocations(locationArray) {
        this.locations = locationArray;
    },

    setMap(map)  {
        this.map = map;
    },

    getMap() {
        console.log(this.map);
    },

    getLocations() {
        console.log(this.locations);
    },
    // function to change map info
    //
    updateMapInfo(mapName) {
        let x = this.selectMap(mapName);

        if (x.address) {
            $("#mapInfo #address").html("Address: " + x.address);
            $("#mapInfo #description").html("Description: " + x.description);
            $("#mapInfo #link a").html("Link: " + x.name);
            $("#mapInfo #link a").attr("href", x.link);
        } else {
            $("#mapInfo #address").html("");
            $("#mapInfo #description").html("");
            $("#mapInfo #link a").html("");
        }

    },

    // Function to change position of the map
    // and add a marker with the name of the location
    changeMapLoc( mapName ) {

        this.map.setView( this.selectMap(mapName).latLng ,  15);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiY29kZWNvZGV4IiwiYSI6ImNqbHY3NDd6OTByYXAza29kbnJ6bzJyN2MifQ.HBPNHSe3KdM869nh3ixAPA'
        }).addTo(this.map);

        this.changeMarker( mapName, this.map);

    },

    // function returns map based on name
    // if doesnt find return first item from the array of locations
    selectMap( mapLoc )  {
        let loc = this.locations.filter( x => { return x.name == mapLoc} );
        return (loc.length != 0 ) ? loc[0] : this.locations[0];
    },

    // add markers to specific map
    changeMarker( mapName )  {
        let marker = L.marker(this.selectMap(mapName).latLng).addTo(this.map);
        marker.bindPopup(this.selectMap(mapName).name).openPopup();
    }

};

//let  = Object.create(MapController);
