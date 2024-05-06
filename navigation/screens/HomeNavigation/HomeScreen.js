import { View, Text, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AroundScreen from "./AroundScreen";
import HomeIndex from "./HomeIndex";
import Presets from "./PresetNavigation/PresetScreen";
import SetPreset from "./PresetNavigation/SetPreset";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function PresetStack () {
  return (
    <Stack.Navigator initialRouteName="Presets">
      <Stack.Screen
        name="Presets"
        component={Presets}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SetPreset"
        component={SetPreset}
        options={{headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

const HomeScreen = ({ navigation }) => {
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
      <Tab.Screen name="presets" component={PresetStack} />
    </Tab.Navigator>
  );
};
export default HomeScreen;
