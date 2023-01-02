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
import Icons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {
  addFavoriteApi,
  favFilterApi,
  particularPlaceApi,
  searchGetFavorite,
  searchPlace,
} from '../auth/Auth';
import {ListComponent} from '../components/ListComponent';
import {
  setFavFilter,
  setFavouriteList,
  setFavouriteListDelete,
  setSearchFavList,
} from '../redux/ReduxPersist/FavouriteSlice';
import {setParticularPlace} from '../redux/ReduxPersist/ParticularPlace';

export const FavouriteScreen = ({navigation}) => {
  const [filterState, setFilterState] = useState(false);

  const [mapFilter, setMapFilter] = useState(false);

  const [filterResult, setFilterResult] = useState();

  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  const [radius, setRadius] = useState('');
  // const [changeRadius, setChangeRadius] = useState(null);

  const [rupeeone, setRupeeone] = useState(false);
  const [rupeetwo, setRupeetwo] = useState(false);
  const [rupeethree, setRupeethree] = useState(false);
  const [rupeefour, setRupeefour] = useState(false);

  const [credit, setCredit] = useState(false);
  const [delivery, setDelivery] = useState(false);
  const [animal, setAnimal] = useState(false);
  const [family, setFamily] = useState(false);
  const [walk, setWalk] = useState(false);
  const [outdoor, setOutdoor] = useState(false);
  const [park, setPark] = useState(false);
  const [wifi, setWifi] = useState(false);

  let [favourite, setFavourite] = useState();

  const [text, setText] = useState();
  const [changeText, setChangeText] = useState(null);

  const [filterClick, setFilterClick] = useState(false);
  const [list, setList] = useState(false);
  const [initial, setInitial] = useState(true);
  const [result, setResult] = useState(true);



  
  const token = useSelector(state => state.userDetails.token);
  // console.log("fav",token)
  const favouriteList = useSelector(state => state.favouriteSlice.favList);
  let latitude = useSelector(state => state.userDetails.latitude);
  let longitude = useSelector(state => state.userDetails.longitude);
  console.log('///', favouriteList);
  const distance = parseFloat(favouriteList?.dist?.calculated).toFixed(1);
  console.log(">>>",favouriteList?.dist?.calculated)
  const searchfavList = useSelector(
    state => state.favouriteSlice.searchFavList,
  );
  const favfilterList = useSelector(
    state => state.favouriteSlice.favfilterList,
  );
  console.log('***', favfilterList);

  // console.log('****', searchfavList);

  const getSortByValue = () => {
    if (clicked1) {
      return 'popular';
    } else if (clicked2) {
      return 'distance';
    } else if (clicked3) {
      return 'rating';
    } else {
      return '';
    }
  };

  const getPriceRange = () => {
    if (rupeeone) {
      return 1;
    } else if (rupeetwo) {
      return 2;
    } else if (rupeethree) {
      return 3;
    } else if (rupeefour) {
      return 4;
    } else {
      return 1;
    }
  };

  const feature = {
    acceptsCreditCard: credit,
    delivery: delivery,
    dogFriendly: animal,
    familyFriendly: family,
    inWalkingDistance: walk,
    outdoorSeating: outdoor,
    parking: park,
    wifi: wifi,
    text: '',
  };

  const getFeaturesValue = () => {
    Object.keys(feature).forEach(key => {
      if (feature[key] === false) {
        delete feature[key];
      }
    });
    return feature;
  };
  const values = getFeaturesValue();
  const obj = {
    longitude: longitude,
    latitude: latitude,
    sortBy: getSortByValue(),
    stars: getPriceRange(),
    ...values,
    radius: radius,
    // text: text,
  };

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
      setResult(false)
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
            {filterClick ? (
              <TouchableOpacity
                onPress={async () => {
                  setFilterClick(false);
                  setList(false);
                  setInitial(false);
                  const res = await favFilterApi(token, obj);
                  console.log('{}{}{}', res);
                  dispatch(setFavFilter(res));
                  setResult(true);
                }}>
                <Text>Done</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setFilterClick(true);
                  setInitial(false);
                  setList(false);
                  setResult(false);
                  setText(false);
                }}>
                <Image
                  source={require('../assets/images/filter.png')}
                  style={styles.filter}
                />
              </TouchableOpacity>
            )}
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
                  setFilterClick(false);
                  setInitial(true);
                  setResult(false);
                }}
                placeholderTextColor="#CACACA"
                onFocus={() => {
                  setList(true);
                  setInitial(true);
                  setResult(false);
                }}
                style={styles.text2}></TextInput>
            </View>
          </View>
        </View>

        {initial ? (
          <>
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
                            <View style={{width: '70%', height: 50}}>
                              <Text style={styles.name}>{item?.placeName}</Text>
                            </View>
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
                              <Text style={styles.text}>
                                {item?.description}{' '}
                              </Text>
                              <Text style={styles.text}>• ₹₹₹₹ </Text>
                              <Text style={styles.text}>
                                {parseFloat(item?.dist?.calculated).toFixed(1)} km
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
                                placeId = item?._id;
                                const data = await addFavoriteApi(
                                  token,
                                  placeId,
                                );
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
                              <Text style={styles.text}>
                                {item?.description}{' '}
                              </Text>
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
          </>
        ) : (
          <></>
        )}

        {filterClick ? (
          <>
            <View style={styles.filtercontainer}>
              <Text style={styles.filtertext}>Sort by</Text>
            </View>

            <View style={styles.buttontabs}>
              <View
                style={{
                  borderRightWidth: 1,
                  width: '33.3%',
                  height: '100%',
                  borderRightColor: '#351347',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setClicked1(!clicked1),
                      setClicked2(false),
                      setClicked3(false);
                  }}>
                  {clicked1 ? (
                    <View style={styles.buttonActiveview}>
                      <Text style={styles.buttonActive}>Popular</Text>
                    </View>
                  ) : (
                    <View style={styles.buttonview}>
                      <Text style={styles.button}>Popular</Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: '33.3%',
                  height: '100%',
                  borderRightWidth: 1,
                  borderRightColor: '#351347',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setClicked2(!clicked2),
                      setClicked1(false),
                      setClicked3(false);
                  }}>
                  {clicked2 ? (
                    <View style={styles.buttonActiveview}>
                      <Text style={styles.buttonActive}>Distance</Text>
                    </View>
                  ) : (
                    <View style={styles.buttonview}>
                      <Text style={styles.button}>Distance</Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>

              <View style={{width: '33.3%', height: '100%'}}>
                <TouchableOpacity
                  onPress={() => {
                    setClicked3(!clicked3),
                      setClicked2(false),
                      setClicked1(false);
                  }}>
                  {clicked3 ? (
                    <View style={styles.buttonActiveview}>
                      <Text style={styles.buttonActive}>Rating</Text>
                    </View>
                  ) : (
                    <View style={styles.buttonview}>
                      <Text style={styles.button}>Rating</Text>
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.filtercontainer}>
              <Text style={styles.filtertext}>Filter by</Text>
            </View>
            <View style={styles.radiusview}>
              <Text style={styles.radiustext}>Set Radius</Text>
              <TextInput
                name="Radius"
                value={radius}
                onChangeText={radius => setRadius(radius)}
                style={{marginTop: Platform.OS === 'ios' ? 10 : -5}}
              />
              <View
                style={{
                  borderWidth: 0.3,
                  marginTop: Platform.OS === 'ios' ? 10 : -5,
                  borderColor: '#A3A3A3',
                }}
              />
            </View>

            <View style={styles.buttontabs}>
              <View
                style={{
                  borderRightWidth: 1,
                  width: '25%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setRupeeone(!rupeeone),
                      setRupeetwo(false),
                      setRupeethree(false);
                    setRupeefour(false);
                  }}>
                  {rupeeone ? (
                    <View style={styles.buttonActiveview}>
                      <Image
                        source={require('../assets/images/ruppe_btn1_selected.png')}
                        style={{height: '100%', width: '100%'}}
                      />
                    </View>
                  ) : (
                    <View style={styles.buttonview}>
                      <Image
                        source={require('../assets/images/ruppeone.png')}
                        style={{height: '100%', width: '103%'}}
                      />
                    </View>
                  )}
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: '25%',
                  height: '100%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setRupeeone(false),
                      setRupeetwo(!rupeetwo),
                      setRupeethree(false);
                    setRupeefour(false);
                  }}>
                  {rupeetwo ? (
                    <View style={styles.buttonActiveview}>
                      <Image
                        source={require('../assets/images/ruppe_btn2_selected.png')}
                        style={{height: '100%', width: '100%'}}
                      />
                    </View>
                  ) : (
                    <View style={styles.buttonview}>
                      <Image
                        source={require('../assets/images/ruppe_btn2.png')}
                        style={{height: '100%', width: '103%'}}
                      />
                    </View>
                  )}
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: '25%',
                  height: '100%',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setRupeeone(false),
                      setRupeetwo(false),
                      setRupeethree(!rupeethree);
                    setRupeefour(false);
                  }}>
                  {rupeethree ? (
                    <View style={styles.buttonActiveview}>
                      <Image
                        source={require('../assets/images/ruppe_btn3_selected.png')}
                        style={{height: '100%', width: '100%'}}
                      />
                    </View>
                  ) : (
                    <View style={styles.buttonview}>
                      <Image
                        source={require('../assets/images/ruppe_btn3.png')}
                        style={{height: '100%', width: '103%'}}
                      />
                    </View>
                  )}
                </TouchableOpacity>
              </View>

              <View style={{width: '25%', height: '100%'}}>
                <TouchableOpacity
                  onPress={() => {
                    setRupeeone(false),
                      setRupeetwo(false),
                      setRupeethree(false);
                    setRupeefour(!rupeefour);
                  }}>
                  {rupeefour ? (
                    <View style={styles.buttonActiveview}>
                      <Image
                        source={require('../assets/images/ruppe_btn4_selected.png')}
                        style={{height: '100%', width: '100%'}}
                      />
                    </View>
                  ) : (
                    <View style={styles.buttonview}>
                      <Image
                        source={require('../assets/images/ruppe_btn4.png')}
                        style={{height: '100%', width: '100%'}}
                      />
                    </View>
                  )}
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.filtercontainer}>
              <Text style={styles.filtertext}>Features</Text>
            </View>

            <TouchableOpacity onPress={() => setCredit(!credit)}>
              {credit ? (
                <View style={styles.featureview}>
                  <Text style={styles.featureActivetext}>
                    Accept credit cards
                  </Text>
                  <Image
                    source={require('../assets/images/filter_selected.png')}
                    style={{height: 20, width: 20}}
                  />
                </View>
              ) : (
                <View style={styles.featureview}>
                  <Text style={styles.featuretext}>Accept credit cards</Text>
                  <Icons name="add" size={25} style={{color: '#8D8D8D'}} />
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setDelivery(!delivery)}>
              {delivery ? (
                <View style={styles.featureview}>
                  <Text style={styles.featureActivetext}>Delivery</Text>
                  <Image
                    source={require('../assets/images/filter_selected.png')}
                    style={{height: 20, width: 20}}
                  />
                </View>
              ) : (
                <View style={styles.featureview}>
                  <Text style={styles.featuretext}>Delivery</Text>
                  <Icons name="add" size={25} style={{color: '#8D8D8D'}} />
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setAnimal(!animal)}>
              {animal ? (
                <View style={styles.featureview}>
                  <Text style={styles.featureActivetext}>Dog friendly</Text>
                  <Image
                    source={require('../assets/images/filter_selected.png')}
                    style={{height: 20, width: 20}}
                  />
                </View>
              ) : (
                <View style={styles.featureview}>
                  <Text style={styles.featuretext}>Dog friendly</Text>
                  <Icons name="add" size={25} style={{color: '#8D8D8D'}} />
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setFamily(!family)}>
              {family ? (
                <View style={styles.featureview}>
                  <Text style={styles.featureActivetext}>
                    Family-friendly places
                  </Text>
                  <Image
                    source={require('../assets/images/filter_selected.png')}
                    style={{height: 20, width: 20}}
                  />
                </View>
              ) : (
                <View style={styles.featureview}>
                  <Text style={styles.featuretext}>Family-friendly places</Text>
                  <Icons name="add" size={25} style={{color: '#8D8D8D'}} />
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setWalk(!walk)}>
              {walk ? (
                <View style={styles.featureview}>
                  <Text style={styles.featureActivetext}>
                    In walking distance
                  </Text>
                  <Image
                    source={require('../assets/images/filter_selected.png')}
                    style={{height: 20, width: 20}}
                  />
                </View>
              ) : (
                <View style={styles.featureview}>
                  <Text style={styles.featuretext}>In walking distance</Text>
                  <Icons name="add" size={25} style={{color: '#8D8D8D'}} />
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setOutdoor(!outdoor)}>
              {outdoor ? (
                <View style={styles.featureview}>
                  <Text style={styles.featureActivetext}>Outdoor seating</Text>
                  <Image
                    source={require('../assets/images/filter_selected.png')}
                    style={{height: 20, width: 20}}
                  />
                </View>
              ) : (
                <View style={styles.featureview}>
                  <Text style={styles.featuretext}>Outdoor seating</Text>
                  <Icons name="add" size={25} style={{color: '#8D8D8D'}} />
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setPark(!park)}>
              {park ? (
                <View style={styles.featureview}>
                  <Text style={styles.featureActivetext}>Parking</Text>
                  <Image
                    source={require('../assets/images/filter_selected.png')}
                    style={{height: 20, width: 20}}
                  />
                </View>
              ) : (
                <View style={styles.featureview}>
                  <Text style={styles.featuretext}>Parking</Text>
                  <Icons name="add" size={25} style={{color: '#8D8D8D'}} />
                </View>
              )}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setWifi(!wifi)}>
              {wifi ? (
                <View style={styles.featureview}>
                  <Text style={styles.featureActivetext}>Wi-Fi</Text>
                  <Image
                    source={require('../assets/images/filter_selected.png')}
                    style={{height: 20, width: 20}}
                  />
                </View>
              ) : (
                <View style={styles.featureview}>
                  <Text style={styles.featuretext}>Wi-Fi</Text>
                  <Icons name="add" size={25} style={{color: '#8D8D8D'}} />
                </View>
              )}
            </TouchableOpacity>
          </>
        ) : (
          <></>
        )}

        {result ? (
          <>
            {!text ? (
              <>
                {favfilterList ? (
                  <>
                    {favfilterList?.map(item => (
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
                              <Text style={styles.text}>
                                {item?.description}{' '}
                              </Text>
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
                                placeId = item?._id;
                                const data = await addFavoriteApi(
                                  token,
                                  placeId,
                                );
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
                {favfilterList ? (
                  <>
                    {favfilterList?.map(item => (
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
                              <Text style={styles.text}>
                                {item?.description}{' '}
                              </Text>
                              <Text style={styles.text}>•₹₹₹₹ </Text>
                              <Text style={styles.text}>
                                {item?.dist.calculated}km
                              </Text>
                            </View>
                            <Text
                              style={styles.text}
                              ellipsizeMode="tail"
                              numberOfLines={1}>
                              {item?.address}
                            </Text>
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
          </>
        ) : (
          <></>
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
    fontSize: 18,
    marginTop: -5,
  },
  rating: {
    height: 23,
    width: 25,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
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
  filtercontainer: {
    height: Platform.OS === 'ios' ? 45 : 55,
  },
  filtertext: {
    fontFamily: 'Avenir Medium',
    color: '#858585',
    fontSize: Platform.OS === 'ios' ? 16 : 18,
    marginVertical: 12,
    marginLeft: 25,
  },
  buttontabs: {
    flexDirection: 'row',
    height: 55,

    // justifyContent: 'space-between',
    width: '105%',
    borderWidth: 1,
    borderColor: '#351347',
    marginLeft: -1,
  },
  buttonActiveview: {
    backgroundColor: '#351347',
    height: '100%',
    width: '100%',
  },
  buttonActive: {
    // textAlign: 'center',
    fontFamily: 'Avenir Medium',
    fontSize: Platform.OS === 'ios' ? 14 : 16,

    color: 'white',
    alignSelf: 'center',
    marginVertical: 15,
  },
  buttonview: {
    // width: 50,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  button: {
    // textAlign: 'center',
    fontFamily: 'Avenir Medium',
    fontSize: Platform.OS === 'ios' ? 14 : 16,

    color: '#351347',
    // borderWidth:1,
    // height:'100%',
    alignSelf: 'center',
    marginVertical: 15,
  },
  radiusview: {
    height: Platform.OS === 'ios' ? 100 : 110,

    backgroundColor: 'white',
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  radiustext: {
    fontFamily: 'Avenir Book',
    fontSize: 13,
    color: '#A3A3A3',
  },
  featureview: {
    height: Platform.OS === 'ios' ? 45 : 55,

    justifyContent: 'center',
    marginBottom: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  featuretext: {
    fontFamily: 'Avenir Book',
    color: '#8D8D8D',

    fontSize: Platform.OS === 'ios' ? 15 : 18,
  },

  featureActivetext: {
    fontFamily: 'Avenir Book',
    color: '#000000',

    fontSize: Platform.OS === 'ios' ? 15 : 18,
  },
});
