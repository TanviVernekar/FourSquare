// Import React
import React from 'react';
// Import required components
import {SafeAreaView, StyleSheet, View} from 'react-native';


// Import Map and Marker
import MapView, {Marker} from 'react-native-maps';

export const SearchMapScreen = ({latitude,longitude,refs,data}) => {

    console.log("mmmmm",latitude)
  return (
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          ref={refs}
        region={{
          
            latitude:13.379326,
            longitude:74.740226,
            latitudeDelta:1,
            longitudeDelta:7,
         
            
        }}
          customMapStyle={mapStyle}>
            {data?.map(marker=>
              <View key={marker?._id}>

             
          <Marker
            // draggable
            pinColor={marker?.location?.coordinates[1] === latitude ?(
                'red'
            ):(
                'green'
            )}
            coordinate={{
              latitude:marker?.location?.coordinates[1],
              longitude:marker?.location?.coordinates[0]
            
            }}
            
            // onDragEnd={
            //   (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            // }
            title={marker?.placeName}
            // description={marker?.placeName}
          />
           </View>
            )}
        </MapView>
      </View>
  );
};



const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});