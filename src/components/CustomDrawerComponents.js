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
import { color } from 'react-native-reanimated';

export const CustomDrawerComponent = props => {
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
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <ImageBackground source={require('../assets/images/sidemenu_background.png')} resizeMode='cover' style={{flex:1,height:800,marginTop:-5}}>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:40}}>

        <Image source={require('../assets/images/profiledummy.png')} style={styles.image}/>
        <Text style={styles.name}>Swaroop Kumar</Text>
          </View>

          <View style={{marginTop:35}}>

            <TouchableOpacity>
            <View style={{flexDirection:'row',margin:20,marginLeft:40,marginBottom:30}}>
              <Image source={require('../assets/images/favourite_icon_unselected.png')} style={styles.menuimg}/>
              <Text style={styles.menutext}>Favourites</Text>
            </View>
            </TouchableOpacity>
            <View style={{borderWidth:0.3,borderColor:'grey',marginHorizontal:25,marginBottom:10}}/>




            <TouchableOpacity>
            <View style={{flexDirection:'row',margin:20,marginLeft:40,marginTop:25,marginBottom:30}}>
              <Image source={require('../assets/images/feedback.png')} style={styles.menuimg}/>
              <Text style={styles.menutext}>FeedBack</Text>
            </View>
            </TouchableOpacity>
            <View style={{borderWidth:0.3,borderColor:'grey',marginHorizontal:25,marginBottom:10}}/>


            <TouchableOpacity>
            <View style={{flexDirection:'row',margin:20,marginLeft:40,marginTop:25,marginBottom:30}}>
              <Image source={require('../assets/images/about.png')} style={styles.menuimg}/>
              <Text style={styles.menutext}>About us</Text>
            </View>
            </TouchableOpacity>
            <View style={{borderWidth:0.3,borderColor:'grey',marginHorizontal:25,marginBottom:10}}/>


            <TouchableOpacity>
            <View style={{flexDirection:'row',margin:20,marginLeft:40,marginTop:25,marginBottom:30}}>
              <Image source={require('../assets/images/logout.png')} style={styles.menuimg}/>
              <Text style={styles.menutext}>Logout</Text>
            </View>
            </TouchableOpacity>
            <View style={{borderWidth:0.3,borderColor:'grey',marginHorizontal:25,marginBottom:10}}/>
          </View>

           
        </ImageBackground>
        
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
 image:{
  height:90,
  width:90,
  borderRadius:50
 },
 name:{
  fontFamily:'Avenir Book',
  color:'white',
  fontSize:18,
  marginTop:5
 },
 menuimg:{
  height:20,
  width:24,
  alignSelf:'center'
 },
 menutext:{
  fontFamily:'Avenir Medium',
  fontSize:18,
  color:'white',
  marginLeft:12
 }
});
