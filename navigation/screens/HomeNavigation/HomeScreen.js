import React from "react";
import styles from "../../../styles";
import { View, Text, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import AroundScreen from "./AroundScreen";
import HomeIndex from "./HomeIndex";
import Process from "./ProcessScreen";

const HomeScreen = ({ navigation }) => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "#95E48D",
          opacity: 0.8,
        },
        tabBarIndicatorStyle: {
          backgroundColor: "#95E48D",
        },
      }}
    >
      <Tab.Screen name="around" component={AroundScreen} />
      <Tab.Screen name="home" component={HomeIndex} />
      <Tab.Screen name="process" component={Process} />
    </Tab.Navigator>
  );
};
export default HomeScreen;
