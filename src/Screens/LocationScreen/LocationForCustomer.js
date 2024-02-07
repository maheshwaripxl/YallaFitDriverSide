import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Geocoder from 'react-native-geocoding';
import {HEIGHT, WIDTH, googleMapApiKey} from '../../Config/AppConst';
import RBSheet from 'react-native-raw-bottom-sheet';

// Geocoder.init(googleMapApiKey);

const LocationForCustomer = () => {
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1, height: HEIGHT(100), width: WIDTH(100)}}
        // onPress={handleMapPress}
        // provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <RBSheet
        ref={ref => {
          this.RBSheet = ref;
        }}
        height={300}
        openDuration={250}
        customStyles={{
          container: {
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}>
        <YourOwnComponent />
      </RBSheet>
    </View>
  );
};

export default LocationForCustomer;

const styles = StyleSheet.create({});
