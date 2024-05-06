import { View, Text } from "react-native";
import { Button, Box, ScrollView, VStack, HStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

export default function SetPreset () {
    const navigation = useNavigation();
    
    return (
        <View>
            <Text>Set Preset</Text>
        </View>
    )
}
