import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import app from "../firebase-config";
import styles from "../styles";
import leaaf from "../assets/Leafpng.png";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const auth = getAuth(app);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Autenticado con el email", user.email);
        navigation.replace("HomeRouting");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
    >
      <View style={styles.mainContainer}>
        <View style={styles.container2}>
          <Image source={leaaf} style={styles.image} />
        </View>
        <View style={styles.container}>
          <Text>Inicio de Sesion</Text>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            placeholder="Usuario"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Contraseña"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.container2}>
          <Pressable style={styles.press} onPress={handleLogin}>
            <Text style={styles.pressnest}>Iniciar Sesion</Text>
          </Pressable>
          <Pressable
            style={styles.press}
            onPress={() => navigation.navigate("Register")}
          >
            <Text style={styles.pressnest}>Crear cuenta</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("HomeRouting")}>
            <Text style={{ color: "black", paddingTop: 10 }}>
              Olvidaste tu contraseña?
            </Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
