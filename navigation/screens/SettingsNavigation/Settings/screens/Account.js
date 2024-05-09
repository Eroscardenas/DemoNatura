import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../../../../firebase-config";

const auth = getAuth(app);
const Account = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //setUserAuth(user.email);
        console.log(user);
      } else {
        // setUserAuth(null);
        console.log("Requiere autenticarse");
      }
    });
  }, []);

  return (
    <View>
      <Text>Account</Text>
    </View>
  );
};

export default Account;
