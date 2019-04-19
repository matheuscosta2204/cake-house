import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

import classes from './Maps.css';

const mapStyles = {
  width: '50%',
  height: '100%',
};

export class MapContainer extends React.Component {
    state = {
        showingInfoWindow: false,  //Hides or the shows the infoWindow
        activeMarker: {},          //Shows the active marker upon click
        selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <div className={classes.Maps}>
                <Map
                    google={this.props.google}
                    zoom={16}
                    style={mapStyles}
                    initialCenter={{
                    lat: -21.1936132,
                    lng: -47.8290583
                    }}>
                    <Marker
                        onClick={this.onMarkerClick}
                        name={'Luiza Confeitaria'}
                    />
                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onClose}>
                        <div>
                            <h4>{this.state.selectedPlace.name}</h4>
                        </div>
                    </InfoWindow>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
  apiKey: 'GOOGLE_API_KEY'
})(MapContainer);