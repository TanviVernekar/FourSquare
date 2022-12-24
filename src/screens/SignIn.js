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
  ScrollView,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {TextField} from 'rn-material-ui-textfield';
import {Buttons} from '../components/Buttons';
import Toast from 'react-native-simple-toast'
import { setToken } from '../redux/ReduxPersist/UserDetails';
import { useDispatch } from 'react-redux';
import { useRoute } from '@react-navigation/native';



export const SignIn = ({navigation}) => {
  const signInValidationScheme = yup.object().shape({
    email: yup.string().email('invalid email').required(''),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required(''),
  });

  const dispatch= useDispatch()
  const route=useRoute();
  const handleProcess = async () => {
    const obj = {
     email:route.params.email
    };
    console.log("weuhfwh")
    
      try {
        const response = await axios.get(
          'https://new-project-henna.vercel.app/api/otp?email=${obj}',
        );
        console.log('forgot pwd', response.data);
        Toast.show(response.data.message, Toast.SHORT);
        navigation.navigate('VerificationScreen',)
        // if (response.data.message === 'OTP Valid For 2 Minutes') {
        //   // navigation.navigate('Verification', {obj});
        //   setShowError(false);
        //   setText('');
        // } else {
        //   setShowError(true);
        // }
      } catch (error) {
        console.log(error.response.data);
        // setShowError(true);
      }
  
  };
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
        <View style={{marginHorizontal: 20}}>
          <ScrollView>
            <TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('DrawerNav');
                }}>
                <View style={styles.headerview}>
                  <Text style={styles.skiptext}>Skip</Text>
                  <Text style={{fontSize: 25, color: 'white', marginTop: 3}}>
                    {' '}
                    {'>'}
                  </Text>
                </View>
              </TouchableOpacity>
            </TouchableOpacity>
            <Image
              source={require('../assets/images/logo.png')}
              resizeMode="contain"
              style={styles.logo}
            />

            <Formik
              validationSchema={signInValidationScheme}
              initialValues={{
                username: '',
                password: '',
              }}
              onSubmit={async values => {
                const obj = {
                  email: values.email,
                  password: values.password,
                };

                try {
                  const response = await axios.post(
                    'https://new-project-henna.vercel.app/api/user/login',
                    obj,
                  );
                  // if (response.headers["jwt-token"]) {
                  //   dispatch(setToken(response.headers["jwt-token"]));
                  //   dispatch(setNewUser(false));
                  // } else {
                  //   setWarning(true);
                  // }
                 console.log(response)
                  if(response){
                    console.log("///",response.headers.authorization)
                    const token = response.headers.authorization
                    dispatch(setToken(token))
                    navigation.navigate('DrawerNav')
                    console.log('logged in')
                  }
                } catch (error) {
                  console.log(error.response.data);
                  // setWarning(true);  
                  if(error.response.data.message=='Invalid email or password')
                  {
                   Toast.show('Invalid email or password',Toast.SHORT)
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
                  <View style={{marginTop: 45}}>
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
                    <TouchableOpacity
                      onPress={() => {handleProcess()}}>
                      <Text style={styles.fgttext}>Forgot Password?</Text>
                    </TouchableOpacity>
                  </View>
                  <Buttons
                    text="Login"
                    disable={!isValid}
                    onPress={() => {handleSubmit()}}
                  />
                </>
              )}
            </Formik>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.createText}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.orView}>
              <Text style={styles.or}>OR</Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 40}}>
              <Image
                source={require('../assets/images/facebook.png')}
                style={styles.fbimg}
              />
              <Image
                source={require('../assets/images/google.png')}
                style={styles.fbimg}
              />
            </View>
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
  headerview: {
    marginTop: 30,
    flexDirection: 'row',
    marginLeft: 300,
  },
  logo: {
    alignSelf: 'center',
    width: 180,
    marginTop: Platform.OS === 'ios' ? 85 : 60,
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
