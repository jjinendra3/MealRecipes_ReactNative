import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function Grid({ title, color }) {
  return (
    <View style={[styles.container,{backgroundColor:color}]}>
        <Pressable style={{flex:1}} android_ripple={{color:'#ccc'}}>

        <View style={styles.inner}>  
          <Text style={styles.title}>{title}</Text>
        </View>
        </Pressable>
        
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    elevation:4,
    margin:16,
    borderRadius:8,
    height:150,
},
inner:{
    alignItems:'center',
    padding:16,
    justifyContent:'center',
    flex: 1,
  },
  title:{
    fontWeight:'bold',
    fontSize:20,
  }
});
