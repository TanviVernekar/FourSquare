import React from 'react'
import { View,StyleSheet,Text,Image, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'



const data=[
{
  id:1,
  name:'Attil',
  type:'Indian',
  distance:'4.5Km',
  address:'manipal'
},
{
  id:2,
  name:'Attil',
  type:'Indian',
  distance:'4.5Km',
  address:'manipal'
},
{
  id:3,
  name:'Attil',
  type:'Indian',
  distance:'4.5Km',
  address:'manipal'
},
]
export const ListComponent=({navigation})=> {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={()=>{navigation.navigate('DetailsScreen')}}>
        <View style={styles.listContainer}>
        <Image source={require('../assets/images/hotel.png')} style={styles.image} resizeMode='cover'/>
        <View style={{marginLeft:12}}>
        <Text style={styles.name}>Attil</Text>
        <View style={styles.rating}>
            <Text style={{fontSize:14,color:'white',fontFamily:'Avenir Book'}}>6.5</Text>
        </View>
        <View style={{flexDirection:"row"}}>

            <Text style={styles.text}>Indian </Text>
            <Text style={styles.text}>.₹₹₹₹ </Text>
            <Text style={styles.text}>6.7km</Text>
        </View>
        <Text style={styles.text}>Tiger Circle Manipal </Text>
        </View>
        <View style={{position:'absolute',top:7,flexDirection:'row',right:10}}>
            <TouchableOpacity>

        <Image source={require('../assets/images/favourite_star.png')} style={{height:20,width:20}}/>
            </TouchableOpacity>
        </View>
        </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // marginTop: 2,
    // borderWidth:1
  },
  listContainer: {

    backgroundColor: '#FFFFFF',
    marginHorizontal:6,
    // borderRadius: 5,
    height: 130,
    // width: 365,
  
   
 
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    padding: 10,
    elevation: 5,
    marginTop: 6,

    flexDirection:"row"
  },
  image:{
    width:120,
    height:130,
    marginTop:-10,
    marginLeft:-10,
    justifyContent:"flex-start"
  },
  name:{
    fontFamily:'Avenir Medium',
    color:'#1D1D26',
    fontWeight:'600',
    fontSize:20,
    marginTop:-5
  },
  rating:{
    height:23,
    width:25,
    borderRadius:4,
    justifyContent:"center",
    alignItems:"center",
    marginTop:25,
    backgroundColor:'#76B947',
    marginBottom:10
  },
  text:{
    fontFamily:'Avenir Book',
    fontSize:14,
    color:'#87797F',
    fontWeight:'400',
    lineHeight:17
  }

})