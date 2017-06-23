import React, { Component, PropTypes } from 'react';

class Map extends Component {

  componentDidMount() {
    const location = this.props.location.split(',');

    var loc = {lat: parseFloat(location[0]),  lng: parseFloat(location[1])};
    var map = new google.maps.Map(document.getElementById('gmap'), {
      zoom: 14,
      center: loc
    });
    var marker = new google.maps.Marker({
      position: loc,
      map: map
    });
  }

  render() {

    var divStyle = {
        width: "100%",
        height: "150px"
      };

    return (
      <div id="gmap" className="gmap" style={divStyle}></div>
    )
  }
}

export default Map
