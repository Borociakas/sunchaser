import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={this.props.CustomStyle}
        initialCenter={{
          lat: 54.649048,
          lng: 24.932052
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBhDKYSH9fIhH22VsCyGONfeILZYUiL2UE"
})(MapContainer);
