import React from 'react';
import {
  View,
  StatusBar,
  ImageBackground,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button2, Buttons } from '../components/Buttons';
import { MapScreen } from './MapScreen';

export const DetailsScreen = ({navigation}) => {
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
          source={require('../assets/images/hotel.png')}
          style={{width: '100%', height: 300}}>
          <View style={styles.image}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
              <Image
                source={require('../assets/images/back.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Atill</Text>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity>
                <Image
                  source={require('../assets/images/share.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('../assets/images/favourite.png')}
                  style={styles.icon2}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.textbtm}>
            <Text style={styles.btmtext}>
              {' '}
              Indian Restuarant,Chinese Restuarant, and Italian Restuarant.
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.middleContainer}>
          <TouchableOpacity>
            <View>
              <Image
                source={require('../assets/images/rating_icon.png')}
                style={styles.middleIcon}
              />
              <Text style={styles.middletext}>Rating</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate('PhotosScreen')}>
            <View>
              <Image
                source={require('../assets/images/photo_icon.png')}
                style={styles.middleIcon}
              />
              <Text style={styles.middletext}>Photos</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>{navigation.navigate('ReviewScreen')}}>
            <View>
              <Image
                source={require('../assets/images/review_icon.png')}
                style={styles.middleIcon}
              />
              <Text style={styles.middletext}>Review</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{borderWidth:0.3,marginHorizontal:25,color:'#8D8D8D',opacity:0.1,marginTop:15}}/>
        <View style={styles.btm}>
            <Text style={styles.overview}>Overview</Text>
            <Text style={styles.desp}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. </Text>
        </View>
        <View style={{height:200,width:"100%"}}>
           <MapScreen/>
        </View>
        <Button2 text='Add Review'/>
      </View>
      </ScrollView>
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
    marginLeft: 30,
  },
  textbtm: {
    marginHorizontal: 35,
    marginTop: 115,
  },
  btmtext: {
    textAlign: 'center',
    fontFamily: 'Avenir Book',
    fontSize: 18,
    color: '#FFFFFF',
    lineHeight: 24,
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
  btm:{
    marginHorizontal:23,
    marginTop:15,
    marginBottom:5
  },
  overview:{
    fontFamily:'Avenir Book',
    fontSize:18,
    color:'#351347',
    lineHeight:36,
    fontWeight:'500',
    marginBottom:5
  },
  desp:{
    fontFamily:'Avenir Book',
    fontSize:16,
    color:'#8D8D8D',
    lineHeight:23,
    textAlign:'justify',
    letterSpacing:0.2
  }
});
