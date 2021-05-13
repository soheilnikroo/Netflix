import * as React from 'react';
import styles from './styles';
import {FlatList } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import {View } from '../../components/Themed';
import categories from '../../assets/data/categories';
import Category from '../../components/HomeCatagory/Category';


const  HomeScreen=()=> {
  return (
    <View style={styles.container}>
      <FlatList
          data={categories.items}
          keyExtractor={(category)=>category.id}
          renderItem={({item})=>(
            <Category category={item} />
          )}
          showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default HomeScreen;
