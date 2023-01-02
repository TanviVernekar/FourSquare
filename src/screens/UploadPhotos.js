import {Formik, isEmptyArray} from 'formik';
import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import axios from 'axios';
// import {ButtonComponen2, ButtonComponen4} from '../components/Button';
import {KeyboardAwareView} from 'react-native-keyboard-aware-view';
import ImagePicker from 'react-native-image-crop-picker';
// import { getPhotosApi, uploadPhotosApi } from '../authorization/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { Button2, Buttons } from '../components/Buttons';
import { getAllPhotos, uploadPhotos } from '../auth/Auth';
// import { setRefreshToken, setToken } from '../redux/reduxPersist/UserDetailSlice';
// import { setFavouriteList } from '../redux/reduxPersist/FavouriteSlice';
// import { setphotos } from '../redux/reduxPersist/HotelDetailSlice';

export const UploadPhotos = ({navigation,route}) => {
const dispatch = useDispatch();
let placeId = route.params
// console.log(id)
const [loading,setLaoding] = useState(false)
const token = useSelector(state => state.userDetails.token);
// const refreshToken = useSelector(state => state.userDetail.refreshToken);
// const [apiCallState,setApiCAllState] = useState(false)

  const createFromData = obj => {
    let formData = new FormData();
    for (let key in obj) {
      if (key === 'image') {
        const imageData = obj[key];
        imageData?.map(item => {
          formData.append('image', {
            uri: item?.path,
            type: item?.mime,
            name:
              item?.filename !== undefined
                ? `${item?.filename}.${item?.mime.substr(
                    item?.mime.indexOf('/') + 1,
                  )}`
                : `rnImagePicker.${item?.mime.substr(
                    item?.mime.indexOf('/') + 1,
                  )}`,
          });
        });
      } else {
        if (obj[key]) {
          formData.append(`${key}`, `${obj[key]}`);
        }
      }
    }
    return formData;
  };

  const handleSubmit = async () => {
    setLaoding(true)
    let body = '';
    body = {
      placeId:placeId,
      image: image,
    };
  const objBody = createFromData(body);
    console.log(token);
    const data = await uploadPhotos(token, objBody);


    // if (data) {
    //   if (Object.keys(data)[0] === 'newToken') {
    //     dispatch(setToken(data.newToken));
    //     setLaoding(false)
    //   } else if (Object.keys(data)[0] === 'errorMessage') {
    //     dispatch(setToken());
    //     // dispatch(setRefreshToken());
    //     dispatch(setFavouriteList());
    //     // setLaoding(false)
    //     Toast.showWithGravity(
    //       'Login to Upload Photos',
    //       Toast.SHORT,
    //       Toast.CENTER,
    //     );
    //   } else {
    //     // setApiCAllState(true)
    //     // setLaoding(false)
    //   }
    // } else {
    // //   dispatch(setFavouriteList());
    // //   setLaoding(false)
    // }

    if(data){
        navigation.goBack()
    }

  };


  const [photoState, setPhotoState] = useState('false');
  useEffect(() => {}, [photoState]);
  const [img, setImg] = useState([]);
  console.log(img)
  const [image,setImage] = useState([]);
  
  const changeProfileImageFromLibrary = () => {
    setPhotoState(false);
    ImagePicker.openPicker({
      width: 110,
      height: 110,
      cropping: true,
    }).then(photo => {
      img.push(photo.path);
      const {filename, mime, path} =photo;
      image.push({filename, mime, path});
      setPhotoState(true);
    });
  };
  console.log(image)

  // const changeProfileImageFromCamera = () => {
  //   ImagePicker.openCamera({
  //     width: 110,
  //     height: 110,
  //     cropping: true,
  //   }).then(photo => {
  //     img.push(photo.path);
  //     const {filename, mime, path} =photo;
  //     image.push({filename, mime, path});
  //     setPhotoState(true);
  //   });
  // };
  return (
    <View style={styles.container}>
      <KeyboardAwareView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <ScrollView
            style={{flex: 1}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <View style={{backgroundColor: '#310D20'}}>
              <View style={styles.headerView}>
                <TouchableOpacity
                  style={styles.backIconPress}
                  onPress={ () => {
                    

                    navigation.goBack();
                  }}
                >
                  <Image
                    source={require('../assets/images/back_icon.png')}
                    style={styles.backIconStyle}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    // marginRight: '42%',
                  }}>
                  <Text style={styles.feedbackText}>Upload Photo</Text>
                </View>
              </View>
            </View>

            <View style={{flex: 1, backgroundColor: 'white'}}>

              <View style={{marginTop: 10, marginHorizontal: 20}}>
                <Text
                  style={{
                    fontFamily: 'Avenir Book',
                    fontSize: 16,
                    color: '#351347',
                  }}>
                  Add photos to Upload
                </Text>
              </View>
              <View
                style={{
                  marginTop: 5,
                  marginHorizontal: 20,
                  flexDirection: 'row',
                  display: 'flex',
                  flexWrap: 'wrap',
                }}>
                 {img ? (
                  <>
                    {img?.map(item => (
                      <View style={styles.addphotosIconView} key={item}>
                        <Image
                          source={{uri: item}}
                          style={styles.addphotosIcon}
                        />
                      </View>
                    ))}
                  </>
                ) : (
                  <></>
                )}
                <View style={styles.addphotosIconView}>
                  <TouchableOpacity onPress={()=>{changeProfileImageFromLibrary()}}>
                    <Image
                      source={require('../assets/images/aad_photo.png')}
                      style={styles.addphotosIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
          {loading ? (<>
          <Buttons />
          </>):(<>
            <Button2
            text={'Submit'}
            disable={isEmptyArray(img)}
            onPress={() => {
              handleSubmit();
            }}
          />
          </>)}
          
        </View>
      </KeyboardAwareView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#310D20',
  },
  headerView: {
    // marginTop: Platform.OS === 'ios' ? 50 : 40,
    marginTop: Platform.OS === 'ios' ? 42 : 35,
    marginBottom:13,
    alignItems: 'center',
    justifyContent:'center',
    alignSelf:'center',
    backgroundColor: '#310D20',
  },
  backIconPress: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    position: 'absolute',
    top: Platform.OS === 'ios' ? -10 : -11,
    flexDirection: 'row',
    left: Platform.OS === 'ios' ? '-32%':'-31.5%',
  },
  backIconStyle: {
    height: 25,
    width: 25,
    marginRight:90,
  },
  feedbackText: {
    fontFamily: 'Avenir Book',
    fontSize: 20,
    color: '#FFFFFF',
    lineHeight: 30,
  },
  feedbacktext2: {
    fontFamily: 'Avenir Book',
    fontSize: 16,
    color: '#351347',
    lineHeight: 30,
    marginTop: 15,
    marginBottom: 5,
    marginHorizontal: 20,
  },
  textInput: {
    height: 200,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    marginHorizontal: 20,
    padding: Platform.OS === 'ios' ? 10 : 10,
    color: '#8D8D8D',
    fontFamily: 'Avenir Book',
  },
  addphotosIconView: {
    marginRight: 17,
    marginVertical: 10,
    borderRadius:5,
    overflow:'hidden',
    
  },
  addphotosIcon: {
    height: 70,
    width: 70,
    // borderWidth:1

  },
  buttonView: {
    marginTop: 100,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});


// import React from 'react'
// import { View } from 'react-native'

// export const UploadPhotos=()=> {
//   return (
//     <View>
//         </View>
//   )
// }
