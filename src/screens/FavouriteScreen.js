import {getActionFromState} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  Platform,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavoriteApi,
  particularPlaceApi,
  searchGetFavorite,
  searchPlace,
} from '../auth/Auth';
import {ListComponent} from '../components/ListComponent';
import {
  setFavouriteList,
  setFavouriteListDelete,
  setSearchFavList,
} from '../redux/ReduxPersist/FavouriteSlice';
import {setParticularPlace} from '../redux/ReduxPersist/ParticularPlace';

export const FavouriteScreen = ({navigation}) => {
  const token = useSelector(state => state.userDetails.token);
  // console.log("fav",token)
  const favouriteList = useSelector(state => state.favouriteSlice.favList);
  let latitude = useSelector(state => state.userDetails.latitude);
  let longitude = useSelector(state => state.userDetails.longitude);
  console.log('///', favouriteList);
  const [list, setList] = useState(false);

  const searchfavList = useSelector(
    state => state.favouriteSlice.searchFavList,
  );
  // console.log('****', searchfavList);

  const dispatch = useDispatch();
  useEffect(() => {
    getFavorite();
  }, []);

  const getFavorite = async () => {
    searchParam = '';
    // latitude = '12.915605';
    // longitude = '74.855965';

    const res = await searchGetFavorite(
      token,
      searchParam,
      latitude,
      longitude,
    );
    if (res) {
      dispatch(setFavouriteList(res));
      // console.log('---', res);
    }
  };

  const searchFavorite = async texts => {
    searchParam = texts;
    latitude = '12.915605';
    longitude = '74.855965';
    const data = await searchGetFavorite(
      token,
      searchParam,
      latitude,
      longitude,
    );
    // console.log("+++",data)
    // dispatch(setSearchFavList(data));
    if (data) {
      dispatch(setSearchFavList(data));
    }
  };

  const [text, setText] = useState();
  const [changeText, setChangeText] = useState(null);
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#310D20"
      />
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.innerview}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HomeScreen');
              }}>
              <Image
                source={require('../assets/images/back.png')}
                style={styles.back}
              />
            </TouchableOpacity>

            <Text style={styles.texttop}>Favourites</Text>
            <TouchableOpacity>
              <Image
                source={require('../assets/images/filter.png')}
                style={styles.filter}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '72%',
              borderRadius: 4,
              backgroundColor: 'white',
              marginTop: Platform.OS === 'ios' ? 28 : 28,
              marginHorizontal: '15%',
            }}>
            <View style={styles.inputview}>
              <Image
                source={require('../assets/images/Search_icon.png')}
                style={styles.search}
              />
              <TextInput
                name="Search"
                placeholder="Search"
                value={text}
                onChangeText={texts => {
                  setText(texts);
                  searchFavorite(texts);
                  setList(true);
                }}
                placeholderTextColor="#CACACA"
                // onFocus={() => {
                //   setText('');
                // }}
                style={styles.text2}></TextInput>
            </View>
          </View>
        </View>

        {!text ? (
          <>
            {favouriteList ? (
              <>
                {favouriteList?.map(item => (
                  <TouchableOpacity
                    onPress={async () => {
                      id = item?._id;
                      console.log(id);
                      const res = await particularPlaceApi(token, id);
                      // console.log('^&^&^&^&',res)
                      if (res) {
                        dispatch(setParticularPlace(res)),
                          navigation.navigate('DetailsScreen');
                      }
                    }}>
                    <View style={styles.listContainer}>
                      <Image
                        source={{uri: item?.placePic.url}}
                        style={styles.image}
                        resizeMode="cover"
                      />
                      <View style={{marginLeft: 12}}>
                        <Text style={styles.name}>{item?.placeName}</Text>
                        <View style={styles.rating}>
                          <Text
                            style={{
                              fontSize: 14,
                              color: 'white',
                              fontFamily: 'Avenir Book',
                            }}>
                            {item?.overallRating}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.text}>{item?.description} </Text>
                          <Text style={styles.text}>•₹₹₹₹ </Text>
                          <Text style={styles.text}>
                            {item?.dist.calculated}km
                          </Text>
                        </View>
                        <Text style={styles.text}>{item?.address}</Text>
                      </View>
                      <View
                        style={{
                          position: 'absolute',
                          top: 7,
                          flexDirection: 'row',
                          right: 10,
                        }}>
                        <TouchableOpacity
                          onPress={async () => {
                            placeId = item?._id
                            const data = await addFavoriteApi(token, placeId);
                            // console.log("hellooooo")
                            console.log('added', data);

                            searchParam = '';
                            // latitude = latitude;
                            // longitude = longitude;

                            const res = await searchGetFavorite(
                              token,
                              searchParam,
                              latitude,
                              longitude,
                            );
                            console.log('added2', res);
                            if (res) {
                              const tttt = dispatch(setFavouriteList(res));
                              // console.log('dis added', tttt);
                            }
                          }}>
                          <Image
                            source={require('../assets/images/close_icon.png')}
                            style={{
                              height: 15,
                              width: 15,
                              tintColor: '#8D8D8D',
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <>
            {searchfavList ? (
              <>
                {searchfavList?.map(item => (
                  <TouchableOpacity
                    onPress={async () => {
                      id = item?._id;
                      console.log(id);
                      const res = await particularPlaceApi(token, id);
                      console.log('^&^&^&^&', res);
                      if (res) {
                        dispatch(setParticularPlace(res)),
                          navigation.navigate('DetailsScreen');
                      }
                    }}>
                    <View style={styles.listContainer}>
                      <Image
                        source={{uri: item?.placePic.url}}
                        style={styles.image}
                        resizeMode="cover"
                      />
                      <View style={{marginLeft: 12}}>
                        <Text style={styles.name}>{item?.placeName}</Text>
                        <View style={styles.rating}>
                          <Text
                            style={{
                              fontSize: 14,
                              color: 'white',
                              fontFamily: 'Avenir Book',
                            }}>
                            {item?.overallRating}
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.text}>{item?.description} </Text>
                          <Text style={styles.text}>•₹₹₹₹ </Text>
                          <Text style={styles.text}>
                            {item?.dist.calculated}km
                          </Text>
                        </View>
                        <Text style={styles.text}>{item?.address}</Text>
                      </View>
                      <View
                        style={{
                          position: 'absolute',
                          top: 7,
                          flexDirection: 'row',
                          right: 10,
                        }}>
                        <TouchableOpacity>
                          <Image
                            source={require('../assets/images/close_icon.png')}
                            style={{
                              height: 15,
                              width: 15,
                              tintColor: '#8D8D8D',
                            }}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                ))}
              </>
            ) : (
              <></>
            )}
          </>
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: Platform.OS === 'ios' ? 160 : 160,
    backgroundColor: '#310D20',
  },
  innerview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginTop: 50,
    alignItems: 'center',
  },
  back: {
    height: 20,
    width: 20,
    // alignSelf:'center'
    // marginTop: Platform.OS === 'ios' ? 55 : 35,
    // marginLeft: 20,
  },
  texttop: {
    color: 'white',
    // lineHeight:20,
    fontSize: 22,
    fontFamily: 'Avenir Medium',
    fontWeight: 'bold',
    // alignSelf: 'center',
    // marginTop: Platform.OS === 'ios' ?30 :20,
  },
  inputview: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    height: 40,
    marginHorizontal: 10,
  },

  search: {
    height: 18,
    width: 18,
    tintColor: 'grey',
    opacity: 0.3,
  },
  filter: {
    height: 26,
    width: 23,
    marginTop: 5,
    marginLeft: -2,
  },
  text2: {
    width: '90%',
    marginLeft: 5,
    fontFamily: 'Avenir Light',
    color: '#CACACA',
  },
  listContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 6,
    // borderRadius: 5,
    height: 130,
    // width: 365,

    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    padding: 10,
    elevation: 5,
    marginTop: 6,

    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 130,
    marginTop: -10,
    marginLeft: -10,
    justifyContent: 'flex-start',
  },
  name: {
    fontFamily: 'Avenir Medium',
    color: '#1D1D26',
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
    fontSize: 14,
    color: '#87797F',
    fontWeight: '400',
    lineHeight: 17,
  },
});
