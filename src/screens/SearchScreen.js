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
import {MapScreen} from './MapScreen';

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

  const [filter, setFilter] = useState(false);

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#310D20"
      />
      <ScrollView>
        <View style={styles.header}>
          <View
            style={{
              marginTop: Platform.OS === 'ios' ? 50 : 30,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 20,
            }}>
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
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
                    // setChangeText(text);
                    setSearchText(text);
                    setSearch(true);
                    setNearyou(false);
                    setNearyoutext(false);
                  }}
                  placeholderTextColor="#CACACA"
                  onFocus={() => {
                    setSearch(true);
                    setNearyou(false);
                    setNearyoutext('');
                  }}
                  style={styles.text}></TextInput>
              </View>
            </View>

            <TouchableOpacity onPress={() => setFilter(!filter)}>
              {!filter ? (
                <Image
                  source={require('../assets/images/filter.png')}
                  style={styles.filter}
                />
              ) : (
                <Text>Done</Text>
              )}
            </TouchableOpacity>
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
                  }}
                  placeholderTextColor="#CACACA"
                  onFocus={() => {
                    setNearyou(true);
                    setSearch(false);
                  }}
                  style={styles.text}></TextInput>
              </View>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#CACACA', flex: 1}}>
          {search ? (
            <>
              {searchText ? (
                <View>
                  {/* {mapclick?():()} */}
                  <View>
                    {/* should be mapped */}
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
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      setMapclick(true);
                      setSearchText(false);
                      setSearch(false);
                      setNearyou(false);
                      setNearyoutext(false)
                    }}>
                    <View style={styles.button}>
                      <Text style={styles.btntext}>Map view</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              ) : (
                <>
                  <View>
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
                  </View>
                </>
              )}
            </>
          ) : (
            <></>
          )}

          {nearyou ? (
            <>
              {nearyouText ? (
                <View>
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
                  {/* <TouchableOpacity
                    onPress={() => {
                      setMapclick(true);
                      setNearyoutext(false);
                      setNearyou(false);
                    }}>
                    <View style={styles.button}>
                      <Text style={styles.btntext}>Map view</Text>
                    </View>
                  </TouchableOpacity> */}
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
                        <Text style={styles.loctext}>
                          Use my current location
                        </Text>
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
                  <TouchableOpacity
                    onPress={() => {
                      setMapclick(true);
                      setNearyoutext(false);
                      setNearyou(false);
                    }}>
                    <View style={styles.button}>
                      <Text style={styles.btntext}>Map view</Text>
                    </View>
                  </TouchableOpacity>
            </>
          ) : (
            <></>
          )}

          {/*       
        {!filter ?(
           <View>
           <Text>filter</Text>
         </View> 
        ):(
          <></>
        )} */}
        </View>
        <View style={{flex: 1, height: 650, marginHorizontal:0.1}}>
          {mapclick == true && searchText == false && search==false &&  nearyou ==false && nearyouText== false  ? (
            <View>
              <View style={{width: '100%', height: 573}}>
                <MapScreen/>
                <View style={{width:"100%",borderWidth:1}}>
                    {/* should be mapped */}
                    <FlatList
                    data={listdata}
                    horizontal={true}
                    renderItem={({item})=>(
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
              
              </View>
              <TouchableOpacity
                onPress={() => {
                  setSearchText(true);
                  setSearch(true)
                }}>
                <View style={styles.button2}>
                  <Text style={styles.btntext2}>List view</Text>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
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
    marginTop: 160,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#370F24',
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
    marginHorizontal: 6,
    // borderRadius: 5,
    height: 130,
    width: 380,
    borderWidth:1,

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
});
