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
import Buttons from '../components/Buttons';
import {ScrollView} from 'react-native-gesture-handler';

export const CreateNewPassword = () => {
  const SignInValidationScheme = yup.object().shape({
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .min(6, ({min}) => `Password must be at least ${min} characters`)
      .required(''),
    confirmnewpassword: yup
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
        <View style={{marginHorizontal: 20}}>
          <ScrollView>
            <Image
              source={require('../assets/images/logo.png')}
              resizeMode="contain"
              style={styles.logo}
            />

            <Formik
              validationSchema={SignInValidationScheme}
              initialValues={{
                username: '',
                password: '',
              }}
              onSubmit={values => {
                const obj = {
                  newpassword: values.newpassword,
                  confirmnewpassword: values.confirmnewpassword,
                };
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
                  <View style={{marginTop: 45, marginBottom: 50}}>
                    <TextField
                      label="Enter Password"
                      name="password"
                      keyboardType="default"
                      secureTextEntry={true}
                      // formatText={this.formatText}
                      // onSubmitEditing={this.onSubmit}
                      // ref={this.fieldRef}
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
                      name="confirmnewpassword"
                      keyboardType="default"
                      secureTextEntry={true}
                      textColor="#FFFFFF"
                      tintColor="#b5abab"
                      baseColor="#b5abab"
                      lineWidth={1}
                      autoCapitalize="none"
                      labelFontSize={15}
                      labelOffset={{y1: -5, y0: -2, x1: 10}}
                      onChangeText={handleChange('confirmnewpassword')}
                      onBlur={handleBlur('confirmnewpassword')}
                      value={values.confirmnewpassword}
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
                    {errors.confirmnewpassword && (
                      <Text
                        style={{
                          fontSize: 10,
                          color: 'red',
                          textAlign: 'center',
                        }}>
                        {errors.confirmnewpassword}
                      </Text>
                    )}
                    <TouchableOpacity></TouchableOpacity>
                  </View>
                  <Buttons text="Submit" />
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
  logo: {
    alignSelf: 'center',
    width: 180,
    marginTop: Platform.OS === 'ios' ? 110 : 90,
  },
  fgttext: {
    color: '#b5abab',
    alignSelf: 'center',
    marginTop: 35,
  },
});
