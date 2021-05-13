import * as React from 'react';
import { View,Text,FlatList,Image,TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import Navigation from '../../navigation/index';
import { NavigationContainer } from '@react-navigation/native';

interface CategoryProps{
  category:{
    id:string,
    title:string,
    movies:{
      
      id: string,
      poster: string
    }[]
  },
}

const Category=(props:CategoryProps)=>{
  const {category} = props;

  const navigation=useNavigation();

  const onMoviePress=(movie)=>{
    navigation.navigate('MovieDetailsScreen',{id:movie.id})
  }
    return(
      <View style={styles.container}>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
              data={category.movies}
              keyExtractor={(category)=>category.id}
              renderItem={({item})=>(
                <TouchableOpacity onPress={()=>{onMoviePress(item)}}>
                  <Image style={styles.image} source={{uri:item.poster}} />
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
      </View>
    );
};

export default Category;