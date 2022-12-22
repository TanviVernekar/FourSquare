import React from 'react';
import {View, StyleSheet, StatusBar, Image, Text, Platform, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import { ReviewComponent } from '../components/ReviewComponent';




const data = [
  {
    id: 1,
    name: 'Attil',
    type: 'Indian',
    distance: '4.5Km',
    address: 'manipal',
  },
  {
    id: 2,
    name: 'Attil',
    type: 'Indian',
    distance: '4.5Km',
    address: 'manipal',
  },
  {
    id: 3,
    name: 'Attil',
    type: 'Indian',
    distance: '4.5Km',
    address: 'manipal',
  },
];
export const ReviewScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#310D20"
      />
      <ScrollView>

      
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
        <Image
          source={require('../assets/images/back.png')}
          style={styles.back}
        />
        </TouchableOpacity >
     
            <Text style={styles.text}>Attill</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate('AddReviewScreen')}}>
        <Image source={require('../assets/images/add_review.png')} style={{alignSelf:'center',marginRight:20,color:'white', marginTop: Platform.OS === 'ios' ? 55 :45,height:25,width:20}}/>
        </TouchableOpacity>
      </View>
     
      {data.map(item=>(
        <View key={item.id}>
          <ReviewComponent/>
        </View>
      ))}  
      
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',

  },
  header: {
    height: Platform.OS === 'ios' ? 95 : 95,
    backgroundColor: '#310D20',
    flexDirection: 'row',
   
    justifyContent:'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  back: {
    height: 25,
    width: 25,
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

});
