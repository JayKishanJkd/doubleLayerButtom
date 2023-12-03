import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screen/HomeScreen";
import CalendarScreen from "../screen/CalenderScreen";
import ExploreScreen from "../screen/ExploreScreen";
const Tab = createBottomTabNavigator();
const CalenderTabLayer = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveBackgroundColor: "lightblue",
        tabBarActiveBackgroundColor: "lightblue",

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "care2") {
            iconName = focused ? "stopwatch" : "stopwatch-outline";
          } else if (route.name === "care") {
            iconName = focused ? "stopwatch" : "stopwatch-outline";
          } else if (route.name === "care1") {
            iconName = focused ? "stopwatch" : "stopwatch-outline";
          } else if (route.name === "care3") {
            iconName = focused ? "stopwatch" : "stopwatch-outline";
          }

          // You can add more conditions for additional tabs

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="care"
        component={HomeScreen}
        options={{
          tabBarLabel: "care",
        }}
      />

      <Tab.Screen
        name="care1"
        component={CalendarScreen}
        options={{
          tabBarLabel: "care",
        }}
      />
      <Tab.Screen
        name="care2"
        component={HomeScreen}
        options={{
          tabBarLabel: "care",
        }}
      />
      <Tab.Screen
        name="care3"
        component={ExploreScreen}
        options={{
          tabBarLabel: "care",
        }}
      />
    </Tab.Navigator>
  );
};
export default CalenderTabLayer;
