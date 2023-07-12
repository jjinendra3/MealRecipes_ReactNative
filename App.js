import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./screens/Categories";
import MealScreen from "./screens/MealScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Categories"
          screenOptions={{
            headerStyle: { backgroundColor: "#24180f" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#24180f" },
          }}
        >
          <Stack.Screen
            name="Categories"
            component={Categories}
            options={{ title: "MealRecipes" }}
          />
          <Stack.Screen
            name="MealScreen"
            component={MealScreen}
            // options={({route,navigation})=>{//route and navigation of the meal screen can be used here so any app wide state can be performed through this, commented because a better aleternative is done MealScreen.js
            //   const id=route.params.title;
            //   return(
            //     {
            //       title:id
            //     }
            //   )
            // }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
