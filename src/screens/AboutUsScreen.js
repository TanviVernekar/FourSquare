import React, { useEffect, useState } from 'react';
import {View, StyleSheet, StatusBar, Image, Text, Platform, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { useDispatch, useSelector } from 'react-redux';
import { aboutUs } from '../auth/Auth';
import { setAboutstate } from '../redux/ReduxPersist/RatingSlice';

export const AboutUsScreen = ({navigation}) => {
  // const [about,setAbout]=useState()

  const dispatch=useDispatch()
  const token = useSelector(state => state.userDetails.token);
  const about = useSelector(state => state.ratingState.about);

  
  useEffect(()=>{
   aboutUs()
  },[])


  const aboutUs=async()=>{
    const res = await aboutUs(token)
    if(res){

      dispatch(setAboutstate(res))
    }
  }
  

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#310D20"
      />
      <ScrollView showsVerticalScrollIndicator={false}>

      
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
        <Image
          source={require('../assets/images/back.png')}
          style={styles.back}
        />
        </TouchableOpacity >
     
            <Text style={styles.text}>About us</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('HomeScreen')}}>
        <Icon name='home' size={25} style={{alignSelf:'center',marginRight:20,color:'white', marginTop: Platform.OS === 'ios' ? 55 :40}}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.desp}>
        {about?.data[0].about}
      </Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  header: {
    height: Platform.OS === 'ios' ? 95 : 80,
    backgroundColor: '#310D20',
    flexDirection: 'row',
   
    justifyContent:'space-between'
  },
  back: {
    height: 20,
    width: 20,
    // alignSelf:'center'
    marginTop: Platform.OS === 'ios' ? 55 : 35,
    marginLeft: 20,
  },
  text: {
    color: 'white',
    // lineHeight:20,
    fontSize: 20,
    fontFamily: 'Avenir Medium',
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ?30 :20,

  },
  desp:{
    fontFamily:'Avenir Book',
    fontSize:18,
    color:'#87797F',
    margin:20,
    textAlign:'justify',
    fontWeight:'500',
    lineHeight:28

  }
});
