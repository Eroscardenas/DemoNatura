import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens
import PlaylistScreen from "./PlaylistScreen";
import MusicScreen from "./MusicScreen";
import SongsScreen from "./SongsScreen";
import AlbumsScreen from "./AlbumsScreen";
import ArtistsScreen from "./ArtistsScreen";

export default function MusicNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="MusicScreen">
      <Stack.Screen
        name="MusicScreen"
        component={MusicScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Playlist"
        component={PlaylistScreen}
      />
      <Stack.Screen 
        name="Artists" 
        component={ArtistsScreen}
      />
      <Stack.Screen 
        name="Songs" 
        component={SongsScreen}
      />
      <Stack.Screen 
        name="Albums" 
        component={AlbumsScreen} 
      />
    </Stack.Navigator>
  );
}
