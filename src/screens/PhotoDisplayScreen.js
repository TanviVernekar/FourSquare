import React from 'react';
import {View, StyleSheet, StatusBar, Image, Text, Platform, TouchableOpacity, ImageBackground} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

export const PhotoDisplayScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#310D20"
      />      
        <ImageBackground source={require('../assets/images/profiledummy.png')} resizeMode='cover' style={{flex:1}}>
      <ScrollView >
      <View style={styles.header}>

      
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image
          source={require('../assets/images/close_icon.png')}
          style={styles.back}
        />
        </TouchableOpacity>
     
            <Text style={styles.text}>Attill</Text>
        <TouchableOpacity>
        <Image source={require('../assets/images/share.png')} style={{alignSelf:'center',marginRight:20,color:'white', marginTop: Platform.OS === 'ios' ? 55 :40}}/>
        </TouchableOpacity>
      </View>

      <View style={styles.btmview}>
        <Image source={require('../assets/images/profiledummy.png')} style={styles.btmimage}/>
        <View style={{marginTop:10}}>
            <Text style={styles.text}>Saish Balu</Text>
            <Text style={styles.text2}>Added May 12,2010</Text>
        </View>
      </View>
      </ScrollView>
      </ImageBackground>

  
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

    flexDirection: 'row',
   
    justifyContent:'space-between',
    marginTop:15
  },
  back: {
    height: 20,
    width: 20,
    // alignSelf:'center'
    marginTop: Platform.OS === 'ios' ? 55 : 45,
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
  btmview:{
    height:110,
    borderWidth:0.3,
    backgroundColor:'#000000',
    opacity:0.8,
    marginTop:600,
    flexDirection:'row'
   
  },
  btmimage:{
    height:60,
    width:60,
    borderRadius:50,
    marginHorizontal:25,
    marginVertical:15
  },
  text:{
    fontFamily:'Avenir Medium',
    fontSize:18,
    color:'white',

  },
  text2:{
    fontFamily:'Avenir Medium',
    fontSize:16,
    color:'white',
    lineHeight:19

  }
  
});
