import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "../../../styles";

export default function MusicScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.playercontainer}>
        <Text
          style={[
            styles.title,
            { color: "black" },
            { marginTop: 10 },
            { textAlign: "left" },
          ]}
        >
          Library
        </Text>
        <Pressable
          style={styles.pressplayer}
          onPress={() => navigation.navigate("Playlist")}
        >
          <Text style={styles.subtitle}>Playlist</Text>
        </Pressable>
        <Pressable 
          style={styles.pressplayer} 
          onPress={() => navigation.navigate("Artists")}
        >
          <Text style={styles.subtitle}>Artists</Text>
        </Pressable>
        <Pressable 
          style={styles.pressplayer}
          onPress={() => navigation.navigate("Songs")}
          >
          <Text style={styles.subtitle}>Songs</Text>
        </Pressable>
        <Pressable 
          style={styles.pressplayer}
          onPress={() => navigation.navigate("Albums")}
          >
          <Text style={styles.subtitle}>Albums</Text>
        </Pressable>
      </View>
      <View style={styles.player}></View>
    </View>
  );
}
