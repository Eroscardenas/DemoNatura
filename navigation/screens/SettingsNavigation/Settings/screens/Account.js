import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../../../../firebase-config";
import { Avatar, Heading, Box } from "@gluestack-ui/themed";

const auth = getAuth(app);
const Account = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [nombre, setNombre] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");

  const styleBox = {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    height: 800,
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //setUserAuth(user.email);
        console.log(user.email);
        setUser(user);
        setEmail(user.email);
        setNombre(user.displayName);
        setAvatar(user.photoURL);
      } else {
        // setUserAuth(null);
        console.log("Requiere autenticarse");
      }
    });
  }, []);

  return (
    <Box style={styleBox}>
      <View style={{ justifyContent: "center" }}>
        <Text
          style={{
            fontWeight: "bold",
            color: "black",
            paddingBottom: 40,
            paddingTop: 10,
            fontSize: 40,
            paddingRight: 10,
            marginLeft: 150,
          }}
        >
          Account
        </Text>
        <Avatar size="2xl" backgroundColor="#228b22" marginLeft={165}></Avatar>
        {user?.email && (
          <Text marginLeft={165} fontWeight={"italic"}>
            {email}
          </Text>
        )}
        <Box style={{ alignContent: "space-between", gap: 20 }}>
          <Heading
            style={{
              fontWeight: "bold",
              color: "black",
              paddingBottom: 5,
              paddingTop: 10,
              fontSize: 18,
              backgroundColor: "white",
              paddingRight: 10,
              marginLeft: 140,
            }}
          >
            Nombre de Usuario
          </Heading>
          <Text
            width={250}
            height={100}
            placeholder="Default user"
            style={{
              backgroundColor: "#f2f2f2",
              borderBlockColor: "black",
              borderBottomWidth: 1,
              editable: true,
              numberOfLines: 10,
              padding: 10,
            }}
          >
            {nombre ? nombre : "Default user"}
          </Text>
          <Heading>Email</Heading>
          <Text
            width={250}
            height={100}
            placeholder="Holaprueba1@gmail.com"
            style={{
              backgroundColor: "#f2f2f2",
              borderBlockColor: "black",
              borderBottomWidth: 1,
              editable: true,
              numberOfLines: 10,
              padding: 10,
            }}
          >
            {email}
          </Text>
          <Heading>Password</Heading>
          <Text
            width={250}
            height={100}
            placeholder="*********"
            style={{
              backgroundColor: "#f2f2f2",
              borderBlockColor: "black",
              borderBottomWidth: 1,
              editable: true,
              numberOfLines: 10,
              padding: 10,
            }}
          >
            {password}
          </Text>
        </Box>
      </View>
    </Box>
  );
};

export default Account;
