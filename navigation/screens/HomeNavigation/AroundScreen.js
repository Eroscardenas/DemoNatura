import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React from "react";
import { Box, Button, HStack, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const AroundScreen = () => {
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [selectedHour, setSelectedHour] = useState("12:00 PM");

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const hours = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    // Add more hours as needed
  ];
  return (
    <View>
      <Box>
        <Box bg="$green900" p="$1" borderRadius={10} margin={10}>
          <VStack>
            <HStack>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 35,
                  color: "white",
                  textAlign: "left",
                  marginHorizontal: 10,
                  marginTop: 10,
                }}
              >
                Enviroment
              </Text>
              <MaterialCommunityIcons
                name="leaf-circle"
                size={30}
                color="black"
                position="absolute"
                right={120}
                bottom={5}
              />
            </HStack>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 25,
                color: "white",
                textAlign: "left",
                marginLeft: 10,
                marginBottom: 10,
              }}
            >
              process
            </Text>
          </VStack>
        </Box>
        <Button
          size="lg"
          bg="$blue100"
          variant="solid"
          action="positive"
          margin={10}
          borderRadius={5}
        >
          <Text style={{ fontWeight: "bold" }}>Clean Enviroment </Text>
        </Button>
      </Box>
      <View style={{ margin: 10 }}>
        <Text>Select a Day:</Text>
        <Picker
          selectedValue={selectedDay}
          onValueChange={(itemValue) => setSelectedDay(itemValue)}
        >
          {days.map((day, index) => (
            <Picker.Item key={index} label={day} value={day} />
          ))}
        </Picker>
        <Text>Select an Hour:</Text>
        <Picker
          selectedValue={selectedHour}
          onValueChange={(itemValue) => setSelectedHour(itemValue)}
        >
          {hours.map((hour, index) => (
            <Picker.Item key={index} label={hour} value={hour} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default AroundScreen;
