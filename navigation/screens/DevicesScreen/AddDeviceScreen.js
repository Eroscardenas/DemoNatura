import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../../styles";
import { TouchableOpacity } from "react-native";

export default function AddDevice() {
  return (
    <View style={customStyles.mainContainer}>
      <Text style={[styles.title, { color: "black" }, { marginTop: 10 }]}>
        Dispositivos disponibles en la red:
      </Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={customStyles.deviceBox}
          onPress={() => console.log("Device 1 pressed")}
        >
          <Ionicons name="wifi" size={24} color="black" />
          <Text style={customStyles.deviceText}>
            Nuevo dispositivo
          </Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const customStyles = StyleSheet.create({
  deviceBox: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  deviceText: {
    marginLeft: 10,
  },
  mainContainer: {
    backgroundColor: "#D4F5D5",
    paddingBottom: 600,
  },
});
