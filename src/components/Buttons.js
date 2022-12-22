import React from 'react'
import { View ,StyleSheet,Text,TouchableOpacity} from 'react-native'


export const Buttons=({onPress,text,disable})=> {
  return (
    <TouchableOpacity onPress={onPress} style={styles.body1} disabled={disable}>
    <View>
      <Text style={styles.text1}>{text}</Text>
    </View>
  </TouchableOpacity>
  )
}
export const Button2=({onPress,text,disable})=> {
  return (
    <TouchableOpacity onPress={onPress} style={styles.body2} disabled={disable}>
    <View>
      <Text style={styles.text2}>{text}</Text>
    </View>
  </TouchableOpacity>
  )
}
const styles=StyleSheet.create({
    body1: {
     
        height: 46,
        borderRadius: 6,
        borderWidth:0.5,
        borderColor:'white',
        justifyContent:'center',
        marginTop:40,
        alignItems:"center"
      },
      text1: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
        color: 'white',
        // marginTop: Platform.OS == 'ios' ? 4 :-2,
      },
      body2: {
     
        height: 55,
     
   

        justifyContent:'center',

        alignItems:"center",
        backgroundColor:'#310D20',
      },
      text2: {
        textAlign: 'center',
        fontSize: 17,
        fontWeight: Platform.OS == 'ios' ? 'bold':'normal',
        color: '#F7F7F7',
        fontFamily:'Avenir Medium'
        // marginTop: Platform.OS == 'ios' ? 4 :-2,
      },
})
