import { View, Text, ScrollView } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Box, VStack, HStack, Heading } from "@gluestack-ui/themed";
import Feather from "@expo/vector-icons/Feather";

const PrivacySupport = () => {
  const styleSubtitle = {
    fontWeight: "bold",
    color: "black",
    paddingBottom: 5,
    paddingTop: 10,
    fontSize: 14,
    backgroundColor: "white",
    paddingRight: 10,
    fontStyle: "normal",
  };
  return (
    <ScrollView style={{ paddingBottom: 480 }}>
      <Box
        style={{
          backgroundColor: "white",
          padding: 10,
          borderRadius: 10,
          height: 800,
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
                paddingBottom: 40,
                paddingTop: 10,
                fontSize: 40,
                backgroundColor: "white",
                paddingRight: 10,
              }}
            >
              Privacy & Security
            </Text>
          </View>
        </VStack>
        <VStack>
          <HStack justifyContent="center" paddingTop={5}>
            <MaterialIcons name="security" size={120} color="black" />
          </HStack>
        </VStack>
        <VStack>
          <HStack>
            <Heading
              style={{
                fontStyle: "italic",
                color: "#3c3c3c",
                paddingBottom: 40,
                paddingTop: 10,
                fontSize: 18,
                backgroundColor: "white",
                paddingRight: 10,
              }}
            >
              Aviso de Privacidad
              <Feather name="help-circle" size={10} color="black" />
              <Box>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "italic",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  Última actualización: [12 de Mayo del 2024] En DomoNatura, nos
                  comprometemos a proteger tu privacidad y tus datos personales.
                  Este Aviso de Privacidad describe cómo recopilamos, utilizamos
                  y compartimos la información que obtenemos a través de nuestra
                  aplicación de control de invernadero automatizado.
                </Text>
                <Heading style={styleSubtitle}>
                  Informacion que recopilamos
                </Heading>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Información proporcionada por el usuario:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Al registrarte en nuestra aplicación, podemos recopilar cierta
                  información personal, como tu nombre, dirección de correo
                  electrónico y preferencias de cultivo.
                </Text>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Datos del Invernadero:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  Para proporcionarte un control efectivo sobre tu invernadero,
                  recopilamos datos relacionados con el entorno de cultivo,
                  incluidos niveles de humedad, temperatura, niveles de luz, y
                  otros parámetros relevantes.
                </Text>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Datos de uso:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Recopilamos información sobre cómo interactúas con nuestra
                  aplicación, como las funciones que utilizas y la frecuencia de
                  uso, para mejorar continuamente la experiencia del usuario.
                </Text>
                <Heading style={styleSubtitle}>
                  Como utilizamos la infomración:
                </Heading>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Operacion de DomoNatura:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Utilizamos la información recopilada para operar, mantener y
                  mejorar nuestra aplicación y los servicios relacionados,
                  incluyendo la personalización de la experiencia del usuario y
                  la provisión de funciones específicas de control de
                  invernadero.
                </Text>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Comunicación Contigo:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Podemos utilizar tu dirección de correo electrónico u otra
                  información de contacto para enviarte comunicaciones
                  relacionadas con el funcionamiento de la aplicación,
                  actualizaciones de productos o información relevante sobre tu
                  cuenta.
                </Text>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Mejora y Desarrollo de Servicios:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Utilizamos datos de uso y retroalimentación de los usuarios
                  para analizar tendencias, realizar investigaciones y mejorar
                  nuestros productos y servicios.
                </Text>
                <Heading style={styleSubtitle}>
                  Como compartimos la información:
                </Heading>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Proveedores de Servicios:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Podemos compartir tu información con proveedores de servicios
                  de confianza que nos ayudan a proporcionar y mantener nuestra
                  aplicación, como proveedores de alojamiento web, servicios de
                  análisis y servicios de atención al cliente.
                </Text>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Cumplimiento Legal:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  En ciertas circunstancias, podemos divulgar tu información en
                  respuesta a procesos legales o cumplimiento de la ley, o
                  cuando sea necesario para proteger nuestros derechos,
                  seguridad o propiedad, o los derechos, seguridad o propiedad
                  de otros.
                </Text>
                <Heading style={styleSubtitle}>
                  Tus Derechos y Opciones:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Tienes derecho a acceder, corregir, actualizar o eliminar tu
                  información personal en cualquier momento. También puedes
                  optar por no recibir ciertas comunicaciones promocionales
                  enviándonos un correo electrónico a DomoNatura@gmail.com .
                </Text>
                <Heading
                  style={{
                    fontStyle: "italic",
                    color: "#3c3c3c",
                    paddingBottom: 40,
                    paddingTop: 10,
                    fontSize: 18,
                    backgroundColor: "white",
                    paddingRight: 10,
                  }}
                >
                  Aviso de Seguridad
                  <Feather name="help-circle" size={10} color="black" />
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Última actualización: 12 de Mayo del 2024 En DomoNatura la
                  seguridad de nuestros usuarios es nuestra máxima prioridad.
                  Este Aviso de Seguridad tiene como objetivo informarte sobre
                  las medidas que tomamos para proteger tu información y
                  garantizar la seguridad de nuestra aplicación de control de
                  invernadero automatizado.
                </Text>
                <Heading style={styleSubtitle}>Protección de Datos:</Heading>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Cifrado de datos:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Utilizamos tecnologías de cifrado sólidas para proteger la
                  transmisión y el almacenamiento de tus datos personales, así
                  como los datos relacionados con tu invernadero. Esto garantiza
                  que tus datos estén protegidos contra accesos no autorizados.
                </Text>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  AccesoSeguro:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Limitamos el acceso a tus datos personales solo a aquellos
                  empleados y contratistas que necesitan acceder a ellos para
                  proporcionar servicios relacionados con la aplicación. Todos
                  los empleados y contratistas están sujetos a estrictas
                  obligaciones de confidencialidad.
                </Text>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Actualizaciones Regulares:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Mantenemos nuestra aplicación actualizada con las últimas
                  correcciones de seguridad y parches de software para
                  protegerte contra vulnerabilidades conocidas.
                </Text>
                <Heading style={styleSubtitle}>
                  Protección Contra Amenazas Externas:
                </Heading>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Monitoreo Continuo:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Supervisamos de forma activa y continua nuestra aplicación y
                  los sistemas relacionados en busca de actividad sospechosa o
                  intentos de acceso no autorizado.
                </Text>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Prevencion de Ataques:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Implementamos medidas de seguridad proactivas, como firewalls
                  y sistemas de detección de intrusiones, para prevenir y
                  mitigar ataques cibernéticos.
                </Text>
                <Heading style={styleSubtitle}>
                  Transparencia y Respomsabilidad:
                </Heading>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Divulgación Responsable:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  En caso de descubrir una vulnerabilidad de seguridad en
                  nuestra aplicación, nos comprometemos a abordarla de manera
                  rápida y responsable, y a informar a los usuarios afectados
                  según corresponda.
                </Text>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Colaboración con Expertos:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Trabajamos en estrecha colaboración con expertos en seguridad
                  cibernética y realizamos auditorías periódicas para garantizar
                  que nuestras prácticas de seguridad estén alineadas con las
                  mejores prácticas de la industria.
                </Text>
                <Heading style={styleSubtitle}>
                  Tu Papel en la Seguridad:
                </Heading>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Manten tu aplicación actualizada:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Asegúrate de mantener tu aplicación siempre actualizada con
                  las últimas versiones y parches de seguridad para beneficiarte
                  de las últimas mejoras de seguridad.
                </Text>
                <Heading
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                  }}
                >
                  Prácticas Seguras:
                </Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Utiliza contraseñas seguras y evita compartir tu información
                  de inicio de sesión con terceros. Mantén tus dispositivos
                  móviles protegidos con contraseña y evita el acceso no
                  autorizado.
                </Text>
                <Heading style={styleSubtitle}> Como Contactarnos:</Heading>
                <Text
                  style={{
                    fontSize: 10,
                    fontStyle: "normal",
                    color: "Black",
                    padding: 20,
                    textAlign: "justify",
                    backgroundColor: "white",
                    fontWeight: "normal",
                  }}
                >
                  {" "}
                  Si tienes alguna pregunta, inquietud o solicitud relacionada
                  con este Aviso de Privacidad o nuestras prácticas de
                  privacidad, por favor contáctanos a través de
                  DomoNatura@gmail.com . Al utilizar nuestra aplicación, aceptas
                  los términos de este Aviso de Privacidad y nuestro uso de tu
                  información personal de acuerdo con lo descrito aquí. Nos
                  reservamos el derecho de actualizar o modificar este Aviso de
                  Privacidad en cualquier momento, por lo que te recomendamos
                  que revises periódicamente esta página para conocer cualquier
                  cambio. Si tienes alguna pregunta, inquietud o sospecha de
                  actividad sospechosa relacionada con la seguridad de nuestra
                  aplicación, no dudes en ponerte en contacto con nosotros a
                  través de DomoNatura@gmail.com. Agradecemos tu confianza en
                  DomoNatura y estamos comprometidos a proporcionarte una
                  experiencia segura y confiable en la gestión de tu invernadero
                  Gracias por confiar en DomoNatura para ayudarte a cultivar tus
                  plantas de manera inteligente y segura. Atentamente, El equipo
                  de DomoNatura.
                </Text>
              </Box>
            </Heading>
          </HStack>
        </VStack>
      </Box>
    </ScrollView>
  );
};

export default PrivacySupport;
