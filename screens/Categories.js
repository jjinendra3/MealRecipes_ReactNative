import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import { CATEGORIES } from "../dummy-data";
import Grid from "../components/Grid";
const Categories = ({ navigation }) => {
  const presshandler = (CatID, title) => {
    navigation.navigate("MealScreen", {
      id: CatID,
      title: title,
    });
  };
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={(element) => {
        return (
          <View key={element.item.id}>
            <Grid
              title={element.item.title}
              color={element.item.color}
              onPress={() => {
                presshandler(element.item.id, element.item.title);
              }}
            />
          </View>
        );
      }}
      numColumns={1}
    />
  );
};

export default Categories;