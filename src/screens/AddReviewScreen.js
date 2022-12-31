import {Formik} from 'formik';
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
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';

import * as yup from 'yup';
import axios from 'axios';
import {Button2, Buttons} from '../components/Buttons';
import {KeyboardAwareView} from 'react-native-keyboard-aware-view';
import ImagePicker from 'react-native-image-crop-picker';
import { addReviewApi } from '../auth/Auth';
import { useSelector } from 'react-redux';

export const AddReviewScreen = ({navigation}) => {



  const token = useSelector(state => state.userDetails.token);
  const details = useSelector(state => state.particularPlace.details);
  const id = details.data?.placeDetails._id;

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };
  const [portrait, setPortrait] = useState(true);
  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setPortrait(isPortrait());
    });
  }, []);

  const [text, setText] = useState('');


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




  const handleSubmit = async()=>{
    let body = '';
    if(img){
      body={
        placeId:id,
        reviewText:text,
        image:image,
      };
    }else{
      body={
        placeId:id,
        reviewText:text,
      };
    }
    const objBody = createFromData(body)
    console.log(objBody)
    const res = await addReviewApi(token,objBody)
      navigation.navigate('HomeScreen')
  }


  const [photoState, setPhotoState] = useState('false');
  useEffect(() => {}, [photoState]);
  const [img, setImg] = useState([]);
  console.log(img);
  const [image, setImage] = useState([]);
  const changeProfileImageFromLibrary = () => {
    setPhotoState(false)
    ImagePicker.openPicker({
      width: 110,
      height: 110,
      cropping: true,
    }).then(photo => {
      // setImage(img.path);
      img.push(photo.path);
      const {filename, mime, path} = photo;
      image.push({filename, mime, path});
      // setProfilePhoto({filename, mime, path});
      setPhotoState(true);
    });
  };
  // const changeProfileImageFromCamera = () => {
  //   ImagePicker.openCamera({
  //     width: 110,
  //     height: 110,
  //     cropping: true,
  //   }).then(img => {
  //     setImage(img.path);
  //     const {filename, mime, path} = img;
  //     setProfilePhoto({filename, mime, path});

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
                  onPress={() => {
                    navigation.goBack();
                  }}>
                  <Image
                    source={require('../assets/images/back_icon.png')}
                    style={styles.backIconStyle}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    marginRight: '42%',
                  }}>
                  <Text style={styles.feedbackText}>Add Review</Text>
                </View>
              </View>
            </View>

            <View style={{flex: 1, backgroundColor: 'white'}}>
              <Text style={styles.feedbacktext2}>Write Review</Text>
              <TextInput
                style={styles.textInput}
                multiline={true}
                keyboardType="default"
                name="feedback"
                onChangeText={text => {
                  setText(text);
                }}
                textAlignVertical="top"
              />

              <View style={{marginTop: 10, marginHorizontal: 20}}>
                <Text
                  style={{
                    fontFamily: 'Avenir Book',
                    fontSize: 16,
                    color: '#351347',
                  }}>
                  Add a photos to your review
                </Text>
              </View>
              <View
                style={{
                  marginTop: 5,
                  marginHorizontal: 20,
                  flexDirection: 'row',
                  display: 'flex',
                  flexWrap: 'wrap',
                  // marginBottom: portrait ? 10 : 40,
                }}>
                {img ? (
                  <>
                    {img?.map(item => (
                      <View style={styles.addphotosIconView}>
                        <Image
                          source={{uri:item}}
                          style={styles.addphotosIcon}
                        />
                      </View>
                    ))}
                  </>
                ) : (
                  <></>
                )}
                <View style={styles.addphotosIconView}>
                  <TouchableOpacity
                    onPress={() => {
                      changeProfileImageFromLibrary();
                    }}>
                    <Image
                      source={require('../assets/images/aad_photo.png')}
                      style={styles.addphotosIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
          <Button2
            text="Submit"
            disable={!text}
            onPress={() => {
              handleSubmit();
            }}
          />
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
    marginTop: Platform.OS === 'ios' ? 32 : 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#310D20',
  },
  backIconPress: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginRight: 90,
  },
  backIconStyle: {
    height: 25,
    width: 25,
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
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth:1
  },
  addphotosIcon: {
    height: 70,
    width: 70,
  },
  buttonView: {
    // flex: 1,
    marginTop: 100,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
