import { View, Text, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../dummy-data";
import { CATEGORIES } from "../dummy-data";
import MealItem from "../components/MealItem";
const MealScreen = ({ route, navigation }) => {
  //CAN ALSO USE useRoute inseated of the props
  const id = route.params.id;
  useLayoutEffect(() => {
    //used uselayout... because we want to load the screenheader simulteanously with components
    const titlenow = CATEGORIES.find((element) => element.id === id).title;
    navigation.setOptions({ title: titlenow }); //sets all the options of the screen header dynamically
  }, [id, navigation]);

  const displayeditems = MEALS.filter((element) => {
    //MEALS already written so element is a specific item in the MEALS array
    return element.categoryIds.indexOf(id) >= 0;
  });
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={displayeditems}
        renderItem={(element) => {
          return <MealItem item={element.item} key={element.item.id} />;
        }}
      />
    </View>
  );
};

export default MealScreen;
