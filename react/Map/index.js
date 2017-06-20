import React, { Component, PropTypes } from 'react'
import MapboxGl from 'mapbox-gl/dist/mapbox-gl.js'

class Map extends Component {

  componentDidMount() {
    const location = this.props.location.split(',');

    MapboxGl.accessToken = 'pk.eyJ1IjoibW9yYXR0b28iLCJhIjoiY2o0NHdpcGNnMDBvNTMybzJ3Z2E0OG4yayJ9.iAqEvqzmLI3IRMYQdmzgZg';

    var map = new MapboxGl.Map({
      container: this.container,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [parseFloat(location[1]), parseFloat(location[0])],
      zoom: 13,
      hash: true
    });

    new MapboxGl.Marker()
    .setLngLat([parseFloat(location[1]), parseFloat(location[0])])
    .addTo(map);
    }

  render() {

    var divStyle = {
        width: "400px",
        height: "300px"
      };

    return (
      <div id="mapApto" style={divStyle} ref={(x) => { this.container = x }}>
      </div>
    )
  }
}

export default Map
