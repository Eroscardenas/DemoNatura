import { View, Text, ScrollView, Dimensions, Pressable } from "react-native";
import React from "react";
import {
  Button,
  ButtonText,
  Center,
  HStack,
  VStack,
} from "@gluestack-ui/themed";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const HomeIndex = () => {
  const dataBars = {
    labels: ["8:00", "12:00", "16:00", "20:00", "02:00", "06:00"],
    datasets: [
      {
        data: [20, 32, 28, 30, 32, 43],
      },
    ],
  };
  const dataLines = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Rainy Days"], // optional
  };
  const chartConfig = {
    backgroundColor: "#2B943E",
    backgroundGradientFrom: "#2B943E",
    backgroundGradientTo: "#2B943E",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };

  const screenWidth = Dimensions.get("window").width;
  return (
    <ScrollView style={{ margin: 5 }} contentContainerStyle={{ flexGrow: 1 }}>
      <VStack>
        <Center padding={30}>
          <MaterialCommunityIcons name="pine-tree" size={50} color="black" />
          <Button bg="green" borderRadius={5} marginTop={20}>
            <ButtonText>Actual status</ButtonText>
          </Button>
          <Text style={{ marginTop: 40, marginBottom: 40 }}>
            Plant name... feels
          </Text>
          <MaterialCommunityIcons
            name="face-man-outline"
            size={75}
            color="gray"
          />
        </Center>
        <HStack padding={10} mx={30} justifyContent="space-between">
          <VStack>
            <FontAwesome5 name="temperature-high" size={24} color="black" />
            <Text style={{ textAlign: "center" }}>0</Text>
          </VStack>
          <VStack>
            <Feather name="sun" size={24} color="black" />
            <Text>0</Text>
          </VStack>
          <VStack>
            <Entypo name="drop" size={24} color="black" />
            <Text>0</Text>
          </VStack>
          <VStack>
            <FontAwesome name="heartbeat" size={24} color="black" />
            <Text>0</Text>
          </VStack>
        </HStack>
        <VStack>
          <View style={{marginRight:30}}>
            <BarChart
              style={{
                marginVertical: 8,
                borderRadius: 20,
              }}
              data={dataBars}
              width={screenWidth}
              height={245}
              chartConfig={chartConfig}
              verticalLabelRotation={30}
            />
          </View>
          <LineChart
            data={dataLines}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default HomeIndex;
