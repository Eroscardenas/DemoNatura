import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import app from "../firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import styles from "../styles";
import leaf from "../assets/Leafpng.png";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const auth = getAuth(app);

  const handleSignUp = () => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Registrado con el email", user.email);
          navigation.navigate("HomeRouting");
        })
        .catch((error) => alert(error.message));
    } else {
      alert("El usuario y la contraseña no coinciden");
    }
  };

  return (
    <KeyboardAvoidingView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
    >
      <View style={styles.mainContainer}>
        <View style={styles.container2}>
          <Image source={leaf} style={styles.image} />
        </View>
        <View>
          <View style={styles.container}>
            <Text>Correo electrónico</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              placeholder="Correo electrónico"
              value={email}
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
            <Text style={{ marginTop: 10 }}>Contraseña</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Contraseña"
              value={password}
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
            <Text style={{ marginTop: 10 }}>Repite tu contraseña</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Repite tu contraseña"
              value={confirmPassword}
              onChangeText={(text) => setConfirmPassword(text)}
            ></TextInput>
          </View>
          <View style={{ alignItems: "center" }}>
            <Pressable style={styles.press} onPress={() => handleSignUp()}>
              <Text style={styles.pressnest}>Crear Cuenta</Text>
            </Pressable>
            <Text style={{ marginTop: 20 }}>Ya tienes una cuenta?</Text>
            <Pressable
              style={styles.press}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.pressnest}>Iniciar Sesión</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
