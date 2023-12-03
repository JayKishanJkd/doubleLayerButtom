import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screen/HomeScreen";
import CalendarScreen from "../screen/CalenderScreen";
import ExploreScreen from "../screen/ExploreScreen";
const Tab = createBottomTabNavigator();
const ExploreTabLayer = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveBackgroundColor: "lightblue",
        tabBarActiveBackgroundColor: "lightblue",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "CalendarTab") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "HomeTab1") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "ExploreTab") {
            iconName = focused ? "compass" : "compass-outline";
          }

          // You can add more conditions for additional tabs

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} />

      <Tab.Screen name="CalendarTab" component={CalendarScreen} />
      <Tab.Screen name="HomeTab1" component={HomeScreen} />
      <Tab.Screen name="ExploreTab" component={ExploreScreen} />
    </Tab.Navigator>
  );
};
export default ExploreTabLayer;
