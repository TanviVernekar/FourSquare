import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators ,createStackNavigator} from '@react-navigation/stack'
import { RegisterLoginStack } from './RegisterLoginStack';
import { HomeStack } from './HomeStack';
import { DrawerNav } from './DrawerNav';


const Stack = createStackNavigator();

export const Route=()=>{
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="RegisterLoginStack" component={RegisterLoginStack} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} />
         <Stack.Screen name="HomeStack" component={HomeStack} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} />
           {/* <Stack.Screen name="DrawerNav" component={DrawerNav} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}