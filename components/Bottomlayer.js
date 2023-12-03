import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeTabLayer from "./upperLayerTab/HomeTabLayer";
import CalenderTabLayer from "./upperLayerTab/CalenderTabLayer";
//import BottomTabNavigator2 from "./upperLayerTab/BottomTabNavigator2";
import ExploreTabLayer from "./upperLayerTab/ExploreTabLayer";

const Tab = createBottomTabNavigator();

const Bottomlayer = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarActiveBackgroundColor: "lightblue",
        tabBarStyle: [
          {
            display: "flex",
            borderRadius: 20,
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTabLayer}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalenderTabLayer}
        options={{
          tabBarLabel: "Calendar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home1"
        component={HomeTabLayer}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreTabLayer}
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="compass" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottomlayer;
