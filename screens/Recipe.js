import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React, { useEffect, useContext } from "react";
import { Entypo, Ionicons, FontAwesome } from "@expo/vector-icons";
import { FavouritesContext } from "../data/fav-context";
const Recipe = ({ route, navigation }) => {
  const {
    affordability,
    categoryIds,
    complexity,
    duration,
    id,
    imageUrl,
    ingredients,
    isGlutenFree,
    isLactoseFree,
    isVegan,
    isVegetarian,
    steps,
    title,
  } = route.params.detail;
  const favouriteMealsCtx = useContext(FavouritesContext);
  const mealIsfavourite = favouriteMealsCtx.ids.includes(id);
  const changefavourite = () => {
    if (mealIsfavourite) {
      favouriteMealsCtx.removeFavourite(id);
    } else {
      favouriteMealsCtx.addFavourite(id);
    }
  };
  useEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => {
        return (
          <Ionicons
            name={mealIsfavourite ? "star" : "star-outline"}
            color="white"
            size={24}
            onPress={changefavourite}
          />
        );
      },
    });
  }, [navigation, mealIsfavourite]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={{ alignItems: "center" }}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.texter}>
            <Ionicons name="timer-outline" /> {duration} Minutes
          </Text>
          <Text style={styles.texter}>
            <FontAwesome name="puzzle-piece" />{" "}
            {complexity.charAt(0).toUpperCase() + complexity.slice(1)}
          </Text>
          <Text style={styles.texter}>
            <Ionicons name="pricetag-outline" />{" "}
            {affordability.charAt(0).toUpperCase() + affordability.slice(1)}
          </Text>
        </View>
        <View style={styles.maindetail}>
          <View style={styles.details}>
            <Text style={styles.text}>
              Gluten Free:{" "}
              {isGlutenFree ? <Entypo name="check" /> : <Entypo name="cross" />}
            </Text>
            <Text style={styles.text}>
              Lactose Free:{" "}
              {isLactoseFree ? (
                <Entypo name="check" />
              ) : (
                <Entypo name="cross" />
              )}
            </Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.text}>
              Vegan:{" "}
              {isVegan ? <Entypo name="check" /> : <Entypo name="cross" />}
            </Text>
            <Text style={styles.text}>
              Vegetarian:{" "}
              {isVegetarian ? <Entypo name="check" /> : <Entypo name="cross" />}
            </Text>
          </View>
        </View>
        <View style={{ marginVertical: 10, marginBottom: 20 }}>
          <Text style={styles.ingred}>Ingredients</Text>
          {ingredients.map((element) => {
            return (
              <View key={element}>
                <Text style={styles.stepingred}>{element}</Text>
              </View>
            );
          })}
        </View>
        <View>
          <Text style={styles.ingred}>Method</Text>
          {steps.map((element) => {
            return (
              <View key={element}>
                <Text style={styles.stepingred}>{element}</Text>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default Recipe;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  texter: {
    color: "white",
    marginHorizontal: 2,
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    color: "white",
    marginHorizontal: 2,
    fontSize: 14,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: 300,
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  maindetail: {
    marginTop: 5,
    marginBottom: 10,
  },

  info: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    padding: 8,
    fontWeight: "bold",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    color: "#F2EAD3",
    margin: 8,
  },
  ingred: {
    fontSize: 18,
    borderBottomWidth: 1,
    borderBottomColor: "white",
    color: "white",
    marginHorizontal: 2,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    padding: 2,
    marginBottom: 10,
  },
  stepingred: {
    fontSize: 14,
    marginVertical: 4,
    color: "black",
    backgroundColor: "#F8F1F1",
    borderRadius: 8,
    fontWeight: "600",
    padding: 5,
  },
});
