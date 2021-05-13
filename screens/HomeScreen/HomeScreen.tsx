import * as React from 'react';
import styles from './styles';
import { Image,FlatList } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import categories from '../../assets/data/categories';
import Category from '../../components/HomeCatagory/Category';

const firstCategory=categories.items[0];
const secondCategory=categories.items[1];
const thirdCategory=categories.items[2];
const fourthCategory=categories.items[3];


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
