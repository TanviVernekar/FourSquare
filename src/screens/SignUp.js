import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Platform,
  TouchableOpacity,
  StatusBar,

} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {TextField} from 'rn-material-ui-textfield';
import {Buttons} from '../components/Buttons';
import {ScrollView} from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast'

export const SignUp = ({navigation}) => {
  const signUpValidationScheme = yup.object().shape({
    email: yup.string().email('invalid email').required(''),
    mobileno: yup
      .string()
      .matches(/(\d){10}\b/, 'Enter a valid mobile number')
      .required('mobile number is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required(''),
    confirmpassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Password do not match')
      .required(''),
  });
  return (
    <View style={styles.mainContainer}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
      />
      <ImageBackground
        source={require('../assets/images/loginbg.png')}
        resizeMode="cover"
        style={styles.bgimage}>
        <View style={{marginHorizontal: 25}}>
          <ScrollView>
            <Image
              source={require('../assets/images/logo.png')}
              resizeMode="contain"
              style={styles.logo}
            />

            <Formik
              validationSchema={signUpValidationScheme}
              initialValues={{
                username: '',
                password: '',
              }}
              onSubmit={ async values => {
                const obj = {
                  email: values.email,
                  mobileno:values.mobileno,
                  password: values.password,
                  confirmpassword:values.confirmpassword
                };

                
                try {
                  const response = await axios.post(
                    'https://new-project-henna.vercel.app/api/user',
                    obj,
                  );
                  console.log(response)
                  
                  navigation.navigate('SignIn');
                  console.log('created')
                  // if (
                  //   response.data.message === 'Password Changed Successfully'
                  // ) {
                  //   navigation.navigate('Password Changed Successfully');
                  // }
                } catch (error) {
                  // Toast.show(error,Toast.SHORT)
                   console.log(error.response.data.message);
                   if(error.response.data.message=='User with this email already present')
                   {
                    Toast.show('User with this email already present',Toast.SHORT)
                   }
                }
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                isValid,
              }) => (
                <>
                  <View style={{marginTop: 45,marginBottom:50}}>
                    <TextField
                      label="Email"
                      name="email"
                      keyboardType="email-address"
                      formatText={this.formatText}
                      onSubmitEditing={this.onSubmit}
                      ref={this.fieldRef}
                      textColor="#FFFFFF"
                      tintColor="#b5abab"
                      baseColor="#b5abab"
                      lineWidth={1}
                      autoCapitalize="none"
                      labelFontSize={15}
                      labelOffset={{y1: -5, y0: -2, x1: 10}}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
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
                        // paddingBottom: 10,
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
                    {errors.email && (
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'red',
                          textAlign: 'center',
                        }}>
                        {errors.email}
                      </Text>
                    )}
                    <TextField
                      label="Mobile Number"
                      name="mobileno"
                      keyboardType="default"
                      secureTextEntry={true}
                      textColor="#FFFFFF"
                      tintColor="#b5abab"
                      baseColor="#b5abab"
                      lineWidth={1}
                      autoCapitalize="none"
                      labelFontSize={15}
                      labelOffset={{y1: -5, y0: -2, x1: 10}}
                      onChangeText={handleChange('mobileno')}
                      onBlur={handleBlur('mobileno')}
                      value={values.mobileno}
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
                    {errors.mobileno && (
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'red',
                          textAlign: 'center',
                        }}>
                        {errors.mobileno}
                      </Text>
                    )}

                    <TextField
                      label="Password"
                      name="password"
                      keyboardType="default"
                      secureTextEntry={true}
                      textColor="#FFFFFF"
                      tintColor="#b5abab"
                      baseColor="#b5abab"
                      lineWidth={1}
                      autoCapitalize="none"
                      labelFontSize={15}
                      labelOffset={{y1: -5, y0: -2, x1: 10}}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
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
                    {errors.password && (
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'red',
                          textAlign: 'center',
                        }}>
                        {errors.password}
                      </Text>
                    )}
                    <TextField
                      label="Confirm Password"
                      name="confirmpassword"
                      keyboardType="default"
                      secureTextEntry={true}
                      textColor="#FFFFFF"
                      tintColor="#b5abab"
                      baseColor="#b5abab"
                      lineWidth={1}
                      autoCapitalize="none"
                      labelFontSize={15}
                      labelOffset={{y1: -5, y0: -2, x1: 10}}
                      onChangeText={handleChange('confirmpassword')}
                      onBlur={handleBlur('confirmpassword')}
                      value={values.confirmpassword}
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
                    {errors.confirmpassword && (
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'red',
                          textAlign: 'center',
                        }}>
                        {errors.confirmpassword}
                      </Text>
                    )}
                  </View>
                  <Buttons text='Login' onPress={()=>{handleSubmit()}} disable={!isValid}/>
                </>
              )}
            </Formik>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  bgimage: {
    flex: 1,
  },
  skiptext: {
    fontSize: 15,
    color: '#FFFFFF',
    marginTop: 10,
  },

  logo: {
    alignSelf: 'center',
    width: 180,
    marginTop: Platform.OS === 'ios' ? 90 : 90,
  },
  fgttext: {
    color: '#b5abab',
    alignSelf: 'center',
    marginTop: 35,
  },
  createText: {
    size: 28,
    color: 'white',
    marginTop: 40,
    alignSelf: 'center',
  },
  orView: {
    backgroundColor: '#3B3C57',
    width: 35,
    height: 35,
    borderRadius: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  or: {
    alignSelf: 'center',
    color: 'white',
    size: 22,
  },
  fbimg: {
    width: 170,
    height: 47,
    borderRadius: 6,
    marginRight: 12,
  },
});
