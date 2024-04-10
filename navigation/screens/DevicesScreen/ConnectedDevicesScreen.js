import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import styles from "../../../styles";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function ConnectedDevices() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("AddDeviceInfo");
  };

  return (
    <View style={customStyles.mainContainer}>
      <Text
        style={[
          styles.title,
          { color: "black" },
          { marginTop: 30 },
          { marginLeft: 20 },
          { textAlign: "left" },
        ]}
      >
        Dispositivos vinculados:
      </Text>
      <View style={styles.container}>
        <TouchableOpacity
          style={customStyles.deviceBox}
          onPress={() => console.log("Device 1 pressed")}
        >
          <Ionicons name="wifi" size={24} color="black" />
          <Text style={customStyles.deviceText}>
            Dispositivo 1: Planta de sombra
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={customStyles.deviceBox}
          onPress={() => console.log("Device 2 pressed")}
        >
          <Ionicons name="wifi" size={24} color="black" />
          <Text style={customStyles.deviceText}>Dispositivo 2: Cactus</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={customStyles.deviceBox}
          onPress={() => console.log("Device 3 pressed")}
        >
          <Ionicons name="wifi" size={24} color="black" />
          <Text style={customStyles.deviceText}>
            Dispositivo 3: Planta de chiltepin
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container2}>
        <Pressable style={styles.press} onPress={handlePress}>
          <Text>Agregar dispositivo</Text>
        </Pressable>
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
