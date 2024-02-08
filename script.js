require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "dojo/domReady!"
], function(Map, MapView, FeatureLayer) {

  
  var map = new Map({
    basemap: "streets"
  });

  var view = new MapView({
    container: "Div",
    map: map,
    extent: { // autocasts as new Extent()
      xmin: -118.264858634618,
      ymin: 33.5444932701483,
      xmax: -117.299011374275,
      ymax: 35.0054716855699,
      spatialReference: 4326
    }
  });

  var template = { // autocasts as new PopupTemplate()
    title: "What Happened?",
    content: [{
      type: "fields",
      fieldInfos: [{
        fieldName: "CollisnTyp",
        label: "Collision Type",
        visible: true
      }]
    }]
  };

  const feature = new FeatureLayer({
    url: "https://services2.arcgis.com/zNjnZafDYCAJAbN0/arcgis/rest/services/Traffic_Collisions/FeatureServer",
    outFields: ["*"],
    popupTemplate: template
  });
  map.add(feature);

  var symbol = {
    type: "simple-marker", 
    style: "square",
    color: "blue"
  };
  var renderer = {
    type: "simple",  // autocasts as new SimpleRenderer()
    symbol: symbol
  };

  feature.renderer = renderer;

});