import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { LogBox } from "react-native";
//Screens
import Login from "./navigation/Login";
import Register from "./navigation/Register";
import BottomTab from "./navigation/BottomTab";

export default function App() {
  const Stack = createNativeStackNavigator();
  LogBox.ignoreAllLogs(true);

  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator
          initialRouteName="Looooo"
          screenOptions={{
            headerStyle: {
              backgroundColor: "#0C3A0A", // Change this to the color you want
            },
            headerTitleAlign: "center",
            headerTintColor: "white", // Change this to the color you want for the text/icons in the header
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerTitle: "DomoNatura",
            }}
          />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen
            name="HomeRouting"
            component={BottomTab}
            options={{ headerShown: false, gestureEnabled: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
