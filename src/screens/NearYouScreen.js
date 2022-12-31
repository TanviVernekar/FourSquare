import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';

import {ListComponent} from '../components/ListComponent';
import {MapScreen} from '../screens/MapScreen';
import Geolocation from '@react-native-community/geolocation';
import {useDispatch, useSelector} from 'react-redux';
import {nearmeApi, particularPlaceApi, ProfileApi, searchGetFavorite} from '../auth/Auth';
import { setLatitude,setLongitude } from '../redux/ReduxPersist/UserDetails';
import { setFavouriteList } from '../redux/ReduxPersist/FavouriteSlice';


export const NearYouScreen = ({navigation}) => {

  const dispatch=useDispatch()

  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [locationStatus, setLocationStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const [nearyou, setNearyou] = useState();
  // console.log("///////",nearyou)
  const mapRef = useRef();

  const token = useSelector(state => state.userDetails.token);
  // console.log("near you",token)
  const favouriteList = useSelector(state => state.favouriteSlice.favList);
  // console.log("()()iiii()()",favouriteList)
  let [favourite,setFavourite]=useState()

  const latitude =useSelector(state => state.userDetails.latitude);
  const longitude =useSelector(state => state.userDetails.longitude);

  //  console.log("000",nearyou?._id)


  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getOneTimeLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          // console.warn(err);
        }
      }
    };
    // if (mapView) {
    requestLocationPermission();
    //   }
    // }, [mapView]);
  }, []);

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      async position => {
        setTimeout(async () => {
          try {
            mapRef.current.animateToRegion(
              {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.2,
              },
              3 * 1000,
            );
            setLoading(false);
          } catch (error) {
            console.log('Failed to animate direction');
          }
        }, 500);

        const currentLongitude = position.coords.longitude;

        const currentLatitude = position.coords.latitude;

        setCurrentLongitude(currentLongitude);

        setCurrentLatitude(currentLatitude);
       
         
         
          dispatch(setLatitude(currentLatitude))
          dispatch(setLongitude(currentLongitude))
          let latitude = currentLatitude
          let longitude = currentLongitude
          const res = await nearmeApi(token,latitude,longitude);

          
         
        if (res) {
          // console.log('bebdhjwbdjbw',res.data.data);
          setNearyou(res.data.data);
         
        } else {
          console.log(res);
        }
        searchParam = '';
        //  latitude = latitude;
        // longitude = longitude;
    
        const favouriteData = await searchGetFavorite(
          token,
          searchParam,
          latitude,
          longitude,
        );
        if (favouriteData) {
          dispatch(setFavouriteList(favouriteData));
          // console.log('---', favouriteData)
        }



        const profileData = await ProfileApi(token)
        console.log(profileData)
    
      },
      error => {
        // setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <View style={{height: 200, width: '100%'}}>
          {latitude && longitude ? (
            <MapScreen
              latitude={latitude}
              longitude={longitude}
              refs={mapRef}
            />
          ) : (
            <></>
          )}
        </View>
        {nearyou?.map(item => (
          <View key={item?._id}>
            {favouriteList ? (
              <>
              {(favourite = false)}
              {favouriteList? (
                <>
                    {favouriteList?.map(temp=>(
                    <View key={temp?._id}>
                        <>{temp?._id === item?._id ? (favourite = true):null}</>
                    </View>
                    
                ))}
                </>
              ):(
                <>
            
                 {(favourite = false)}
                </>
           
              )}
              </>
            ):(
              <>{(favourite = false)}</>
            )}
            <ListComponent navigation={navigation} placeName={item.placeName} 
            placePic={item.placePic.url}
            overallrating={item.overallRating}
            description={item.description}
            address={item.address}
            dist={item.dist.calculated}
            id={item._id}
            favourite={favourite}
            />
                                                        
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // marginTop: 2,
    // borderWidth:1
  },
});
