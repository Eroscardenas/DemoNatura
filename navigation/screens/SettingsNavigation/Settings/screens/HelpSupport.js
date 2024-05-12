import { View, Text, Button } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Box, VStack, HStack, Heading, ScrollView } from "@gluestack-ui/themed";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Linking } from "expo-linking";

const HelpSupport = ({ navigation }) => {
  const styleTitle = {
    fontWeight: "bold",
    color: "black",
    paddingBottom: 5,
    paddingTop: 10,
    fontSize: 16,
    backgroundColor: "white",
    paddingRight: 10,
  };
  const styleText = {
    fontSize: 14,
    fontStyle: "italic",
    color: "Black",
    padding: 20,
    textAlign: "justify",
    backgroundColor: "white",
  };
  return (
    <ScrollView style={{ paddingBottom: 480 }}>
      <Box
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <VStack>
          <HStack justifyContent="center"></HStack>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: 40,
              }}
            >
              Help & Support
            </Text>
          </View>
        </VStack>
        <VStack>
          <HStack justifyContent="center" paddingTop={5}>
            <Entypo name="help-with-circle" size={120} color="#000" />
          </HStack>
        </VStack>
        <VStack justifyContent="center">
          <Text
            style={{
              fontSize: 12,
              fontStyle: "italic",
              color: "#000",
              padding: 20,
              textAlign: "justify",
              backgroundColor: "#fff",
            }}
          ></Text>
          <Heading>
            -----------------------------------------------------
          </Heading>
          <Text style={styleText}>
            Hola Usuario! Bienvenido a DomoNatura! Estamos aquí para asegurarnos
            de que tu experiencia de cultivo sea lo más fluida y exitosa
            posible. Aquí tienes algunos consejos útiles para sacar el máximo
            provecho de nuestra aplicación:
          </Text>
          <Heading>
            -----------------------------------------------------
          </Heading>
          <Heading style={styleTitle}>Configuracion Inicial</Heading>
          <Text style={styleText}>
            Al configurar tu invernadero, asegúrate de conectar todos los
            sensores y dispositivos correctamente. Consulta nuestra guía de
            configuración para obtener instrucciones detalladas paso a paso.
            Programación de riego y fertilización: Utiliza nuestra función de
            programación para establecer horarios de riego y fertilización
            automáticos. Ajusta los intervalos y la duración según las
            necesidades específicas de tus plantas.
          </Text>
          <Heading style={styleTitle}>Monitoreo Remoto:</Heading>
          <Text style={styleText}>
            ¿Fuera de casa? No te preocupes. Nuestra aplicación te permite
            monitorear y controlar tu invernadero desde cualquier lugar a través
            de tu dispositivo móvil. Verifica los niveles de humedad,
            temperatura y otros parámetros importantes en tiempo real.
          </Text>
          <Heading style={styleTitle}>Alertas y Notificaciones:</Heading>
          <Text style={styleText}>
            {" "}
            Configura alertas para recibir notificaciones instantáneas sobre
            condiciones anormales en tu invernadero, como niveles de humedad o
            temperatura fuera de rango. Así podrás tomar medidas rápidas para
            proteger tus plantas.
          </Text>
          <Heading style={styleTitle}>Soporte Tecnico</Heading>
          <Text style={styleText}>
            {" "}
            Si tienes alguna pregunta o encuentras algún problema técnico,
            nuestro equipo de soporte está aquí para ayudarte. Ponte en contacto
            con nosotros a través de la aplicación y te brindaremos asistencia
            rápida y personalizada.
          </Text>
          <Text style={styleText}>
            Recuerda, nuestro objetivo es hacer que el cultivo en tu invernadero
            sea lo más sencillo y gratificante posible. ¡Gracias por confiar en
            nosotros para cuidar de tus plantas! ¡Que tus cultivos sean
            prósperos!
          </Text>
          {/* <Button
            type="success"
            icon={<Ionicons name="logo-whatsapp" size={24} color={white} />}
            onPress={() =>
              Linking.openURL(
                "whatsapp://send?text=Hola&phine=${profile.phonenumber}"
              ).catch(() => {
                Alert.alert(
                  "No hemos podido encontrar la aplicación de WhatsApp en tu dispositivo, por favor intentelo de nuevo"
                );
              })
            }
          >
            Contactar a un asesor a soporte
          </Button> */}
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default HelpSupport;
