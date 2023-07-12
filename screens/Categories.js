import { View,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../dummy-data'
import Grid from '../components/Grid'
const Categories = () => {
  return (
      <FlatList
      data={CATEGORIES} renderItem={(element)=>{
        return (
          <View key={element.item.id}>  
          <Grid title={element.item.title} color={element.item.color}/>
        </View>
        )
      }} numColumns={1}/>
  )
}

export default Categories
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff'
//   },
// });
