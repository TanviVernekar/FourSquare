import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  Platform,
  TouchableOpacity,
  Alert
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useDispatch, useSelector} from 'react-redux';
import { getParticularPhotos } from '../auth/Auth';
import { setPhotoDetails } from '../redux/ReduxPersist/ParticularPlace';

export const PhotosScreen = ({navigation}) => {


  const dispatch= useDispatch()
  const token = useSelector(state => state.userDetails.token);

  const details = useSelector(state => state.particularPlace.details);
  const photos = useSelector(state => state.particularPlace.photos);
  const placeId= photos?.data?._id
  console.log("777",photos)
  
  const createTwoButtonAlert = () =>
  Alert.alert('', 'Please Login to Continue!', [
    {
      text: 'Login',
      onPress: () => {
        navigation.navigate('SignIn');
      },
    },
    {
      text: 'Cancel',
      style: {fontWeight: 'bold'},
      onPress: () => {
       null

      },
    },
  ]);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#310D20"
      />
      <ScrollView>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/images/back.png')}
              style={styles.back}
            />
          </TouchableOpacity>

          <Text style={styles.text}>{details?.data?.placeDetails.placeName}</Text>
          {token ? (
               <TouchableOpacity
          
               onPress={()=>navigation.navigate('UploadPhotos',details?.data.placeDetails._id)}>
                 <Image
                   source={require('../assets/images/aad_photo_iconn.png')}
                   style={{
                     alignSelf: 'center',
                     marginRight: 20,
                     color: 'white',
                     marginTop: Platform.OS === 'ios' ? 55 : 50,
                     height: 18,
                     width: 25,
                   }}
                 />
               </TouchableOpacity>
          ):(
            <TouchableOpacity
          
            onPress={()=>createTwoButtonAlert()}>
              <Image
                source={require('../assets/images/aad_photo_iconn.png')}
                style={{
                  alignSelf: 'center',
                  marginRight: 20,
                  color: 'white',
                  marginTop: Platform.OS === 'ios' ? 55 : 50,
                  height: 18,
                  width: 25,
                }}
              />
            </TouchableOpacity>
          )}
         
        </View>
        {/* {list.map(item=>( */}
        <View style={{flexDirection: 'row', display: 'flex', flexWrap: 'wrap'}}>
          {photos?.data?.photos?.map(item=>(
          
            <>
            
           
                 {item?.picture?.url.map(item1=>(
                  <>
                { console.log(item)}
                      <TouchableOpacity
                 onPress={async() => {
              

                   let PlaceId=item._id
                 console.log(PlaceId)
                  const res = await getParticularPhotos(token,PlaceId)
                 
                  console.log(res)
                  if(res){
                    dispatch(setPhotoDetails(res))
                    navigation.navigate('PhotoDisplayScreen',item1)
                  }
                 }}
                 > 
                    <Image
                    source={{uri:item1}}
                    style={styles.image}
                  />
                       </TouchableOpacity>
                       </>
                 ))}
              
              </>
          
          ))}
       
        </View>
        {/* ))} */}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    height: Platform.OS === 'ios' ? 95 : 90,
    backgroundColor: '#310D20',
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  back: {
    height: 20,
    width: 20,
    // alignSelf:'center'
    marginTop: Platform.OS === 'ios' ? 55 : 45,
    marginLeft: 20,
  },
  text: {
    color: 'white',
    // lineHeight:20,
    fontSize: 20,
    fontFamily: 'Avenir Medium',
    alignSelf: 'center',
    marginTop: Platform.OS === 'ios' ? 30 : 20,
  },
  image: {
    height: 120,
    width: 120,
   margin:3

  },
});
