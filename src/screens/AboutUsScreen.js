import React from 'react';
import {View, StyleSheet, StatusBar, Image, Text, Platform, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons'

export const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#310D20"
      />
      <ScrollView>

      
      <View style={styles.header}>
        <TouchableOpacity>
        <Image
          source={require('../assets/images/back.png')}
          style={styles.back}
        />
        </TouchableOpacity>
     
            <Text style={styles.text}>About us</Text>
        <TouchableOpacity>
        <Icon name='home' size={25} style={{alignSelf:'center',marginRight:20,color:'white', marginTop: Platform.OS === 'ios' ? 55 :40}}/>
        </TouchableOpacity>
      </View>
      <Text style={styles.desp}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
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
