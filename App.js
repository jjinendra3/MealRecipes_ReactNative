import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Categories from "./screens/Categories";
import MealScreen from "./screens/MealScreen";
import Recipe from "./screens/Recipe";
import Favourites from "./screens/Favourites";
import { Ionicons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#24180f" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#24180f" },
        headerShadowVisible: false,
        headerTitleAlign: "center",
        drawerContentStyle: { backgroundColor: "#24180f" },
        drawerInactiveTintColor: "white",
        drawerActiveBackgroundColor: "white",
        drawerActiveTintColor: "#24180f",
      }}
    >
      <Drawer.Screen
        name="MealCategories"
        component={Categories}
        options={{
          title: "Meal Recipes",
          drawerIcon: ({ color, size }) => {
            return <Ionicons color={color} size={size} name="list" />;
          },
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={Favourites}
        options={{
          title: "Favourites",
          drawerIcon: ({ color, size }) => {
            return <Ionicons color={color} size={size} name="star" />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};
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
            headerShadowVisible: false,
            headerTitleAlign: "center",
          }}
        >
          <Stack.Screen
            name="Categories"
            component={DrawerNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="MealScreen" component={MealScreen} />
          <Stack.Screen name="Recipe" component={Recipe} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
