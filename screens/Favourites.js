import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Favourites = () => {
  return (
    <View style={styles.container}>
      <Text>Favourites</Text>
    </View>
  );
};

export default Favourites;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
