import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicon from "react-native-vector-icons/Ionicons";

// Screen
import transaksiScreen from "../Screens/Transaksi";
import homeScreen from "../Screens/Home";
import favoriteScreen from "../Screens/Favorite";
import searchScreen from "../Screens/Search";
import userScreen from "../Screens/User";


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const homeName = "Home";
  const transaksiName = "Detail transaksi";
  const searchName = "Search";
  const favoriteName = "Favorite";
  const userName = "Profile";
  return (
    <Tab.Navigator
      initialRouteName={transaksiName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? "home" : "home-outline";
          } else if (rn === transaksiName) {
            iconName = focused ? "list" : "list-outline";
          } else if (rn === searchName) {
            iconName = focused ? "search" : "search-outline";
          } else if (rn === favoriteName) {
            iconName = focused ? "heart" : "heart-outline";
          } else if (rn === userName) {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicon name={iconName} size={size} color={color} />;
        },
        
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "grey",
      }}
    >
      <Tab.Screen name={homeName} component={homeScreen} />
      <Tab.Screen name={transaksiName} component={transaksiScreen} />
      <Tab.Screen name={searchName} component={searchScreen} />
      <Tab.Screen name={favoriteName} component={favoriteScreen} />
      <Tab.Screen name={userName} component={userScreen} />
    </Tab.Navigator>
  );
}
