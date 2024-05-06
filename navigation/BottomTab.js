import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";

//Screens
import HomeScreen from "./screens/HomeNavigation/HomeScreen";
import Settings from "./screens/SettingsNavigation/SettingsScreen.js";
import MusicNavigation from "./screens/MusicNavigation/MusicNavigation";
import AddDevice from "./screens/DevicesScreen/AddDeviceScreen";
import ConnectedDevices from "./screens/DevicesScreen/ConnectedDevicesScreen";
import AddDeviceInfo from "./screens/DevicesScreen/AddDeviceInfo.js";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Devices") {
            iconName = focused ? "hardware-chip" : "hardware-chip-outline";
          } else if (route.name === "Music") {
            iconName = focused ? "musical-notes" : "musical-notes-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1E8121",
        tabBarInactiveTintColor: "gray",
        headerTitle: "DomoNatura",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#00320E" },
          headerTintColor: "white",
        }}
      />
      <Tab.Screen
        name="Devices"
        component={DevicesStack}
        options={{
          headerStyle: { backgroundColor: "#00320E" },
          headerTintColor: "white",
        }}
      />
      <Tab.Screen
        name="Music"
        component={MusicNavigation}
        options={{
          headerStyle: { backgroundColor: "#00320E" },
          headerTintColor: "white",
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          headerStyle: { backgroundColor: "#00320E" },
          headerTintColor: "white",
        }}
      />
    </Tab.Navigator>
  );
}

function DevicesStack() {
  return (
    <Stack.Navigator initialRouteName="ConnectedDevices">
      <Stack.Screen
        name="ConnectedDevices"
        component={ConnectedDevices}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddDeviceInfo"
        component={AddDeviceInfo}
        options={{
          headerStyle: { backgroundColor: "#00320E" },
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="AddDevice"
        component={AddDevice}
        options={{
          headerStyle: { backgroundColor: "#00320E" },
          headerTintColor: "white",
        }}
      />
    </Stack.Navigator>
  );
}

