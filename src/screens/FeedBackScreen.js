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

import axios from 'axios';
import {Button2} from '../components/Buttons';
import {KeyboardAwareView} from 'react-native-keyboard-aware-view';
import { feedBackApi } from '../auth/Auth';
import { useSelector } from 'react-redux';

export const FeedBackScreen = ({navigation}) => {
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
const handleSubmit = async () => {
  console.log(text)
  const obj={
    feedbackText:text,

  }
  const res = await feedBackApi(token,obj);
  if(res){
    navigation.navigate('HomeStack')
  }
  // console.log(res)
}


const token = useSelector(state => state.userDetails.token);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#310D20"
      />
      <KeyboardAwareView>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <ScrollView style={{flex: 1}}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          >
            <View style={{backgroundColor: '#310D20'}}>
              <View style={styles.headerView}>
                <TouchableOpacity style={styles.backIconPress}
                onPress={()=>{navigation.goBack()}}
                >
                  <Image
                    source={require('../assets/images/back_icon.png')}
                    style={styles.backIconStyle}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    marginRight: portrait ? '32%' : '42%',
                  }}>
                  <Text style={styles.feedbackText}>Add Feedback</Text>
                </View>
              </View>
            </View>

            <View style={{flex: 1, backgroundColor: 'white',}}>
              <Text style={styles.feedbacktext2}>Write Feedback</Text>
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
            </View>
            <View style={{padding:20}}></View>
          </ScrollView>
          <Button2 text='Submit' disable={!text} onPress={()=>{handleSubmit()}}/>
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
    marginTop: Platform.OS === 'ios' ? 32 : 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#310D20',
  },
  backIconPress: {
    paddingHorizontal: 15,
    paddingVertical: 15,
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
  addphotosIcon: {
    height: 70,
    width: 70,
    marginRight: 17,
    marginVertical: 10,
  },
  buttonView: {
    // flex: 1,
    marginTop: 100,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});


