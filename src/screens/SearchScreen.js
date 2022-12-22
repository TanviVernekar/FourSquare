import React,{useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text, TextInput, SafeAreaView} from 'react-native';

export const SearchScreen = () => {

    const [text, setText] = useState()
    const [changeText, setChangeText] = useState(null);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.header}>
        <View style={{marginTop:30,flexDirection:'row'}}>
        <TouchableOpacity>
        <Image source={require('../assets/images/back.png')} style={styles.back}/>
        </TouchableOpacity>

        <View style={{borderWidth:1}}>

        <View style={styles.inputview}>
            <Image source={require('../assets/images/Search_icon.png')}  style={styles.search}/>
            <TextInput 
            name='Search'
            placeholder='Search'
            value={text}
            onChangeText={setChangeText}>
            </TextInput>
        </View>
        </View>
        
        <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
          <Image
            source={require('../assets/images/filter.png')}
            style={styles.filter}
          />
        </TouchableOpacity>
        </View>
       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    height: Platform.OS === 'ios' ? 180 : 170,
    // backgroundColor: '#310D20',
    backgroundColor: 'pink',

    
    // borderWidth:1,
    // flexDirection: 'row',
    // justifyContent:'space-between',

  },
  back:{
    height:20,
    width:20,
    // marginTop:60
  },
  inputview:{
 
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    justifyContent:'space-between',
    height:40,
    width:40
   
  },
  search:{
    height:18,
    width:18
  },
  filter: {
    height: 25,
    width: 22,
    marginRight: 28,
  },
});
