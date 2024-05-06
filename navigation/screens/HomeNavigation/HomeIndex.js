import { View, Text, ScrollView, Dimensions, Pressable } from "react-native";
import React from "react";
import styles from "../../../styles";
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
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
    legend: ["Rainy Days"], // optional
  };
  const chartConfig = {
    backgroundColor: "#88D852",
    backgroundGradientFrom: "#7BE776",
    backgroundGradientTo: "#88D852",
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726",
    },
  };

  const barSpace = 50;
  const chartWidth = dataBars.labels.length * barSpace;


  const screenWidth = Dimensions.get("window").width;
  return (
    <ScrollView style={{ margin: 10 }} contentContainerStyle={{ flexGrow: 1 }}>
      <VStack>  
        <Center>
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
            <Text >0</Text>
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
          <View style={{marginTop:10}}>
            <Text style={styles.graphtlt}>Frecuencia de Riego</Text>
            <ScrollView 
              horizontal={true}
              >
                <BarChart
                  style={{
                    marginVertical: 8,
                    borderRadius: 20,
                  }}
                  data={dataBars}
                  width={screenWidth}
                  height={270}
                  chartConfig={chartConfig}
                  verticalLabelRotation={30}
                  />
              </ScrollView>
          </View>
          <View>
            <Text style={styles.graphtlt}>Humedad</Text>
            <ScrollView horizontal>
            <LineChart
                style={{
                  marginVertical: 8,
                  borderRadius: 20,
                }}
                data={dataLines}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
              />
            </ScrollView>
          </View>
        </VStack>
      </VStack>
    </ScrollView>
  );
};

export default HomeIndex;
