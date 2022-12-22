import React from 'react'
import { View,StyleSheet,Text,Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ListComponent } from '../components/ListComponent'


const data=[
  {
    id:1,
    name:'Attil',
    type:'Indian',
    source:require('../assets/images/hotel.png'),
    distance:'4.5Km',
    address:'manipal'
  },
  {
    id:2,
    name:'Attil',
    type:'Indian',
    source:require('../assets/images/hotel.png'),
    distance:'4.5Km',
    address:'manipal'
  },
  {
    id:3,
    name:'Attil',
    type:'Indian',
    source:require('../assets/images/hotel.png'),
    distance:'4.5Km',
    address:'manipal'
  },
  {
    id:4,
    name:'Attil',
    type:'Indian',
    source:require('../assets/images/hotel.png'),
    distance:'4.5Km',
    address:'manipal'
  },
  {
    id:5,
    name:'Attil',
    type:'Indian',
    source:require('../assets/images/hotel.png'),
    distance:'4.5Km',
    address:'manipal'
  },
  ]
export const CoffeeScreen=({navigation})=> {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
      {data.map(item=>(
        <View key={item.id}>
          <ListComponent navigation={navigation}/>
        </View>
      ))}  
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // marginTop: 2,
    // borderWidth:1
  },
})
