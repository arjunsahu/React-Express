import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer'
import {CampFilterAppContainer} from './CampFilterApp';
import './index.css';


const store = createStore(reducer)

// convert json into dict for use by the React components
// add mapOn variable to indicate if the marker should be visible
// by default, set mapOn to false, filtering will indicate if it should be true
function get_campgrounds(features) {
  let campgrounds = []
  features.forEach(feature => {
    campgrounds.push({
      'title' : feature['properties']['title'],
      'description' : feature['properties']['description'],
      'position' : [feature['geometry']['coordinates'][1],
      feature['geometry']['coordinates'][0]],
      'properties': feature['properties'],
     
      'mapOn': true,
    
    })
  });
  return campgrounds
}


let features = [{
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [ 55.102643 , 25.017328]
  },
  "properties": {
    "id":"1",
    "description": "TESLA",
    "title": "Bus",
    
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [55.130524, 25.046722]
  },
  "properties": {
    "id":"2",
    "description": "BMW",
    "title": "Car",
    
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [55.165371,25.046883]
  },
  "properties": {
    "id":"3",
    "description": "Hero",
    "title": "Cycle",
   
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [55.128798,25.052284 ]
  },
  "properties": {
    "id":"4",
    "description": "TATA",
    "title": "Truck",
    
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [ 55.115789,25.027635]
  },
  "properties": {
    "id":"5",
    "description": "Activa",
    "title": "Scoty",
    
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [ 55.102643,25.01732]
  },
  "properties": {
    "id":"6",
    "description": "Ola",
    "title": "Cab",
    "marker-size": "small"
  }
}, {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [55.134543, 25.015728]
  },
  "properties": {
    "id":"7",
    "description": "Mehindra",
    "title": "Auto",
    "marker-size": "small"
  }
}]

set_state(get_campgrounds(features))

function set_state(campgrounds) {
  store.dispatch ({
  type: 'SET_STATE',
  state: {
    markers: campgrounds,
    gmapMarkers: [],
    name: "description",
    showingInfoWindow: "false",
    activeMarker: null,
    selectedTitle: "",
    searchTerm: '',
    color:'',
  }
 })
}

ReactDOM.render(
  <Provider store={store}>
  <CampFilterAppContainer />
</Provider>,
  document.getElementById('root')
);
