import React, {Component} from 'react';
import {Platform ,Stylesheet, Text , View} from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
//import 'leaflet-pixi-overlay'; 
// import { pixiOverlay } from 'leaflet';
import WelcomeScreen from './screens/WelcomeScreen';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';

export default class App extends React.Component {
  
  getInitialState() {
    return {
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  
  onRegionChange(region) {
    this.setState({ region });
  } 
  
  render(){
    return(
   <MapView
      provider={PROVIDER_GOOGLE}
      style = {{flex:1}}
      region = {{
          latitude: 42.882004,
          longitude: 74.582748,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
      }}
      showsUserLocation
       />
      )
  }
}
