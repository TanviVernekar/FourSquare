import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

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
export const ReviewComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.listContainer}>
        <Image
          source={require('../assets/images/profiledummy.png')}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={{marginLeft: 12,marginTop:5}}>
          <Text style={styles.name}>Saish Balu</Text>

          <View style={{width:"78%",marginTop:3}}>
            <Text style={styles.text}>Must try crab soup and oyesters cooked in ghee!! </Text>
          </View>
        </View>
        <View
          style={{
            position: 'absolute',
            top: 10,
            flexDirection: 'row',
            right: 20,
          }}>
        <Text style={{color:'#B8B8B8'}}>June 24,2015</Text>
        </View>
      </View>
      <View style={{borderWidth:0.3,borderColor:'#CCCCCC'}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginTop: 5,
    // borderWidth:1
  },
  listContainer: {
    backgroundColor: '#FFFFFF',
    // borderWidth:1,
    // marginHorizontal: 6,
    // borderRadius: 5,
    height: 110,
    // width: 365,

    // shadowColor: 'grey',
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // shadowRadius: 3,
    // shadowOpacity: 0.4,
    padding: 10,
    // elevation: 5,
    // marginTop: 6,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 130,

    justifyContent: 'flex-start',
    borderRadius: 100,
    height: 55,
    width: 55,
    margin:10
  },
  name: {
    fontFamily: 'Avenir Medium',
    color: '#000000',
    fontWeight: '600',
    fontSize: 20,
    marginTop: -5,
  },
  rating: {
    height: 23,
    width: 25,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#76B947',
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Avenir Book',
    fontSize: 15,
    color: '#7C7C7F',
    fontWeight: '400',
    lineHeight: 19,
  },
});
