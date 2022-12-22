import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators ,createStackNavigator} from '@react-navigation/stack'
import { SignIn } from '../screens/SignIn';
import {SignUp} from '../screens/SignUp';
import {VerificationScreen} from '../screens/VerificationScreen';
import {CreateNewPassword} from '../screens/CreateNewPassword';


const Stack = createStackNavigator();

export const RegisterLoginStack=()=>{
  return (

      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignIn} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} />
     
        <Stack.Screen name="SignUp" component={SignUp} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}/>
    
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} />
     
        <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}/>
      </Stack.Navigator>
  );
}