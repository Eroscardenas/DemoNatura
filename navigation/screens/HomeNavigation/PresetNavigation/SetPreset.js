import React, { useState } from 'react';
import { View, Text, TextInput } from "react-native";
import { Button, Box, ScrollView, VStack, HStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import styles from "../../../../styles";
import { Feather } from '@expo/vector-icons';

export default function SetPreset() {
    const navigation = useNavigation();
    
    // State variables for each parameter
    const [light, setLight] = useState('');
    const [humidity, setHumidity] = useState('');
    const [temperature, setTemperature] = useState('');

    return (
        <View style={{paddingTop: 10, backgroundColor: "#C7F4C6", flex: '1'}}>
            <Text style={styles.title}>Set Preset</Text>
            <Box style={{backgroundColor: 'white', margin: 30, marginTop: 0, borderRadius: 20, height: 320}}>
                <VStack style={{padding: 20, alignItems: 'flex-start'}}>
                    <HStack style={{margin:18}}>
                        <Text style={{fontSize:18,fontWeight:'bold',marginRight:10,paddingTop:10}}>Light:</Text>
                        <TextInput
                            style={styles.inputpr}
                            value={light}
                            onChangeText={setLight}
                            keyboardType="numeric"
                            placeholder="0"
                        />
                        <Feather name="help-circle" size={24} color="black" />
                    </HStack>
                    <HStack style={{margin:18}}>
                        <Text style={{fontSize:18,fontWeight:'bold',marginRight:10,paddingTop:10}}>Humidity:</Text>
                        <TextInput
                            style={styles.inputpr}
                            value={humidity}
                            onChangeText={setHumidity}
                            keyboardType="numeric"
                            placeholder="0"
                        />
                    </HStack>
                    <HStack style={{margin:18}}>
                        <Text style={{fontSize:18,fontWeight:'bold',marginRight:10,paddingTop:10}}>Temperature:</Text>
                        <TextInput
                            style={styles.inputpr}
                            value={temperature}
                            onChangeText={setTemperature}
                            keyboardType="numeric"
                            placeholder="0"
                        />
                    </HStack>
                    <Button style={{}} onPress={() => navigation.navigate('PresetNavigation')}>
                        <Text style={{}}>Set Preset</Text>
                    </Button>
                </VStack>
            </Box>
        </View>
    );
}
