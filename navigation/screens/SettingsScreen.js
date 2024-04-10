import { View, Text, Pressable, Alert } from "react-native";
import React, { useState } from "react";
import styles from "../../styles";
import app from "../../firebase-config";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { HStack, Box, VStack, Avatar } from "@gluestack-ui/themed";
import {
  FontAwesome,
  AntDesign,
  Feather,
  Entypo,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Settings = ({ navigation }) => {
  const [userAuth, setUserAuth] = useState();
  const auth = getAuth(app);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserAuth(user.email);
      console.log(user);
    } else {
      console.log("Ha cerrado inicio de sesion");
    }
  });

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      })
      .catch((error) => {
        alert(
          `Se perdió la conexión, intentalo más tarde. \n Código de error: ${error}`
        );
      });
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Alert",
      "Are you sure you want to delete your account and process?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
      ]
    );
  };

  return (
    <View>
      <Box bg={"white"} p="$5">
        <VStack space="3xl" reversed={false}>
          <HStack space="sm" reversed={false}>
            <Avatar bgColor="#2B943E" size="md" borderRadius="$full" />
            <Text
              style={[
                styles.title,
                { color: "black" },
                { marginTop: 5 },
                { marginBottom: 0 },
                { textAlign: "left" },
              ]}
            >
              Account
            </Text>
          </HStack>
          <Box style={{ borderBottomWidth: 3 }}>
            <Pressable>
              <HStack
                style={{
                  padding: 10,
                  justifyContent: "space-between",
                  width: "45%",
                }}
              >
                <FontAwesome name="bell" size={24} color="black" />
                <Text font marginTop={3}>
                  Notifications
                </Text>
              </HStack>
            </Pressable>
          </Box>
          <Box style={{ borderBottomWidth: 3 }}>
            <Pressable>
              <HStack
                style={{
                  padding: 10,
                  justifyContent: "space-between",
                  width: "43%",
                }}
              >
                <Feather name="eye" size={24} color="black" />
                <Text>Appearence</Text>
              </HStack>
            </Pressable>
          </Box>
          <Box style={{ borderBottomWidth: 3 }}>
            <Pressable>
              <HStack
                style={{
                  padding: 10,
                  justifyContent: "space-between",
                  width: "59%",
                }}
              >
                <MaterialIcons name="security" size={24} color="black" />
                <Text>Privacy and Security</Text>
              </HStack>
            </Pressable>
          </Box>
          <Box style={{ borderBottomWidth: 3 }}>
            <Pressable>
              <HStack
                style={{
                  padding: 10,
                  justifyContent: "space-between",
                  width: "36%",
                }}
              >
                <MaterialIcons name="insights" size={24} color="black" />
                <Text>Historial</Text>
              </HStack>
            </Pressable>
          </Box>
          <Box style={{ borderBottomWidth: 3 }}>
            <Pressable>
              <HStack
                style={{
                  padding: 10,
                  justifyContent: "space-between",
                  width: "53%",
                }}
              >
                <Entypo name="help-with-circle" size={24} color="black" />
                <Text>Help and Support</Text>
              </HStack>
            </Pressable>
          </Box>
          <Box style={{ borderBottomWidth: 3 }}>
            <Pressable>
              <HStack
                style={{
                  padding: 10,
                  justifyContent: "space-between",
                  width: "38%",
                }}
              >
                <MaterialCommunityIcons
                  name="leaf-circle"
                  size={24}
                  color="black"
                />
                <Text>About Us</Text>
              </HStack>
            </Pressable>
          </Box>
          <Box>
            <Pressable onPress={handleSignOut}>
              <HStack style={{ padding: 10, justifyContent: "center" }}>
                <FontAwesome
                  name="power-off"
                  size={24}
                  color="blue"
                  style={{ marginRight: 10 }}
                />
                <Text marginLeft={10}>SignOut</Text>
              </HStack>
            </Pressable>
          </Box>
          <Box>
            <Pressable onPress={handleDeleteAccount}>
              <HStack style={{ padding: 10, justifyContent: "center" }}>
                <AntDesign
                  name="delete"
                  size={24}
                  color="red"
                  style={{ marginRight: 10 }}
                />
                <Text marginLeft={10}>Delete Account</Text>
              </HStack>
            </Pressable>
          </Box>
        </VStack>
      </Box>
    </View>
  );
};

export default Settings;
