import React, { Component } from 'react';

export default class GoogleMap extends Component {
  // this is called automatically when the component has been rendered
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render() {
    // can be accessed via this.refs.map
    return <div ref="map" />;
  }
}
