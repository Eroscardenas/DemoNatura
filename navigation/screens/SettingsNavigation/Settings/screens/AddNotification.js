import { View, Text, TextInput } from "react-native";
import React from "react";
import {
  Box,
  Button,
  HStack,
  VStack,
  Switch,
  Spinner,
  Icon,
  Input,
  InputField,
  AddIcon,
} from "@gluestack-ui/themed";
import { Picker } from "@react-native-picker/picker";
const selectOptions = [
  {
    label: "Daily",
    value: "daily",
  },
  {
    label: "Weekly",
    value: "weekly",
  },
  {
    label: "Monthly",
    value: "monthly",
  },
  {
    label: "Yearly",
    value: "yearly",
  },
  {
    label: "Custom",
    value: "custom",
  },
];
const AddNotification = () => {
  return (
    <Box
      bg="white"
      p="$1"
      borderRadius={10}
      margin={0}
      width={400}
      height={800}
    >
      <VStack>
        <HStack justifyContent="center">
          <Box height={66} width={350} p="$1" margin={10} borderColor="black">
            <Text
              style={{
                padding: 10,
                fontStyle: "bold",
              }}
            >
              Title
            </Text>
            <TextInput
              placeholder="Title"
              style={{
                backgroundColor: "#f2f2f2",
                borderBlockColor: "black",
                borderBottomWidth: 1,
                editable: true,
                numberOfLines: 2,
                padding: 10,
              }}
            />

            {/* <Text
              style={{
                fontWeight: "bold",
                color: "black",
                paddingBottom: 40,
                paddingTop: 10,
                fontSize: 20,
                backgroundColor: "white",
                paddingRight: 10,
                backgroundColor: "lightgrey",
                justifyContent: "start",
                marginTop: 40,
              }}
            >
              Título
            </Text> */}
          </Box>
        </HStack>
        <HStack justifyContent="center">
          <Box height={66} width={350} p="$1" margin={10} borderColor="black">
            <Text
              style={{
                padding: 10,
              }}
            >
              Starts:
            </Text>
            <TextInput
              placeholder="00:00"
              style={{
                backgroundColor: "#f2f2f2",
                borderBlockColor: "black",
                borderBottomWidth: 1,
                editable: true,
                numberOfLines: 2,
                padding: 10,
              }}
            />
          </Box>
        </HStack>

        <HStack justifyContent="center">
          <Box height={66} width={350} p="$1" margin={10} borderColor="black">
            <Text
              style={{
                padding: 10,
              }}
            >
              Ends:
            </Text>
            <TextInput
              placeholder="00:00"
              style={{
                backgroundColor: "#f2f2f2",
                borderBlockColor: "black",
                borderBottomWidth: 1,
                editable: true,
                numberOfLines: 2,
                padding: 10,
              }}
            />
          </Box>
        </HStack>
        <HStack justifyContent="center">
          <Box height={66} width={350} p="$1" margin={10}>
            <Text
              style={{
                textAllign: "left",
                fontWeight: "bold",
                color: "black",
                paddingBottom: 40,
                paddingTop: 10,
                fontSize: 20,
                backgroundColor: "white",
                paddingRight: 10,
                backgroundColor: "white",
                justifyContent: "end",
                margin: 1,
                paddingLeft: 100,
              }}
            >
              <Switch
                size="md"
                isDisabled={false}
                paddingLeft={0}
                paddingBottom={10}
                justifyContent="start"
              />
              Frequency
            </Text>
          </Box>
        </HStack>
        <HStack justifyContent="center">
          <Box height={66} width={350} p="$1" margin={10}>
            {/* <Text
              style={{
                fontWeight: "bold",
                color: "black",
                paddingBottom: 40,
                paddingTop: 10,
                fontSize: 20,
                backgroundColor: "white",
                paddingRight: 10,
                backgroundColor: "#f2f2f2",
                justifyContent: "center",
                marginTop: 1,
              }}
            >
              Repeat
            </Text> */}
            <Picker
              onValueChange={(itemValue, itemIndex) => console.log(itemValue)}
              style={{
                backgroundColor: "#f2f2f2",

                borderBlockEndColor: "black",
                borderBottomWidth: 1,
                editable: true,
                numberOfLines: 2,
                padding: 10,
              }}
            >
              {selectOptions.map((option) => (
                <Picker.Item label={option.label} value={option.value} />
              ))}
            </Picker>
          </Box>
        </HStack>
        <HStack justifyContent="center">
          <Box height={66} width={350} p="$1" margin={10} borderColor="black">
            <Text
              style={{
                padding: 10,
              }}
            >
              Concept:
            </Text>
            <TextInput
              width={350}
              height={100}
              placeholder="Description"
              style={{
                backgroundColor: "#f2f2f2",
                borderBlockColor: "black",
                borderBottomWidth: 1,
                editable: true,
                numberOfLines: 10,
                padding: 10,
              }}
            />
          </Box>
        </HStack>
        <View>
          <Text></Text>
        </View>
      </VStack>
    </Box>
  );
};

export default AddNotification;
