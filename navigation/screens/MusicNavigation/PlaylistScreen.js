import { View, Text,StyleSheet } from "react-native";
import styles from "../../../styles";
import React from "react";
import { Center, VStack } from "@gluestack-ui/themed";

const PlaylistScreen = () => {
  return (
    <View style={{flex:1,backgroundColor:'#C7F4C6'}}>
        <VStack style={{marginTop:15}}>
          <View style={styles.playlist}>
            <Text style={pstyles.playtext}>Playlist 1</Text>
          </View>
          <View style={styles.playlist}>
            <Text style={pstyles.playtext}>Playlist 2</Text>
          </View>
          <View style={styles.playlist}>
            <Text style={pstyles.playtext}>Playlist 3</Text>
          </View>
          </VStack>
    </View>
  );
};

const pstyles = StyleSheet.create({
  playtext: {
    fontSize: 15,
    fontWeight: "500"
  },
});

export default PlaylistScreen;