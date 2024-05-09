import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Notifications from "./screens/Notifications";
import Settings from "../SettingsScreen";
import Appearance from "./screens/Appearance";
import AboutUs from "./screens/AboutUs";
import HelpSupport from "./screens/HelpSupport";
import HistorialGraficas from "./screens/HistorialGraficas";
import PrivacySupport from "./screens/PrivacySupport";
import Account from "./screens/Account";

const NavigationSettings = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Apperance" component={Appearance} />
      <Stack.Screen name="AboutUs" component={AboutUs} />
      <Stack.Screen name="HelpSupport" component={HelpSupport} />
      <Stack.Screen name="HistorialGraficas" component={HistorialGraficas} />
      <Stack.Screen name="PrivacySupport" component={PrivacySupport} />
    </Stack.Navigator>
  );
};

export default NavigationSettings;
