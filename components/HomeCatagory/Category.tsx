import * as React from 'react';
import { View,Text,FlatList,Image } from 'react-native';

import styles from './styles';

interface CategoryProps{
  category:{
    id:string,
    title:string,
    movies:{
      
      id: string,
      poster: string
    }[]
  }
}

const Category=(props:CategoryProps)=>{
  const {category} = props;
  console.log(category)
    return(
      <View style={styles.container}>
            <Text style={styles.title}>{category.title}</Text>
            <FlatList
              data={category.movies}
              keyExtractor={(category)=>category.id}
              renderItem={({item})=>(
                <Image style={styles.image} source={{uri:item.poster}} />
              )}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
      </View>
    );
};

export default Category;