import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
  ScrollView,
} from 'react-native';

import {Buttons} from '../components/Buttons';
import {ListComponent} from '../components/ListComponent';
import {MapScreen} from '../screens/MapScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: 1,
    source: require('../assets/images/hotel.png'),
    place: 'Santhekatte',
  },
  {
    id: 2,
    source: require('../assets/images/hotel.png'),
    place: 'Manipal',
  },
];

const listdata = [
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
export const SearchScreen = ({navigation}) => {
  const [text, setText] = useState();

  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState(null);

  const [nearyou, setNearyou] = useState(false);
  const [nearyouText, setNearyoutext] = useState(null);

  const [mapclick, setMapclick] = useState(false);
  const [mapnear, setMapnear] = useState(false);

  const [filter, setFilter] = useState(false);

  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);

  const [radius, setRadius] = useState();
  const [changeRadius, setChangeRadius] = useState(null);

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

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#310D20"
      />

      <View>
        <View style={styles.header}>
          <View
            style={{
              marginTop: Platform.OS === 'ios' ? 50 : 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Image
                source={require('../assets/images/back.png')}
                style={styles.back}
              />
            </TouchableOpacity>

            <View
              style={{width: '72%', borderRadius: 4, backgroundColor: 'white'}}>
              <View style={styles.inputview}>
                <Image
                  source={require('../assets/images/Search_icon.png')}
                  style={styles.search}
                />
                <TextInput
                  name="Search"
                  placeholder="Search"
                  value={text}
                  onChangeText={text => {
                    setSearchText(text);
                    setSearch(true);
                    setNearyou(false);
                    setNearyoutext(false);
                    setFilter(false);
                  }}
                  placeholderTextColor="#CACACA"
                  onFocus={() => {
                    setSearch(true);
                    setNearyou(false);
                    setNearyoutext('');
                    setFilter(false);
                  }}
                  style={styles.text}></TextInput>
              </View>
            </View>

            {filter === false ? (
              <TouchableOpacity
                onPress={() => {
                  setFilter(true);
                  setSearch(false);
                  setNearyou(false);
                  setSearchText(false);
                  setNearyoutext(false);
                  setMapclick(false);
                  setMapnear(false);
                }}>
                <Image
                  source={require('../assets/images/filter.png')}
                  style={styles.filter}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{marginLeft: -14, alignSelf: 'center'}}
                onPress={() => {
                  setFilter(false);
                  setSearch(false);
                  setNearyou(false);
                  setSearchText(false);
                  setNearyoutext(false);
                  setMapclick(false);
                  setMapnear(false);
                }}>
                <Text style={{fontSize: 14, color: 'white', height: 30}}>
                  Done
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={{marginHorizontal: 20}}>
            <View
              style={{
                borderRadius: 4,
                backgroundColor: 'white',
                marginTop: 12,
                width: '72%',
                alignSelf: 'center',
              }}>
              <View style={styles.inputview2}>
                <Image
                  source={require('../assets/images/nearme.png')}
                  style={styles.search2}
                />
                <TextInput
                  name="NearMe"
                  placeholder="Near Me"
                  value={text}
                  onChangeText={text => {
                    setSearchText('');
                    setSearch(false);
                    setNearyou(true);
                    setNearyoutext(text);
                    setFilter(false);
                  }}
                  placeholderTextColor="#CACACA"
                  onFocus={() => {
                    setNearyou(true);
                    setSearch(false);
                    setFilter(false);
                  }}
                  style={styles.text}></TextInput>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* <View style={{backgroundColor: '#CACACA', marginTop: 10,borderWidth:1}}> */}
      {search ? (
        <>
          {searchText ? (
            <>
              <View style={{flex: 1}}>
                <View>
                  <ScrollView>
                    {listdata.map(item => (
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('DetailsScreen');
                        }}>
                        <View style={styles.listContainer}>
                          <Image
                            source={require('../assets/images/hotel.png')}
                            style={styles.image}
                            resizeMode="cover"
                          />
                          <View style={{marginLeft: 12}}>
                            <Text style={styles.name}>{item.name}</Text>
                            <View style={styles.rating}>
                              <Text
                                style={{
                                  fontSize: 14,
                                  color: 'white',
                                  fontFamily: 'Avenir Book',
                                }}>
                                6.5
                              </Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                              <Text style={styles.text}>{item.type} </Text>
                              <Text style={styles.text}>•₹₹₹₹ </Text>
                              <Text style={styles.text}>6.7km</Text>
                            </View>
                            <Text style={styles.text}>{item.address}</Text>
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
                                source={require('../assets/images/favourite_star.png')}
                                style={{height: 20, width: 20}}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>

                {/* <View style={{alignItems:'flex-end'}}> */}

                <TouchableOpacity
                  style={styles.buttonnew}
                  onPress={() => {
                    setMapclick(true);
                    setSearchText(false);
                    setSearch(false);
                    setNearyou(false);
                    setNearyoutext(false);
                  }}>
                  <Text style={styles.btntext}>Map view</Text>
                </TouchableOpacity>
              </View>
              {/* </View> */}
            </>
          ) : (
            <>
              <View style={{flex: 1}}>
                <ScrollView>
                  <View>
                    <View style={styles.searchheader}>
                      <Text style={styles.searchtext}>Near by places</Text>
                    </View>

                    {data.map(item => (
                      <TouchableOpacity>
                        <View style={styles.placeview} key={item.id}>
                          <Image
                            source={require('../assets/images/hotel.png')}
                            style={styles.placeimg}
                          />
                          <Text style={styles.placetext}>{item.place}</Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>

                  <View>
                    <View style={styles.searchheader}>
                      <Text style={styles.searchtext}>Suggestions</Text>
                    </View>

                    {data.map(item => (
                      <TouchableOpacity>
                        <View style={styles.placeview2} key={item.id}>
                          <Text style={styles.placetext2}>{item.place}</Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </>
          )}
        </>
      ) : (
        <></>
      )}
      {/* </View> */}

      {/* <View style={{backgroundColor: '#CACACA', flex: 1}}> */}
      {nearyou ? (
        <>
          {nearyouText ? (
            <View style={{flex: 1}}>
              <View>
                <ScrollView>
                  {/* should be mapped */}
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('DetailsScreen');
                    }}>
                    <View style={styles.listContainer}>
                      <Image
                        source={require('../assets/images/hotel.png')}
                        style={styles.image}
                        resizeMode="cover"
                      />
                      <View style={{marginLeft: 12}}>
                        <Text style={styles.name}>Attil</Text>
                        <View style={styles.rating}>
                          <Text
                            style={{
                              fontSize: 14,
                              color: 'white',
                              fontFamily: 'Avenir Book',
                            }}>
                            6.5
                          </Text>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                          <Text style={styles.text}>Indian </Text>
                          <Text style={styles.text}>•₹₹₹₹ </Text>
                          <Text style={styles.text}>6.7km</Text>
                        </View>
                        <Text style={styles.text}>Tiger Circle Manipal </Text>
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
                            source={require('../assets/images/favourite_star.png')}
                            style={{height: 20, width: 20}}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </TouchableOpacity>
                </ScrollView>
              </View>

              <TouchableOpacity
                style={styles.buttonnew}
                onPress={() => {
                  setMapnear(true);
                  setNearyoutext(false);
                  setNearyou(false);
                }}>
                <Text style={styles.btntext}>Map view</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <View>
                <TouchableOpacity>
                  <View style={styles.placeview}>
                    <Image
                      source={require('../assets/images/location_icon.png')}
                      style={styles.locimg}
                    />
                    <Text style={styles.loctext}>Use my current location</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.placeview}>
                    <Image
                      source={require('../assets/images/map_icon.png')}
                      style={styles.locimg}
                    />
                    <Text style={styles.loctext}>
                      Select Search area on map
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
        </>
      ) : (
        <></>
      )}

      {/* <View style={{fheight: 650, marginHorizontal:0.1}}> */}
      {mapclick == true &&
      searchText == false &&
      search == false &&
      nearyou == false &&
      nearyouText == false ? (
        <View style={{flex: 1}}>
          {/* <View > */}

          <MapScreen />

          <View style={{margin: 7}}>
            <FlatList
              data={listdata}
              horizontal={true}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DetailsScreen');
                  }}>
                  <View style={styles.listContainer2}>
                    <Image
                      source={require('../assets/images/hotel.png')}
                      style={styles.image}
                      resizeMode="cover"
                    />
                    <View style={{marginLeft: 12}}>
                      <Text style={styles.name}>{item.name}</Text>
                      <View style={styles.rating}>
                        <Text
                          style={{
                            fontSize: 14,
                            color: 'white',
                            fontFamily: 'Avenir Book',
                          }}>
                          6.5
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}>{item.type} </Text>
                        <Text style={styles.text}>•₹₹₹₹ </Text>
                        <Text style={styles.text}>6.7km</Text>
                      </View>
                      <Text style={styles.text}>{item.address}</Text>
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
                          source={require('../assets/images/favourite_star.png')}
                          style={{height: 20, width: 20}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          {/* </View> */}

          <TouchableOpacity
            style={[
              styles.button2,
              {
                alignItems: 'flex-end',
                bottom: 0,
                position: 'absolute',
                width: '100%',
              },
            ]}
            onPress={() => {
              setSearchText(true);
              setSearch(true);
              setMapclick(false);
            }}>
            <Text style={styles.btntext2}>List view</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
      {/* </View> */}

      {mapnear == true &&
      searchText == false &&
      search == false &&
      nearyou == false &&
      nearyouText == false &&
      mapclick == false ? (
        <View style={{flex: 1}}>
          {/* <View > */}

          <MapScreen />

          <View style={{margin: 7}}>
            <FlatList
              data={listdata}
              horizontal={true}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('DetailsScreen');
                  }}>
                  <View style={styles.listContainer2}>
                    <Image
                      source={require('../assets/images/hotel.png')}
                      style={styles.image}
                      resizeMode="cover"
                    />
                    <View style={{marginLeft: 12}}>
                      <Text style={styles.name}>{item.name}</Text>
                      <View style={styles.rating}>
                        <Text
                          style={{
                            fontSize: 14,
                            color: 'white',
                            fontFamily: 'Avenir Book',
                          }}>
                          6.5
                        </Text>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={styles.text}>{item.type} </Text>
                        <Text style={styles.text}>•₹₹₹₹ </Text>
                        <Text style={styles.text}>6.7km</Text>
                      </View>
                      <Text style={styles.text}>{item.address}</Text>
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
                          source={require('../assets/images/favourite_star.png')}
                          style={{height: 20, width: 20}}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
            />
          </View>
          {/* </View> */}

          <TouchableOpacity
            style={[
              styles.button2,
              {
                alignItems: 'flex-end',
                bottom: 0,
                position: 'absolute',
                width: '100%',
              },
            ]}
            onPress={() => {
              setMapnear(false);
              setNearyoutext(true);
              setNearyou(true);
            }}>
            <Text style={styles.btntext2}>List view</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}

      {filter ? (
        <>
          <ScrollView>
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
                onChangeText={() => setChangeRadius(radius)}
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
                  <Icon name="add" size={25} style={{color: '#8D8D8D'}} />
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
                  <Icon name="add" size={25} style={{color: '#8D8D8D'}} />
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
                  <Icon name="add" size={25} style={{color: '#8D8D8D'}} />
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
                  <Icon name="add" size={25} style={{color: '#8D8D8D'}} />
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
                  <Icon name="add" size={25} style={{color: '#8D8D8D'}} />
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
                  <Icon name="add" size={25} style={{color: '#8D8D8D'}} />
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
                  <Icon name="add" size={25} style={{color: '#8D8D8D'}} />
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
                  <Icon name="add" size={25} style={{color: '#8D8D8D'}} />
                </View>
              )}
            </TouchableOpacity>
          </ScrollView>
        </>
      ) : (
        <></>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    height: Platform.OS === 'ios' ? 160 : 140,
    backgroundColor: '#370F24',
  },
  back: {
    height: 20,
    width: 20,
    marginTop: 10,
  },
  inputview: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    height: 40,
    marginHorizontal: 10,
  },
  inputview2: {
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
  text: {
    width: '90%',
    marginLeft: 5,
    fontFamily: 'Avenir Light',
    color: '#CACACA',
  },
  search2: {
    height: 18,
    width: 18,
  },
  searchheader: {
    height: 60,
  },
  searchtext: {
    marginVertical: 15,
    fontFamily: 'Avenir Medium',
    fontSize: 20,
    color: '#858585',
    marginLeft: 25,
  },
  placeview: {
    height: 95,
    flexDirection: 'row',

    paddingHorizontal: 25,
    backgroundColor: 'white',
    marginBottom: 1,
  },
  placeimg: {
    height: 70,
    width: 70,
    alignSelf: 'center',
  },
  placetext: {
    fontFamily: 'Avenir Book',
    fontSize: 20,
    color: '#000000',
    alignSelf: 'center',
    marginLeft: 20,
  },
  placeview2: {
    height: 80,
    flexDirection: 'row',

    paddingHorizontal: 25,
    backgroundColor: 'white',
    marginBottom: 1,
  },
  placetext2: {
    fontFamily: 'Avenir Book',
    fontSize: 20,
    color: '#000000',
    alignSelf: 'center',
  },
  locimg: {
    // height: 30,
    // width: 30,
    alignSelf: 'center',
  },
  loctext: {
    fontFamily: 'Avenir Book',
    fontSize: 20,
    color: '#000000',
    alignSelf: 'center',
    marginLeft: 20,
  },
  listContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 6,
    // borderRadius: 5,
    height: 130,
    // width: "100%",

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
  button: {
    height: 70,
    // marginTop: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#370F24',
  },
  buttonnew: {
    height: 70,
    // marginTop: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#370F24',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  btntext: {
    alignSelf: 'center',
    fontFamily: 'Avenir Book',
    fontSize: 20,
    color: 'white',
  },
  button2: {
    height: 70,
    // marginTop: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#370F24',
  },
  btntext2: {
    alignSelf: 'center',
    fontFamily: 'Avenir Book',
    fontSize: 20,
    color: 'white',
  },
  listContainer2: {
    backgroundColor: '#FFFFFF',
    // marginHorizontal: 6,
    // borderRadius: 5,
    height: 130,
    width: 380,

    // flex:1,
    shadowColor: 'grey',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 0.4,
    padding: 10,
    elevation: 5,
    flexDirection: 'row',
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
