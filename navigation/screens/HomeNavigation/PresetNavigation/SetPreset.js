import { View, Text } from "react-native";
import { Button, Box, ScrollView, VStack, HStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import styles from "../../../../styles";

export default function SetPreset () {
    const navigation = useNavigation();
    
    return (
        <View>
            <Text style={styles.title}>Set Preset</Text>
        </View>
    )
}
