

$(document).ready( function() {

    let loadMap = function()  {
        //
        //
        //
        // first time generation of the map
        //
        //
        //
        // setting locations
        let locations =
        [
            {
                name:           "Select BCIT Campus",
                latLng:         [49.283570, -123.115020],
                address:        "",
                description:    "",
                link:           ""

            },
            {
                name:           "Burnaby",
                latLng:         [49.253350, -123.004200],
                address:        "3700 Willingdon Avenue",
                description:    "The BCIT Burnaby Campus is located just off the Trans-Canada Highway at the corner of Willingdon Avenue and Canada Way",
                link:           "https://www.bcit.ca/about/burnaby.shtml"

            },
            {
                name:           "Downtown",
                latLng:         [49.283570, -123.115020],
                address:        "555 Seymour Street",
                description:    "The BCIT Downtown Campus is in the heart of Vancouver, near the Granville Skytrain Station",
                link:           "https://www.bcit.ca/about/downtown.shtml"
            },
            {
                name:           "Marine",
                latLng:         [49.312720, -123.086330],
                address:        "265 West Esplanade",
                description:    "The BCIT Marine Campus is located in North Vancouver near the Lonsdale Quay and SeaBus terminal",
                link:           "https://www.bcit.ca/about/marine.shtml"
            }
        ];
        MapController.setLocations(locations);
        MapController.setMap(L.map('mapid'));

        // loading options
        MapController.locations.forEach((element, index, array) => { $("#campusSel").append("<option value=" + index + ">" + element.name + "</option>"); });

        //selecting the first value of the options loaded
        $("#campusSel").val(0).change();

        // event for when the campuses select changes
        $("#campusSel").on( "change", (e) =>
            {
                $("#campusSel").val();
                MapController.changeMapLoc( $("option:selected", e.target).text() );
                MapController.updateMapInfo( $("option:selected", e.target).text() );
            }
        );

        //
        //end of map initialization
        //


        // finished loading, present view
        $("body").css("visibility", "visible");


    };
    loadJS("lib/map.functions.js", loadMap, document.head);
});
