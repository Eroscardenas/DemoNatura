import { View, Text } from "react-native";
import { Button, Box, ScrollView, VStack, HStack } from "@gluestack-ui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styles from "../../../../styles";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const Presets = () => {
  const navigation = useNavigation();
    
  const handlePress = () => {
      navigation.navigate("SetPreset");
  };
  return (
    <View style={{ alignItems: "center" , backgroundColor:"#C7F4C6"}}>
      <ScrollView>
      <Box style={{marginTop: 10, borderRadius: 10, alignItems:'flex-start',paddingHorizontal:15, paddingTop:15}}>
        <Text style={{fontWeight:"bold", fontSize:25}}>Environment Presets</Text>
      </Box>
      <VStack style={{marginTop:10}}>
        <HStack>
          <Button style={styles.presetbox} onPress={handlePress}>
            <Text style={styles.prboxtext}>Interior</Text>
          </Button>
          <Button style={styles.presetbox}>
          <Text style={styles.prboxtext}>Exterior</Text>
          </Button>
        </HStack>
        <HStack>
        <Button style={styles.presetbox}>
          <Text style={styles.prboxtext}>Shadow</Text>
        </Button>
        <Button style={styles.presetbox}>
          <Text style={styles.prboxtext}>Full Sun</Text>
        </Button>
        </HStack>
        <HStack>
        <Button style={styles.presetbox}>
          <Text style={styles.prboxtext}>Suculentas</Text>
        </Button>
        <Button style={styles.presetbox}>
          <Text style={styles.prboxtext}>Custom</Text>
        </Button>
        </HStack>
      </VStack>
      </ScrollView>
    </View>
  );
};

export default Presets;

