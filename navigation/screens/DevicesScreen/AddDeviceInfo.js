import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import styles from "../../../styles";
import leaf from "../../../assets/Leafpng.png";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AddDeviceInfo() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("AddDevice");
  };
  return (
    <ScrollView contentContainerStyle={container.container}>
      <View style={styles.container2}>
        <Image source={leaf} style={styles.image} />
      </View>
      <Text style={container.title}>Configuración de WiFi</Text>
      <Text style={container.instruction}>
        <Text style={container.bold}>Paso 1:</Text> Enciende el dispositivo y
        asegúrate de que el enrutador WiFi esté encendido y funcione
        correctamente.
      </Text>

      <Text style={container.instruction}>
        <Text style={container.bold}>Paso 2:</Text> Accede al menú de
        configuración en la pantalla principal del dispositivo.
      </Text>

      <Text style={container.instruction}>
        <Text style={container.bold}>Paso 3:</Text> Selecciona "Conexiones" o
        "Redes" y luego "WiFi".
      </Text>

      <Text style={container.instruction}>
        <Text style={container.bold}>Paso 4:</Text> Elige tu red WiFi de la
        lista disponible.
      </Text>

      <Text style={container.instruction}>
        <Text style={container.bold}>Paso 5:</Text> Ingresa la contraseña de tu
        red WiFi cuando se te solicite.
      </Text>

      <Text style={container.congrats}>
        ¡Felicidades! Tu dispositivo está ahora conectado a Internet.
      </Text>

      <Text style={container.specs}>
        <Text style={[container.bold, { marginBottom: 20 }]}>
          Especificaciones Técnicas:
        </Text>
        {"\n"}- Conexión WiFi: Utilizamos la última tecnología WiFi para
        garantizar una conexión estable y rápida.{"\n"}- Seguridad: La conexión
        se realiza de forma segura mediante cifrado WPA2 o superior para
        proteger tu información.{"\n"}- Compatibilidad: Nuestro dispositivo es
        compatible con las redes WiFi estándar, asegurando una integración sin
        problemas con tu hogar u oficina.{"\n"}- Actualizaciones: Mantén tu
        dispositivo actualizado para disfrutar de las últimas mejoras y
        características. Puedes hacerlo fácilmente desde el menú de
        configuración.
      </Text>
      <View>
        <Pressable style={styles.press} onPress={handlePress}>
          <Text>Agregar dispositivo</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const container = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  instruction: {
    marginBottom: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  congrats: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },
  specs: {
    marginTop: 10,
  },
});
