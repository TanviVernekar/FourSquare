import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StatusBar,
  ImageBackground,
  Text,
  StyleSheet,
  Image,
  PermissionsAndroid,
  TouchableOpacity,
  Alert
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {Button2, Buttons} from '../components/Buttons';
import {ModalComponent} from '../components/ModalComponent';
import {setRatingState} from '../redux/ReduxPersist/RatingSlice';
import {MapScreen} from './MapScreen';
import LinearGradient from 'react-native-linear-gradient';
import Geolocation from '@react-native-community/geolocation';
import {
  addFavoriteApi,
  getAllPhotos,
  getReview,
  searchGetFavorite,
} from '../auth/Auth';
import {setPhotos, setReview} from '../redux/ReduxPersist/ParticularPlace';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {setFavouriteList} from '../redux/ReduxPersist/FavouriteSlice';

export const DetailsScreen = ({navigation, route}) => {
  console.info(route.params);
  const [favourite, setFavourite] = useState(route.params);
  console.info(favourite);
  const dispatch = useDispatch();
  const token = useSelector(state => state.userDetails.token);

  const details = useSelector(state => state.particularPlace.details);
  console.log('££££', details);
  const [currentLongitude, setCurrentLongitude] = useState('');
  const [currentLatitude, setCurrentLatitude] = useState('');
  const [locationStatus, setLocationStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const mapRef = useRef();

  const longitude = details?.data?.placeDetails.location.coordinates[0];
  const latitude = details?.data?.placeDetails.location.coordinates[1];
  const id = details?.data?.placeDetails._id;
  const rating = details?.data?.overallRating.toFixed(1);
  console.log(rating);
  const favouriteList = useSelector(state => state.favouriteSlice.favList);

  const STAR_IMAGE = require('../assets/images/rating_icon_selected.png');
  const createTwoButtonAlert = () =>
  Alert.alert('', 'Please Login to Continue!', [
    {
      text: 'Login',
      onPress: () => {
        navigation.navigate('SignIn');
      },
    },
    {
      text: 'Cancel',
      style: {fontWeight: 'bold'},
      onPress: () => {
       null

      },
    },
  ]);

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
      // }
    // }, [mapView]);
  }, []);

  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setTimeout(() => {
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
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <ScrollView>
        <View style={{flex: 1}}>
          <ImageBackground
            source={{uri: details?.data?.placeDetails.placePic.url}}
            style={{width: '100%', height: 300}}>
            <View style={styles.image}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('../assets/images/back.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <View style={{height:90,width:'65%'}}>

              <Text style={styles.text}>
                {details?.data?.placeDetails.placeName}
              </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/images/share.png')}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                {favourite ? (
                  <>
                    <TouchableOpacity
                      onPress={async () => {
                        placeId = details?.data?.placeDetails._id;
                        if(token){

                          const data = await addFavoriteApi(token, placeId);
                          // console.log("hellooooo")
                          console.log('rem', data);
                          alert('remmm', placeId);
                          setFavourite(false);
  
                          searchParam = '';
                          // latitude = '12.915605';
                          // longitude = '74.855965';
  
                          const res = await searchGetFavorite(
                            token,
                            searchParam,
                            latitude,
                            longitude,
                          );
                          console.log('added2', res);
                          if (res) {
                            dispatch(setFavouriteList(res));
                          }
                        }else{
                          createTwoButtonAlert()
                        }
                      }}>
                      <Image
                        source={require('../assets/images/favourite_icon_selected.png')}
                        style={{height: 20, width: 20}}
                      />
                    </TouchableOpacity>
                  </>
                ) : (
                  <>
                    <TouchableOpacity
                      onPress={async () => {
                        placeId = details?.data?.placeDetails._id;
                        if(token){

                          const data = await addFavoriteApi(token, placeId);
                          // console.log("hellooooo")
                          alert('add', placeId);
                          console.log('added', data);
                          setFavourite(true);
  
                          searchParam = '';
                          // latitude = '12.915605';
                          // longitude = '74.855965';
  
                          const res = await searchGetFavorite(
                            token,
                            searchParam,
                            latitude,
                            longitude,
                          );
                          console.log('added2', res);
                          if (res) {
                            dispatch(setFavouriteList(res));
                          }
                        }else{
                          createTwoButtonAlert()
                        }
                      }}>
                      <Image
                        source={require('../assets/images/favourite_icon_unselectedd.png')}
                        style={{height: 20, width: 20}}
                      />
                    </TouchableOpacity>
                  </>
                )}
              </View>
            </View>
            <View style={styles.textbtm}>
              <Text style={styles.btmtext}>
                {' '}
                {details?.data?.placeDetails.description}
              </Text>

              {/* <> */}

              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',

                  height: 25,
                }}>
                <AirbnbRating
                  ratingImage={STAR_IMAGE}
                  ratingColor="#3498db"
                  ratingCount={5}
                  defaultRating={rating}
                  size={25}
                  isDisabled={true}

                  // tintColor='transparent'
                />
              </View>
            </View>
          </ImageBackground>
          <View style={styles.middleContainer}>
            {token?(
                <TouchableOpacity
                onPress={() => {
                  {
                    dispatch(setRatingState());
                  }
                }}>
                <View>
                  <Image
                    source={require('../assets/images/rating_icon.png')}
                    style={styles.middleIcon}
                  />
                  <Text style={styles.middletext}>Rating</Text>
                </View>
              </TouchableOpacity>
            ):(
              <TouchableOpacity
              onPress={() => {
                createTwoButtonAlert()
              }}>
              <View>
                <Image
                  source={require('../assets/images/rating_icon.png')}
                  style={styles.middleIcon}
                />
                <Text style={styles.middletext}>Rating</Text>
              </View>
            </TouchableOpacity>
            )}
          

            <TouchableOpacity
              onPress={async () => {
                // const obj={
                //   id:details.data?.placeDetails._id
                // }
                const res = await getAllPhotos(token, id);
                console.log('ohhhho', res);
                if (res) {
                  dispatch(setPhotos(res));
                  navigation.navigate('PhotosScreen');
                }
              }}>
              <View>
                <Image
                  source={require('../assets/images/photo_icon.png')}
                  style={styles.middleIcon}
                />
                <Text style={styles.middletext}>Photos</Text>
              </View>
            </TouchableOpacity>

        
               <TouchableOpacity
               onPress={async () => {
                 const res = await getReview(token, id);
                 console.log('kkkk', res);
                 if (res) {
                   dispatch(setReview(res));
                   navigation.navigate('ReviewScreen');
                 }
               }}>
               <View>
                 <Image
                   source={require('../assets/images/review_icon.png')}
                   style={styles.middleIcon}
                 />
                 <Text style={styles.middletext}>Review</Text>
               </View>
             </TouchableOpacity>
           
           
          </View>
          <View
            style={{
              borderWidth: 0.3,
              marginHorizontal: 25,
              color: '#8D8D8D',
              opacity: 0.1,
              marginTop: 15,
            }}
          />
          <View style={styles.btm}>
            <Text style={styles.overview}>Overview</Text>
            <Text style={styles.desp}>
              {details?.data?.placeDetails.description}{' '}
            </Text>
          </View>
          <View style={{height: 200, width: '100%'}}>
            {currentLatitude && currentLongitude ? (
              <MapScreen
                latitude={currentLatitude}
                longitude={currentLongitude}
                refs={mapRef}
              />
            ) : (
              <></>
            )}
            <LinearGradient
              start={{x: 0, y: 1}}
              end={{x: 1, y: 1}}
              locations={[0.4, 0.8]}
              colors={['rgba(249,245,238,1)', 'rgba(249,245,238,0)']}>
              <View style={{height: 200, width: '50%', margin: 25}}>
                <Text
                  style={{
                    color: 'grey',
                    fontFamily: 'Avenir Medium',
                    marginBottom: 15,
                  }}>
                  {details?.data?.placeDetails.address}
                </Text>
                <Text
                  style={{
                    color: 'grey',
                    fontFamily: 'Avenir Medium',
                    marginBottom: 15,
                  }}>
                  +91 {details?.data?.placeDetails.phone}
                </Text>
                <Text style={{color: 'grey', fontFamily: 'Avenir Medium'}}>
                  Drive:5km
                </Text>
              </View>
            </LinearGradient>
          </View>
          {token ? (
                <Button2
                text="Add Review"
                onPress={() => {
                  navigation.navigate('AddReviewScreen');
                }}
              />
          ):(
            <Button2
            text="Add Review"
            onPress={() => {
             createTwoButtonAlert()
            }}
          />
          )}
        
        </View>
      </ScrollView>
      <ModalComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
    marginHorizontal: 25,
  },
  icon: {
    marginRight: 25,
    height: 25,
    width: 25,
  },
  icon2: {
    height: 25,
    width: 25,
  },
  text: {
    fontFamily: 'Avenir Medium',
    fontSize: 22,
    color: 'white',
    // marginLeft: 30,
    // marginHorizontal: 80,
    textAlign: 'center',
    // width: '100%',
   
  },
  textbtm: {
    marginHorizontal: 35,
    marginTop: 50,
  },
  btmtext: {
    textAlign: 'center',
    fontFamily: 'Avenir Book',
    fontSize: 18,
    color: '#FFFFFF',
    lineHeight: 24,
    height:65
  },
  middleContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 35,
    marginTop: 15,
  },
  middleIcon: {
    height: 40,
    width: 40,
    marginBottom: 5,
  },
  middletext: {
    fontFamily: 'Avenir Book',
    fontSize: 14,
    color: '#8D8D8D',
  },
  btm: {
    marginHorizontal: 23,
    marginTop: 15,
    marginBottom: 5,
  },
  overview: {
    fontFamily: 'Avenir Book',
    fontSize: 18,
    color: '#351347',
    lineHeight: 36,
    fontWeight: '500',
    marginBottom: 5,
  },
  desp: {
    fontFamily: 'Avenir Book',
    fontSize: 16,
    color: '#8D8D8D',
    lineHeight: 23,
    textAlign: 'justify',
    letterSpacing: 0.2,
    height: 100,
  },
});
