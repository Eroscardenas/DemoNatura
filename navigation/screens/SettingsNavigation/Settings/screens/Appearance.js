import { View, Text } from "react-native";
import React from "react";
import {
  Box,
  VStack,
  Icon,
  EyeIcon,
  HStack,
  PhoneIcon,
  Center,
  Switch,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  Button,
} from "@gluestack-ui/themed";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";

const Appearance = () => {
  return (
    <Box
      style={{
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 10,
        height: 800,
      }}
    >
      <VStack>
        <HStack justifyContent="center">
          <Icon
            as={EyeIcon}
            size={120}
            style={{
              color: "black",
            }}
          />
        </HStack>
        <HStack justifyContent="center">
          <VStack style={{ alignContent: "space-between", marginRight: 100 }}>
            <Center>
              <Text
                style={{
                  textAlign: "right",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Light Mode
              </Text>
              <FontAwesome
                name="mobile-phone"
                size={250}
                color="#00"
                style={{
                  padding: 10,
                }}
              />
              <VStack space={10} alignContent="space-between">
                <Button
                  isDisabled={false}
                  style={{
                    backgroundColor: "lightgreen",
                    padding: 10,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: "green",
                  }}
                >
                  <Fontisto name="sun" size={32} color="#00" />
                </Button>
                <View style={{ marginTop: 30 }}></View>
                <Checkbox size="lg"></Checkbox>
              </VStack>
            </Center>
          </VStack>
          <VStack>
            <VStack style={{ alignContent: "space-between", paddingTop: 1 }}>
              <Center>
                <Text
                  style={{
                    textAlign: "right",
                    fontWeight: "bold",
                    fontSize: 21,
                  }}
                >
                  Dark Mode
                </Text>
                <FontAwesome
                  name="mobile-phone"
                  size={250}
                  color="#00"
                  style={{
                    padding: 10,
                    justifyContent: "center",
                    marginRight: 10,
                  }}
                />
                <VStack space={10} alignContent="space-between">
                  <Button
                    isDisabled={true}
                    style={{
                      backgroundColor: "lightgreen",
                      padding: 10,
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: "green",
                      marginBottom: 30,
                    }}
                  >
                    <MaterialIcons name="dark-mode" size={32} color="#00" />
                  </Button>
                  <View style={{ marginTop: 30 }} />
                  <Checkbox />
                </VStack>
              </Center>
            </VStack>
          </VStack>
        </HStack>

        <HStack
          flex={1}
          justifyContent="start"
          alignItems="start"
          paddingRight={100}
        >
          <Text
            style={{
              fontWeight: "bold",
              color: "#00",
              fontSize: 20,
              paddingRight: 10,
              backgroundColor: "#fff",
              margin: 1,
              paddingLeft: 100,
            }}
          >
            Automatic
          </Text>
          <Switch size="md" justifyContent="start" marginRight={7} />
        </HStack>
        <VStack
          flex={1}
          justifyContent="center"
          alignItems="center"
          p={15}
          paddingTop={50}
        >
          <Text
            style={{ textAlign: "right", fontWeight: "bold", fontSize: 21 }}
          >
            Screen Brightness
          </Text>
          <View style={{ flex: 1, width: "100%" }}>
            <HStack justifyContent="space-between" space={40}>
              <Entypo name="light-down" size={24} color="#00" />
              <Entypo name="light-up" size={24} color="#00" />
            </HStack>

            <Slider defaultValue={30} size="xl" orientation="horizontal">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </View>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Appearance;
