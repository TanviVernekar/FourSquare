import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {TopTabsStack} from '../navigation/TopTabsStack';
import { MapScreen } from './MapScreen';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#310D20"
      />
      <View style={{flex: 1}}>
      
        {/* <ScrollView style={{flex:1}}> */}
        <View style={styles.topHeader}>
          
          <View style={styles.topHeader2}>
          
            <TouchableOpacity >
              <Image
                source={require('../assets/images/menu.png')}
                style={styles.menu}
              />
            </TouchableOpacity>
            <Image
              source={require('../assets/images/logo.png')}
              style={styles.logo}
            />
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={()=>navigation.navigate('FilterScreen')}>
                <Image
                  source={require('../assets/images/filter.png')}
                  style={styles.filter}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>navigation.navigate('SearchScreen')}>
                <Image
                  source={require('../assets/images/search.png')}
                  style={styles.search}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TopTabsStack />
        {/* </ScrollView> */}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topHeader: {
    backgroundColor: '#370F24',
    height: Platform.OS === 'ios' ? 120 : 80,
   
  },
  topHeader2: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? 65 : 50,
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  menu: {
    width: 24,
    height: 22,
  },
  logo: {
    width: 140,
    height: 18,
    alignSelf: 'center',
    marginLeft: 15,
  },
  filter: {
    height: 25,
    width: 20,
    marginRight: 28,
  },
  search: {
    height: 23,
    width: 23,
  },
});
