import React from 'react'
import { View,Text,StyleSheet, ImageBackground,Image, Platform, TouchableOpacity, StatusBar } from 'react-native'
import { Formik } from 'formik'
import * as yup from 'yup';
import axios from 'axios';
import { TextField } from 'rn-material-ui-textfield'
import {Buttons} from '../components/Buttons'
import { ScrollView } from 'react-native-gesture-handler';

export const VerificationScreen=({navigation})=> {


  
  return (
    <View style={styles.mainContainer}>
    <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "transparent" translucent = {true}/>
    <ImageBackground source={require('../assets/images/loginbg.png')} resizeMode="cover" style={styles.bgimage}>
        <View style={{marginHorizontal:20}}>
        <ScrollView>
        <Image source={require('../assets/images/logo.png')} resizeMode="contain" style={styles.logo}/>
        <View style={styles.textView}>

        <Text style={styles.text}>We have sent you an OTP.</Text>
        <Text style={styles.text}>Please enter it below.</Text>
        </View>
        <TextField
            label="Enter OTP"
            name="otp"
            keyboardType="numeric"
            // formatText={this.formatText}
            // onSubmitEditing={this.onSubmit}
            // ref={this.fieldRef}
            textColor="#FFFFFF"
            tintColor="#b5abab"
            baseColor="#b5abab"
            lineWidth={1}
            autoCapitalize="none"
            labelFontSize={15}
            labelOffset={{y1: -5,
                y0:-2,
                x1:10}}
            //   onChangeText={handleChange('email')}
            //   onBlur={handleBlur('email')}
            //   value={values.email}
            autoCorrect={false}
            style={{
              fontFamily: 'Avenir Book',
              fontSize: 16,
              marginBottom: 5,
              textAlign: 'center',
              marginTop: 10,
            }}
            // color:'#b5abab'
            labelTextStyle={{
              textAlign: 'center',
              //   paddingBottom: 10,
              color: '#b5abab',
              fontFamily: 'Avenir Book',
              alignSelf: 'center',
              height: 50,
              paddingTop: 2,
            }}
            containerStyle={
              {
                // height:200,
                // borderWidth:1,
              }
            }
          />
        <Text style={styles.resendtext}>Resend OTP</Text>
      
        <Buttons text='Get In !' onPress={()=>navigation.navigate('SignIn')}/>
      
       </ScrollView>
       </View>
    </ImageBackground>
   </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        
    },
    bgimage:{
        flex:1,
        
    },

    logo:{
        alignSelf:"center",
        width:180,
        marginTop:Platform.OS==='ios'?85:85
        
    },
    textView:{
        marginTop:50,
        marginBottom:35
    },
    text:{
      fontSize:19,
      alignSelf:"center",
      lineHeight:28,
      color:'white',
    },
    resendtext:{
        color:"#b5abab",
        alignSelf:"center",
        marginTop:30,
        fontSize:16
    },
    createText:{
        size:28,
        color:"white",
        marginTop:40,
        alignSelf:'center'
    },
   
})
