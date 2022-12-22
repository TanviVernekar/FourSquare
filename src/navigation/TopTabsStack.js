import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {CoffeeScreen} from '../screens/CoffeeScreen';
import {LunchTabScreen} from '../screens/LunchTabScreen';
import {PopularScreen} from '../screens/PopularScreen';
import {NearYouScreen} from '../screens/NearYouScreen';
import {TopPickScreen} from '../screens/TopPickScreen';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export const TopTabsStack = () => {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#87797F',
          tabBarStyle: {height:55, elevation: 0,backgroundColor:"#370F24"},
          tabBarIndicatorStyle: {
            height: 0,
          },
          tabBarItemStyle:{width:100},
          tabBarLabelStyle: {
            fontSize: 16,
            textTransform: 'none',
            fontFamily: Platform.OS === 'ios' ? 'Avenir Medium' : 'Avenir Medium',
            // lineHeight: 21,
            // fontWeight: '400',
            
          },
          // tabBarContentContainerStyle:{width:"100%"}
      
        }}
        sceneContainerStyle={{backgroundColor: '#E5E5E5'}}
        >
        <Tab.Screen name="Near You" component={NearYouScreen} />
        <Tab.Screen name="Toppick" component={TopPickScreen} />
        <Tab.Screen name="Popular" component={PopularScreen} />
        <Tab.Screen name="Lunch" component={LunchTabScreen} />
        <Tab.Screen name="Coffee" component={CoffeeScreen} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
};
