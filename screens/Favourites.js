import { View, Text, FlatList, Button } from "react-native";
import React, { useContext } from "react";
import { FavouritesContext } from "../data/fav-context";
import MealItem from "../components/MealItem";
import { MEALS } from "../dummy-data";
const Favourites = ({ navigation, router }) => {
  const favs = useContext(FavouritesContext);
  let displayeditems = [];
  if (favs.ids.length !== 0) {
    for (let i = 0; i < MEALS.length; i++) {
      for (let j = 0; j < favs.ids.length; j++) {
        if (favs.ids[j] === MEALS[i].id) {
          displayeditems.push(MEALS[i]);
        }
      }
    }
  }
  const presshandler = (item) => {
    navigation.navigate("Recipe", { detail: item });
  };
  const cat = () => {
    navigation.navigate("MealCategories");
  };
  return (
    <>
      {displayeditems.length !== 0 && (
        <View style={{ flex: 1, padding: 16 }}>
          <FlatList
            data={displayeditems}
            renderItem={(element) => {
              return (
                <MealItem
                  item={element.item}
                  key={element.item.id}
                  onPress={() => presshandler(element.item)}
                />
              );
            }}
          />
        </View>
      )}
      {displayeditems.length === 0 && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "white", fontSize: 28, fontWeight: "bold" }}>
            No Favourites Added!
          </Text>
          <Button title="Categories" onPress={cat} />
        </View>
      )}
    </>
  );
};

export default Favourites;
