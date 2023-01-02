import {iteratorSymbol} from 'immer/dist/internal';
import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {
  particularPlaceApi,
  addFavoriteApi,
  searchGetFavorite,
} from '../auth/Auth';
import {setFavouriteList} from '../redux/ReduxPersist/FavouriteSlice';
import {setParticularPlace} from '../redux/ReduxPersist/ParticularPlace';

export const ListComponent = ({
  navigation,
  placeName,
  overallrating,
  description,
  address,
  dist,
  placePic,
  id,
  favourite,
}) => {
  const dispatch = useDispatch();
  const rating = parseFloat(overallrating).toFixed(1);
  const distance = parseFloat(dist).toFixed(1);
  // console.log("p000",favourite)
  // const [favourite,setFavourite]=useState(true)

  const token = useSelector(state => state.userDetails.token);
  let latitude = useSelector(state => state.userDetails.latitude);
  let longitude = useSelector(state => state.userDetails.longitude);

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

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        onPress={async () => {
          const res = await particularPlaceApi(token, id);
          // console.log(res);
          if (res?.status) {
            dispatch(setParticularPlace(res));
            navigation.navigate('DetailsScreen', favourite);
          }
        }}>
        <View style={styles.listContainer}>
          <View>
            <Image source={{uri: placePic}} style={styles.image} />
          </View>

          <View style={{width: '70%', marginLeft: 10}}>
            <View style={{height:40}}>
              <Text style={styles.name}>{placeName}</Text>
            </View>
            <View style={styles.rating}>
              <Text
                style={{
                  fontSize: 14,
                  color: 'white',
                  fontFamily: 'Avenir Book',
                }}>
                {rating}
              </Text>
            </View>
           
              <View style={{flexDirection: 'row', marginTop: 40}}>
                <Text style={styles.text}>{description} </Text>
                <Text style={styles.text}>• ₹ ₹ ₹ ₹ </Text>
                <Text style={styles.text}>{distance}km</Text>
              </View>
              <View >
                <Text
                  style={styles.text}
                  ellipsizeMode="tail"
                  numberOfLines={1}>
                  {address}
                </Text>
              </View>
           
          </View>
          <View
            style={{
              position: 'absolute',
              top: 7,
              flexDirection: 'row',
              right: 10,
            }}>
            {favourite ? (
              <>
                <TouchableOpacity
                  onPress={async () => {
                    let placeId = id;
                    if(token){

                      const data = await addFavoriteApi(token, placeId);
                      // console.log("hellooooo")
                      console.log('added', data);
  
                      searchParam = '';
                      // latitude = latitude;
                      // longitude = longitude;
  
                      const res = await searchGetFavorite(
                        token,
                        searchParam,
                        latitude,
                        longitude,
                      );
                      console.log('added2', res);
                      if (res) {
                        const tttt = dispatch(setFavouriteList(res));
                        // console.log('dis added', tttt);
                      }
                    }
                    else(createTwoButtonAlert())

                    // searchParam = texts;
                    // latitude = '12.915605';
                    // longitude = '74.855965';
                    // const data2 = await searchGetFavorite(
                    //   token,
                    //   searchParam,
                    //   latitude,
                    //   longitude,
                    // );
                    // // console.log("+++",data)
                    // dispatch(setSearchFavList(data));
                    // // if(data2){
                    // //   dispatch(setFavouriteList(data2))
                    // // }
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
                    let placeId = id;
                    if(token){
                      const data = await addFavoriteApi(token, placeId);
                    // console.log('removed', data);
                    searchParam = '';
                    // latitude = latitude;
                    // longitude = '74.855965';

                    const res = await searchGetFavorite(
                      token,
                      searchParam,
                      latitude,
                      longitude,
                    );
                    console.log('removed2', res);
                    if (res) {
                      dispatch(setFavouriteList(res));
                    }
                    }else{
                      createTwoButtonAlert()
                    }
                    
                  }}
                  >
                  <Image
                    source={require('../assets/images/favourite_star.png')}
                    style={{height: 20, width: 20}}
                  />
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // marginTop: 2,
    // borderWidth:1
  },
  listContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 0,
    // borderRadius: 5,
    height: 130,

    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    padding: 10,
    elevation: 5,
    marginTop: 6,

    flexDirection: 'row',
    // borderWidth:1,
    marginHorizontal: 5,
  },
  image: {
    width: 120,
    height: 130,
    marginTop: -10,
    marginLeft: -10,
    justifyContent: 'flex-start',
  },
  name: {
    fontFamily: 'Avenir Medium',
    color: '#1D1D26',
    fontWeight: '600',
    fontSize: 18,
    marginTop: -5,
    lineHeight:25
  },
  rating: {
    height: 23,
    width: 25,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    backgroundColor: '#76B947',
    marginBottom: 10,

    marginTop: 45,
    position: 'absolute',
  },
  text: {
    fontFamily: 'Avenir Book',
    fontSize: 12,
    color: '#87797F',
    fontWeight: '400',
    lineHeight: 17,
  },
});
