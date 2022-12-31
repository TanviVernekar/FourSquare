import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Modal} from 'react-native';
import {setRatingState} from '../redux/ReduxPersist/RatingSlice';
import {useDispatch, useSelector} from 'react-redux';
import {Rating, AirbnbRating} from 'react-native-ratings';
import { ratingApi } from '../auth/Auth';

export const ModalComponent = () => {
  const dispatch = useDispatch();

  const [ratingcount,setRatingcount] =useState()



  const ratingState = useSelector(state => state.ratingState.state);
  
  const token = useSelector(state => state.userDetails.token);

  const details = useSelector(state => state.particularPlace.details);
  const id = details?.data?.placeDetails._id;
  const rating = details?.data?.overallRating.toFixed(1);
  const STAR_IMAGE = require('../assets/images/rating_icon_selected.png');


  // const handleSubmit= async(ratingCount)=>{
  //     // const res = await ratingApi(token,AirbnbRating)
  //     // console.log(res)
  //     console.log(ratingCount)
  // }


  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={ratingState}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        {
          dispatch(setRatingState());
        }
      }}>
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <TouchableOpacity   onPress={() => {
                dispatch(setRatingState());
              }}>
            <View
              style={{
                marginTop: -15,
                position: 'absolute',
                // Top:0,
                borderWidth: 1,
                borderRadius: 50,
                width: 30,
                height: 30,
                backgroundColor: 'white',
                // alignSelf:'flex-end',
                marginLeft: 330,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: '#8D8D8D',
              }}>
              <Image
                source={require('../assets/images/close_icon.png')}
                style={{
                  tintColor: 'grey',
                  height: 15,
                  width: 15,
                  alignSelf: 'center',
                }}
              />
            </View>
          </TouchableOpacity>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 60,

              alignSelf: 'center',
              marginTop: 60,
            }}>
            <Text style={styles.overall}>Overall Rating</Text>
            <Text style={styles.rating}>{rating}</Text>
            <Text
              style={{
                textAlign: 'center',
                fontFamily: 'Avenir Book',
                color: 'black',
                lineHeight: 22,
                fontSize: 19,
                marginBottom: 20,
              }}>
              How would you rate your experience?
            </Text>
            
            <AirbnbRating
              ratingImage={STAR_IMAGE}
              ratingColor="#3498db"
              ratingCount={5}
              defaultRating={0}
              reviews={0}
              size={25}
              onFinishRating={ratingcount=>{
                
                setRatingcount(ratingcount)
              console.log(ratingcount)}}
            />
          </View>
          <TouchableOpacity
          onPress={async()=>{
            const body={
              placeId:id,
              overallRating:ratingcount
            }
            const res = await ratingApi(token,body)
            console.log(res)
            // if (res.messag == "This user has already given rating") {
            //   Toast.show('This user has already given rating', Toast.SHORT);
            //   console.log(error);
            // }
            dispatch(setRatingState())
          }}
          
          >
            <View style={styles.submit}>
              <Text
                style={{
                  fontFamily: 'Avenir Medium',
                  color: '#351347',
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Submit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#000000AA',
  },
  modalContainer: {
    height: 420,
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    marginVertical: Platform.OS === 'ios' ? 220 : 185,
    borderColor: '#8D8D8D',
    borderWidth: 1.5,
  },
  overall: {
    fontFamily: 'Avenir Medium',
    color: 'black',
    fontSize: Platform.OS === 'ios' ? 20 : 22,
    fontWeight: '700',
  },
  rating: {
    fontFamily: 'Avenir Black',
    fontSize: 30,
    color: '#36B000',
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 35,
  },
  submit: {
    borderTopWidth: 0.5,
    height: 70,

    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: '#8D8D8D',
    position: 'absolute',
    // bottom: 0,
    width: '100%',
    marginTop: 20,
  },
});
