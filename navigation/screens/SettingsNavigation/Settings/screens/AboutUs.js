import { View, Text, ScrollView } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Box, VStack, HStack } from "@gluestack-ui/themed";
import { Entypo } from "@expo/vector-icons";

const AboutUs = () => {
  return (
    <ScrollView>
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
                colorText: "Green",
                paddingBottom: 40,
                paddingTop: 10,
                fontSize: 40,
                backgroundColor: "white",
                paddingRight: 10,
                fontColor: "Green",
              }}
            >
              About Us
            </Text>
          </View>
        </VStack>
        <VStack>
          <HStack justifyContent="center" paddingTop={5}>
            <MaterialCommunityIcons
              name="leaf-circle-outline"
              size={120}
              color="lightgreen"
            />
          </HStack>
        </VStack>
        <Box>
          <Text
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: 20,
              padding: 10,
              backgroundColor: "white",
            }}
          >
            Our Mission
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontStyle: "italic",
              color: "Black",
              padding: 20,
              textAlign: "justify",
              backgroundColor: "white",
            }}
          >
            Our mission is to help people live healthier lives by providing them
            with the tools and resources they need to make informed decisions
            about their health. We believe that everyone deserves access to
            high-quality, affordable healthcare, and we are committed to making
            that a reality for all of our users.
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: 20,
              padding: 10,
              backgroundColor: "white",
            }}
          >
            Our Vission
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontStyle: "italic",
              color: "Black",
              padding: 20,
              textAlign: "justify",
              backgroundColor: "white",
            }}
          >
            Our vision is to create a world where everyone has the opportunity
            to live a healthy life, regardless of their background or
            circumstances. We believe that by empowering people with the
            knowledge and resources they need to take control of their health,
            we can help them live longer, happier lives.
          </Text>
          <Text
            style={{
              fontWeight: "bold",
              color: "black",
              fontSize: 20,
              padding: 10,
              backgroundColor: "white",
            }}
          >
            Values
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontStyle: "italic",
              color: "Black",
              padding: 20,
              textAlign: "justify",
              backgroundColor: "white",
            }}
          >
            Our values are at the core of everything we do. We are committed to
            providing our users with the highest quality healthcare services,
            and we are dedicated to creating a culture of trust, respect, and
            collaboration. We believe in the power of innovation and creativity,
            and we are constantly striving to improve our products and services
            to better meet the needs of our users.
          </Text>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default AboutUs;
