require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer"
    ], function(Map, MapView, FeatureLayer) {
      var map = new Map({
        basemap: "streets-night-vector"
      });
            
      function popupContent () {
        return "Confirmed: {Confirmed}<br>Deaths: {Deaths}<br> Recovered: {Recovered} <br><a target=\"_blank\" href=\"http://www.esri.com\">Learn more at www.esri.com</a>";
      }
      
      var lyr = new FeatureLayer({
        url: "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/Coronavirus_2019_nCoV_Cases/FeatureServer/1",
        outFields: ["*"],
        popupTemplate: {
          title: "CDC Coranavirus Data",
          content: popupContent
        },
       
      });
      map.add(lyr);
      var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-10, 35],
        zoom: 1
      });
      
    
      
      
      
    });
