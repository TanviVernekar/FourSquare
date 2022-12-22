import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators ,createStackNavigator} from '@react-navigation/stack'
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { FeedBackScreen } from '../screens/FeedBackScreen';
import { ReviewScreen } from '../screens/ReviewScreen';
import { AddReviewScreen } from '../screens/AddReviewScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { FilterScreen } from '../screens/FilterScreen';
import { AboutUsScreen } from '../screens/AboutUsScreen';
import { FavouriteScreen } from '../screens/FavouriteScreen';
import { PhotosScreen } from '../screens/PhotosScreen';
import { PhotoDisplayScreen } from '../screens/PhotoDisplayScreen';


const Stack = createStackNavigator();

export const HomeStack=()=>{
  return (

      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} />
            <Stack.Screen name="FeedBackScreen" component={FeedBackScreen} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} />
             <Stack.Screen name="ReviewScreen" component={ReviewScreen} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} />
                <Stack.Screen name="AddReviewScreen" component={AddReviewScreen} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} />
                 <Stack.Screen name="SearchScreen" component={SearchScreen} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} />
                 <Stack.Screen name="FilterScreen" component={FilterScreen} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} />
                <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} />
           <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} />
         <Stack.Screen name="PhotosScreen" component={PhotosScreen} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} />
         <Stack.Screen name="PhotoDisplayScreen" component={PhotoDisplayScreen} options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} />
      </Stack.Navigator>
  );
}