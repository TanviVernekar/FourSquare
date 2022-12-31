import React, { useEffect,useState } from 'react'
import { View,StyleSheet,Text,Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { popularApi, searchGetFavorite } from '../auth/Auth'
import { ListComponent } from '../components/ListComponent'
import { useDispatch, useSelector } from 'react-redux'
import { setFavouriteList } from '../redux/ReduxPersist/FavouriteSlice'





export const PopularScreen=({navigation})=> {


  const dispatch = useDispatch()

  const token = useSelector(state => state.userDetails.token);
  const latitude =useSelector(state => state.userDetails.latitude);
  const longitude =useSelector(state => state.userDetails.longitude);
  const favouriteList = useSelector(state => state.favouriteSlice.favList);



  const [popular, setPopular] = useState();
  useEffect(()=>{
    popularapi(),
    getFavorite()
  },[]);

  const popularapi = async ()=>{
    const res = await popularApi(token,latitude,longitude)
    // console.log('()()()()',res)
    if(res){

    
      setPopular(res.data)
    }else{
      console.log(res)
    }
  }
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
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
      {popular?.map(item=>(
        <View key={item?._id}>
        {favouriteList ? (
              <>
              {(favourite = false)}
              {favouriteList? (
                <>
                    {favouriteList?.map(temp=>(
                    <View key={temp?._id}>
                        <>{temp?._id === item?._id ? (favourite = true):null}</>
                    </View>
                    
                ))}
                </>
              ):(
                <>
            
                 {(favourite = false)}
                </>
           
              )}
              </>
            ):(
              <>{(favourite = false)}</>
            )}
          <ListComponent navigation={navigation} placeName={item.placeName} 
            placePic={item.placePic.url}
            overallrating={item.overallRating}
            description={item.description}
            address={item.address}
            dist={item.dist.calculated}
            id={item._id}
            favourite={favourite}
            />
        </View>
      ))}  
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // marginTop: 2,
    // borderWidth:1
  },
})
