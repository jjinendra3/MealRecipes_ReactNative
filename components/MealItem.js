import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
export default function MealItem({ item }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={{ flex: 1, borderRadius: 8, overflow: "hidden" }}
        android_ripple={{ color: "grey" }}
      >
        <View style={{ borderRadius: 20, flex: 1 }}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.info}>
          <Text
            style={{ marginHorizontal: 2, fontSize: 14, fontWeight: "bold" }}
          >
            <Ionicons name="timer-outline" /> {item.duration} Minutes
          </Text>
          <Text
            style={{ marginHorizontal: 2, fontSize: 14, fontWeight: "bold" }}
          >
            <FontAwesome name="puzzle-piece" />{" "}
            {item.complexity.charAt(0).toUpperCase() + item.complexity.slice(1)}
          </Text>
          <Text
            style={{ marginHorizontal: 2, fontSize: 14, fontWeight: "bold" }}
          >
            <Ionicons name="pricetag-outline" />{" "}
            {item.affordability.charAt(0).toUpperCase() +
              item.affordability.slice(1)}
          </Text>
        </View>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center",
    margin: 8,
  },
  container: {
    flex: 1,
    marginVertical: 10,
    padding: 5,
    borderRadius: 8,
    overflow: "hidden",
    elevation: 1,
    backgroundColor: "white",
  },
  info: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    padding: 8,
    fontWeight: "bold",
  },
});
