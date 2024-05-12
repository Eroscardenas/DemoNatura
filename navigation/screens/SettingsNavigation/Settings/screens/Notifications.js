import { View, Text, ScrollView } from "react-native";
import React from "react";
import {
  Center,
  HStack,
  VStack,
  Icon,
  AddIcon,
  Box,
  Pressable,
} from "@gluestack-ui/themed";

const Notification = ({ navigation }) => {
  const recordatorios = [
    { hora: "10:00", titulo: "Tarea 1" },
    { hora: "11:00", titulo: "Tarea 2" },
    { hora: "12:00", titulo: "Tarea 3" },
    { hora: "13:00", titulo: "Tarea 4" },
  ];
  return (
    <ScrollView>
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
            Reminders
          </Text>
        </View>
        <VStack>
          <Box bg="white" p="$1" borderRadius={10} margin={0}>
            <HStack justifyContent="left">
              <View style={{ justifyContent: "left", alignItems: "left" }}>
                <Text
                  style={{
                    fontWeight: "bold-italic",
                    fontSize: 25,
                    color: "green",
                    paddingBottom: 20,
                    marginLeft: 10,
                    backgroundColor: "white",
                  }}
                >
                  Today
                </Text>
              </View>
            </HStack>
          </Box>
        </VStack>
        <Box
          style={{
            position: "absolute",
            right: 10,
            paddingTop: 25,
            paddingLeft: 10,
            paddingRight: 0.5,
          }}
        >
          <Pressable onPress={() => navigation.navigate("AddNotification")}>
            <Icon as={AddIcon} size="xl" color="blue" />
          </Pressable>
        </Box>
        {recordatorios.map((recordatorio) => (
          <Box bg="white" p="$1" borderRadius={10} margin={0}>
            <HStack justifyContent="space-between">
              <Box
                style={{
                  height: 50,
                  width: 100,
                  backgroundColor: "lightgreen",
                  padding: 10,
                  borderRightWidth: 1,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: "black",
                    paddingBottom: 20,
                    paddingTop: 5,
                    paddingLeft: 10,
                  }}
                >
                  {recordatorio.hora}
                </Text>
              </Box>
              <Box g="white" p="$1" borderRadius={10} margin={0}>
                <Box
                  style={{
                    height: 50,
                    width: 250,
                    backgroundColor: "#3c3c3c",
                    padding: 10,
                    borderRightWidth: 1,
                    borderRadius: 10,
                    paddingLeft: 80,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "black",
                      paddingBottom: 20,
                      paddingTop: 5,
                      paddingLeft: 10,
                      paddingRight: 45,
                    }}
                  >
                    {recordatorio.titulo}
                  </Text>
                </Box>
              </Box>
            </HStack>
          </Box>
        ))}
        <VStack>
          <Box bg="white" p="$1" borderRadius={10} margin={0}>
            <HStack justifyContent="left">
              <View style={{ justifyContent: "left", alignItems: "left" }}>
                <Text
                  style={{
                    fontWeight: "bold-italic",
                    fontSize: 25,
                    color: "green",
                    paddingBottom: 20,
                    marginLeft: 10,
                    backgroundColor: "white",
                  }}
                >
                  May 18th
                </Text>
              </View>
            </HStack>
          </Box>
        </VStack>
        {recordatorios.map((recordatorio) => (
          <Box bg="white" p="$1" borderRadius={10} margin={0}>
            <HStack justifyContent="space-between">
              <Box
                style={{
                  height: 50,
                  width: 100,
                  backgroundColor: "lightgreen",
                  padding: 10,
                  borderRightWidth: 1,
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 18,
                    color: "black",
                    paddingBottom: 20,
                    paddingTop: 5,
                    paddingLeft: 10,
                  }}
                >
                  {recordatorio.hora}
                </Text>
              </Box>
              <Box g="white" p="$1" borderRadius={10} margin={0}>
                <Box
                  style={{
                    height: 50,
                    width: 250,
                    backgroundColor: "grey",
                    padding: 10,
                    borderRightWidth: 1,
                    borderRadius: 10,
                    paddingLeft: 80,
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "bold",
                      fontSize: 18,
                      color: "black",
                      paddingBottom: 20,
                      paddingTop: 5,
                      paddingLeft: 10,
                      paddingRight: 45,
                    }}
                  >
                    {recordatorio.titulo}
                  </Text>
                </Box>
              </Box>
            </HStack>
          </Box>
        ))}
      </VStack>
    </ScrollView>
  );
};

export default Notification;
