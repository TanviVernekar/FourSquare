import React from 'react';
import {View, StyleSheet, StatusBar, Image, Text, Platform, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

export const PhotosScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#310D20"
      />
      <ScrollView>

      
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
        <Image
          source={require('../assets/images/back.png')}
          style={styles.back}
        />
        </TouchableOpacity>
     
            <Text style={styles.text}>Atill</Text>
        <TouchableOpacity>
        <Image source={require('../assets/images/aad_photo_iconn.png')}  style={{alignSelf:'center',marginRight:20,color:'white', marginTop: Platform.OS === 'ios' ? 55 :50,height:18,width:25}}/>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',display:'flex',flexWrap:'wrap'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('PhotoDisplayScreen')}>

        <Image source={require('../assets/images/profiledummy.png')} style={styles.image}/>
        </TouchableOpacity>

      </View>
  
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
    height: Platform.OS === 'ios' ? 95 : 90,
    backgroundColor: '#310D20',
    flexDirection: 'row',
   
    justifyContent:'space-between'
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
  image:{
    height:120,
    width:120,
    borderColor:'black',
    borderWidth:4
  }

});

