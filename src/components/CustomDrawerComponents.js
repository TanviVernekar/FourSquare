import React, {useState, useEffect, useLayoutEffect} from 'react';

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useSelector, useDispatch} from 'react-redux';
import {setToken} from '../redux/ReduxPersist/UserDetails';
import {useIsFocused} from '@react-navigation/native';
import {drawerDataApiCall} from '../redux/ThunkToolkit/DrawerDataApi/DrawerData';
import {color} from 'react-native-reanimated';
import {logOutApi} from '../auth/Auth';
import { setFavouriteList } from '../redux/ReduxPersist/FavouriteSlice';

export const CustomDrawerComponent = (props, navigation) => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.userDetails.token);

  //   const token = useSelector(state => state.userDetails.token);
  //   const dispatch = useDispatch();
  //   const data = useSelector(state => state.drawerData.data);
  // const log = () => {
  //   props.navigation.goBack();
  //   Alert.alert('', 'Are you sure want to Logout?', [
  //     {
  //       text: 'Cancel',
  //       onPress: () => {},
  //     },
  //     {
  //       text: 'Logout',
  //       // onPress: () => {
  //       //   dispatch(setToken(null));
  //       // },
  //     },
  //   ]);
  // };
  // const focus = useIsFocused();

  //   useLayoutEffect(() => {
  //     dispatch(drawerDataApiCall(token));
  //   }, [focus]);

  return (
    <View style={{flex:1}}>

      <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../assets/images/sidemenu_background.png')}
          resizeMode="cover"
          style={{flex: 1, height: 800, marginTop: -5,width:"100%"}}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
            }}>
            <Image
              source={require('../assets/images/profiledummy.png')}
              style={styles.image}
            />
            {token?(
               <Text style={styles.name}>Tanvi Vernekar</Text>
            ):(
              <TouchableOpacity onPress={()=>props.navigation.navigate('SignIn')}>
                <Text style={styles.name}>Login</Text>
            </TouchableOpacity>
            )}
            
          </View>

          <View style={{marginTop: 35}}>
            {token ? (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('FavouriteScreen');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    margin: 20,
                    marginLeft: 40,
                    marginBottom: 30,
                  }}>
                  <Image
                    source={require('../assets/images/favourite_icon_unselected.png')}
                    style={styles.menuimg}
                  />
                  <Text style={styles.menutext}>Favourites</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  margin: 20,
                  marginLeft: 40,
                  marginBottom: 30,
                }}>
                <Image
                  source={require('../assets/images/favourite_icon_unselected.png')}
                  style={styles.menuimg1}
                />
                <Text style={styles.menutext1}>Favourites</Text>
              </View>
            )}

            <View
              style={{
                borderWidth: 0.3,
                borderColor: 'grey',
                marginHorizontal: 25,
                marginBottom: 10,
              }}
            />

            {token ? (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate('FeedBackScreen');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    margin: 20,
                    marginLeft: 40,
                    marginTop: 25,
                    marginBottom: 30,
                  }}>
                  <Image
                    source={require('../assets/images/feedback.png')}
                    style={styles.menuimg}
                  />
                  <Text style={styles.menutext}>FeedBack</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  margin: 20,
                  marginLeft: 40,
                  marginTop: 25,
                  marginBottom: 30,
                }}>
                <Image
                  source={require('../assets/images/feedback.png')}
                  style={styles.menuimg1}
                />
                <Text style={styles.menutext1}>FeedBack</Text>
              </View>
            )}

            <View
              style={{
                borderWidth: 0.3,
                borderColor: 'grey',
                marginHorizontal: 25,
                marginBottom: 10,
              }}
            />

            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('AboutUsScreen');
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  margin: 20,
                  marginLeft: 40,
                  marginTop: 25,
                  marginBottom: 30,
                }}>
                <Image
                  source={require('../assets/images/about.png')}
                  style={styles.menuimg}
                />
                <Text style={styles.menutext}>About us</Text>
              </View>
            </TouchableOpacity>
            <View
              style={{
                borderWidth: 0.3,
                borderColor: 'grey',
                marginHorizontal: 25,
                marginBottom: 10,
              }}
            />
             <View
              style={{
                borderWidth: 0.3,
                borderColor: 'grey',
                marginHorizontal: 25,
                marginBottom: 10,
              }}
            />

            {token ? (
              <TouchableOpacity
                onPress={async () => {
                  const res = await logOutApi(token);
                  dispatch(setToken(null));
                  dispatch(setFavouriteList(null))
                  props.navigation.navigate('SignIn');
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    margin: 20,
                    marginLeft: 40,
                    marginTop: 25,
                    marginBottom: 30,
                  }}>
                  <Image
                    source={require('../assets/images/logout.png')}
                    style={styles.menuimg}
                  />
                  <Text style={styles.menutext}>Logout</Text>
                </View>
              </TouchableOpacity>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  margin: 20,
                  marginLeft: 40,
                  marginTop: 25,
                  marginBottom: 30,
                }}>
                <Image
                  source={require('../assets/images/logout.png')}
                  style={styles.menuimg1}
                />
                <Text style={styles.menutext1}>Logout</Text>
              </View>
            )}

            <View
              style={{
                borderWidth: 0.3,
                borderColor: 'grey',
                marginHorizontal: 25,
                marginBottom: 10,
              }}
            />
          </View>
        </ImageBackground>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  name: {
    fontFamily: 'Avenir Book',
    color: 'white',
    fontSize: 18,
    marginTop: 5,
  },
  menuimg: {
    height: 20,
    width: 24,
    alignSelf: 'center',
  },
  menuimg1: {
    height: 20,
    width: 24,
    alignSelf: 'center',
    tintColor: 'grey',
  },
  menutext: {
    fontFamily: 'Avenir Medium',
    fontSize: 18,
    color: 'white',
    marginLeft: 12,
  },
  menutext1: {
    fontFamily: 'Avenir Medium',
    fontSize: 18,
    color: 'grey',
    marginLeft: 12,
  },
});
