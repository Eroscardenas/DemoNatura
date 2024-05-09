import { View, Text } from "react-native";
import React from "react";
import {
  Center,
  HStack,
  VStack,
  Icon,
  AddIcon,
  Box,
  ScrollView,
} from "@gluestack-ui/themed";

const Notification = () => {
  const recordatorios = [
    { hora: "10:00", titulo: "Tarea 1" },
    { hora: "11:00", titulo: "Tarea 2" },
    { hora: "12:00", titulo: "Tarea 3" },
    { hora: "13:00", titulo: "Tarea 4" },
  ];
  return (
    <VStack>
      <ScrollView>
        <HStack justifyContent="center">
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 40,
                color: "black",
                paddingBottom: 40,
              }}
            >
              Reminders
            </Text>
          </View>
          <Box style={{ position: "absolute", right: 10, paddingTop: 15 }}>
            <Icon as={AddIcon} size="xl" color="blue" />
          </Box>
        </HStack>
        <VStack>
          <HStack justifyContent="left">
            <View style={{ justifyContent: "left", alignItems: "left" }}>
              <Text
                style={{
                  fontWeight: "bold-italic",
                  fontSize: 25,
                  color: "green",
                  paddingBottom: 20,
                  marginLeft: 10,
                }}
              >
                Today
              </Text>
            </View>
          </HStack>
        </VStack>
        <VStack>
          {recordatorios.map((recordatorio) => (
            <HStack
              justifyContent="space-between"
              marginTop={10}
              marginLeft={10}
            >
              <Box
                style={{
                  height: 80,
                  width: 120,
                  backgroundColor: "lightgreen",
                  padding: 10,
                  paddingBottom: 15,
                  borderBlockColor: "black",
                  borderBlockWidth: 2,
                  borderRadius: 15,
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 20,
                    color: "black",
                    paddingTop: 20,
                    paddingBottom: 10,
                    paddingLeft: 10,
                  }}
                >
                  {recordatorio.hora}
                </Text>
              </Box>
              <Text>{recordatorio.titulo}</Text>
            </HStack>
          ))}
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default Notification;
