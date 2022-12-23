import React from 'react';
import {Dimensions} from 'react-native';
import {CustomDrawerComponent} from '../components/CustomDrawerComponents'
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FavouriteScreen } from '../screens/FavouriteScreen';
import { FeedBackScreen } from '../screens/FeedBackScreen';
import { AboutUsScreen } from '../screens/AboutUsScreen';
import { HomeStack } from './HomeStack';

export const Drawer = createDrawerNavigator();

export const DrawerNav = ({navigation}) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: Dimensions.get('window').width / 1.25,
        },
      }}
      drawerContent={props => <CustomDrawerComponent {...props} />}>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          headerStyle: {
            height: 80,
          },
          headerShown: false,
          drawerIcon: ({color}) => <Icon name="home" size={20} color={color} />,
          drawerActiveBackgroundColor: null,
          drawerActiveTintColor: '#EA2626',
          drawerInactiveTintColor: '#373737',
          drawerLabelStyle: {
            fontSize: 16,
            // fontFamily: 'Proxima Nova',
            marginLeft: -13,
            height: Platform.OS === 'ios' ? 18 : 22,
            marginTop: Platform.OS === 'ios' ? 5 : 3,
          },
        }}
      />
      <Drawer.Screen
        name="FavouriteScreen"
        component={FavouriteScreen}
        options={{
          headerStyle: {
            height: 80,
          },
          headerShown: false,
          drawerIcon: ({color}) => <Icon name="home" size={20} color={color} />,
          drawerActiveBackgroundColor: null,
          drawerActiveTintColor: '#EA2626',
          drawerInactiveTintColor: '#373737',
          drawerLabelStyle: {
            fontSize: 16,
            // fontFamily: 'Proxima Nova',
            marginLeft: -13,
            height: Platform.OS === 'ios' ? 18 : 22,
            marginTop: Platform.OS === 'ios' ? 5 : 3,
          },
        }}
      />
      <Drawer.Screen
        name="FeedBackScreen"
        component={FeedBackScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Icon name="briefcase" size={18} color={color} />
          ),
          drawerActiveBackgroundColor: null,
          drawerActiveTintColor: '#EA2626',
          drawerInactiveTintColor: '#373737',
          drawerLabelStyle: {
            fontSize: 16,
            // fontFamily: 'Proxima Nova',
            marginLeft: -13,
            height: Platform.OS === 'ios' ? 18 : 22,
            marginTop: Platform.OS === 'ios' ? 5 : 3,
          },
        }}
      />
      <Drawer.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => (
            <Icons name="person-outline" size={18} color={color} />
          ),
          drawerActiveBackgroundColor: null,
          drawerActiveTintColor: '#EA2626',
          drawerInactiveTintColor: '#373737',
          drawerLabelStyle: {
            fontSize: 16,
            // fontFamily: 'Proxima Nova',
            marginLeft: -13,
            height: Platform.OS === 'ios' ? 18 : 22,
            marginTop: Platform.OS === 'ios' ? 5 : 3,
          },
        }}
      />
      {/* <Drawer.Screen
        name="Logout"
        component={Logout}
        options={{
          headerShown: false,
          drawerIcon: ({color}) => <Icon name="bell" size={18} color={color} />,
          drawerActiveBackgroundColor: null,
          drawerActiveTintColor: '#EA2626',
          drawerInactiveTintColor: '#373737',
          drawerLabelStyle: {
            fontSize: 16,
            fontFamily: 'Proxima Nova',
            marginLeft: -13,
            height: Platform.OS === 'ios' ? 18 : 22,
            marginTop: Platform.OS === 'ios' ? 5 : 3,
          },
        }}
      /> */}
   
    </Drawer.Navigator>
  );
};
