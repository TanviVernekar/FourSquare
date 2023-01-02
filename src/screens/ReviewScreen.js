import React,{useState,useEffect} from 'react';
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
import {useSelector} from 'react-redux';
import {ReviewComponent} from '../components/ReviewComponent';
import moment from 'moment';

const data = [
  {
    id: 1,
    name: 'Attil',
    type: 'Indian',
    distance: '4.5Km',
    address: 'manipal',
  },
  {
    id: 2,
    name: 'Attil',
    type: 'Indian',
    distance: '4.5Km',
    address: 'manipal',
  },
  {
    id: 3,
    name: 'Attil',
    type: 'Indian',
    distance: '4.5Km',
    address: 'manipal',
  },
];
export const ReviewScreen = ({navigation}) => {
  const token = useSelector(state => state.userDetails.token);
  const review = useSelector(state => state.particularPlace.review);
  console.log(review.data?.review.date);
  const details = useSelector(state => state.particularPlace.details);
  // const name= details.data?.placeDetails.placeName
  const [date, setDate] = useState('');
  const currentDateTime = () => {
    const dateTimeMoment = moment()
      .utcOffset('+05:30')
      .format('ddd, DD MMM YYYY')
      .toUpperCase();
    setDate(dateTimeMoment);
  };

  useEffect(() => {

    currentDateTime(review.data?.review.date);
 
  }, []);
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
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../assets/images/back.png')}
              style={styles.back}
            />
          </TouchableOpacity>

          <Text style={styles.text}>Atill</Text>
          {token?(
              <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddReviewScreen');
              }}>
              <Image
                source={require('../assets/images/add_review.png')}
                style={{
                  alignSelf: 'center',
                  marginRight: 20,
                  color: 'white',
                  marginTop: Platform.OS === 'ios' ? 55 : 45,
                  height: 25,
                  width: 20,
                }}
              />
            </TouchableOpacity>
          ):(
            <TouchableOpacity
            onPress={() => {
              createTwoButtonAlert()
            }}>
            <Image
              source={require('../assets/images/add_review.png')}
              style={{
                alignSelf: 'center',
                marginRight: 20,
                color: 'white',
                marginTop: Platform.OS === 'ios' ? 55 : 45,
                height: 25,
                width: 20,
              }}
            />
          </TouchableOpacity>
          )}
          
        </View>

        {review?.data?.review.map(item => (
          <>
            <View style={styles.listContainer}>
              {item?.userId?.reviewPic ? (
                <>
                <Image
                source={{uri:item?.userId.reviewPic.url[0]}}
                style={styles.image}
                resizeMode="cover"
              />
                </>
              ):(<>
                  <Image
                // source={{uri:item?.userId.profilePic.url}}
                style={styles.image}
                resizeMode="cover"
              />
              </>)}
            
              <View style={{marginLeft: 12, marginTop: 5}}>
                <Text style={styles.name}>{item?.userId.name}</Text>

                <View style={{width: '100%', marginTop: 3}}>
                  <Text style={styles.text}>
                  {item?.reviewText}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  position: 'absolute',
                  top: 10,
                  flexDirection: 'row',
                  right: 20,
                }}>
                <Text style={{color: '#B8B8B8'}}>{date}</Text>
              </View>
            </View>
            <View style={{borderWidth: 0.3, borderColor: '#CCCCCC'}}></View>
          </>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    height: Platform.OS === 'ios' ? 95 : 95,
    backgroundColor: '#310D20',
    flexDirection: 'row',

    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 5,
  },
  back: {
    height: 25,
    width: 25,
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
  listContainer: {
    backgroundColor: '#FFFFFF',
    // borderWidth:1,
    // marginHorizontal: 6,
    // borderRadius: 5,
    height: 110,
    // width: 365,

    // shadowColor: 'grey',
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // shadowRadius: 3,
    // shadowOpacity: 0.4,
    padding: 10,
    // elevation: 5,
    // marginTop: 6,
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 130,

    justifyContent: 'flex-start',
    borderRadius: 100,
    height: 55,
    width: 55,
    margin: 10,
  },
  name: {
    fontFamily: 'Avenir Medium',
    color: '#000000',
    fontWeight: '600',
    fontSize: 20,
    marginTop: -5,
  },
  rating: {
    height: 23,
    width: 25,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    backgroundColor: '#76B947',
    marginBottom: 10,
  },
  text: {
    fontFamily: 'Avenir Book',
    fontSize: 15,
    color: '#7C7C7F',
    fontWeight: '400',
    lineHeight: 19,
  },
});
