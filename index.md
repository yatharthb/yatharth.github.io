<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>ArcGIS JavaScript API: Coronavirus App</title>
  <style>
    html, body, #viewDiv {
      padding: 0; margin: 0; height: 100%; width: 100%; background: black;
    }
  </style>
  <link rel="stylesheet" href="https://js.arcgis.com/4.14/esri/themes/dark/main.css">
  <script src="https://js.arcgis.com/4.14/"></script>
</head>
<body>
  <div id="viewDiv"></div>
  <script> require([
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
    </script>
</body>
  
</html>
