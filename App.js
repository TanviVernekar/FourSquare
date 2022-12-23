import React from 'react'
import { View } from 'react-native'
import {SignIn} from './src/screens/SignIn'
import {SignUp} from './src/screens/SignUp'
import VerificationScreen from './src/screens/VerificationScreen'
import ForgotPassword from './src/screens/CreateNewPassword'
import {RegisterLoginStack} from './src/navigation/RegisterLoginStack'
import {HomeScreen} from './src/screens/HomeScreen'
import { AboutUsScreen } from './src/screens/AboutUsScreen'
import { DetailsScreen } from './src/screens/DetailsScreen'
import { ReviewScreen } from './src/screens/ReviewScreen'
import {Route} from './src/navigation/Route'
import { FeedBackScreen } from './src/screens/FeedBackScreen'
import { FavouriteScreen } from './src/screens/FavouriteScreen'


export default App=()=> {
  return (
   <View style={{flex:1}}>
    {/* <VerificationScreen/> */}
    {/* <SignUp/> */}
    {/* <SignIn/> */}
    {/* <ForgotPassword/> */}
    {/* <RegisterLoginStack/> */}
    {/* <HomeScreen/> */}
    {/* <AboutUsScreen/> */}
    {/* <DetailsScreen/> */}
    {/* <ReviewScreen/> */}
    <Route/>
    {/* <FeedBackScreen/> */}
    {/* <FavouriteScreen/> */}
    
   </View>
  )
}
