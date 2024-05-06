import { StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#C7F4C6",
    paddingBottom: 300,
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 25,
    padding: 30,
    margin: 20,
  },
  container2: {
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "#055A87",
    marginBottom: 30,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    fontSize: 15,
    color: "#000000",
    marginTop: 3,
    marginBottom: 1,
    textAlign: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#049200",
    borderRadius: 7,
    padding: 7,
    marginTop: 6,
  },
  button: {
    fontSize: 30,
    color: "#0E6F22",
    marginBottom: 0,
    textAlign: "center",
  },
  press: {
    backgroundColor: "#026F0A",
    opacity: 10,
    margin: 5,
    padding: 10,
    width: 200,
    borderRadius: 5,
    justifyContent: "center",
  },
  press2: {
    flex: 1,
    backgroundColor: "#4FB34F",
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  pressnest: {
    fontSize: 15,
    color: "#FFFFFF",
    textAlign: "center",
  },
  pressnest2: {
    fontSize: 15,
    color: "black",
    textAlign: "center",
    marginTop: 10,
  },
  pressplayer: {
    fontSize: 15,
    backgroundColor: "#E0F3E0",
    height: 30,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginTop: 20,
  },
  playercontainer: {
    margin: 5,
    backgroundColor: "#E0F3E0",
    borderRadius: 10,
    padding: 10,
    flex: 0.9,
  },
  player: {
    marginHorizontal: 5,
    marginBottom: 5,
    flex: 0.1,
    backgroundColor: "#E0F3E0",
    borderRadius: 10,
    justifyContent: "center",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  playlist: {
    fontSize: 15,
    textAlignVertical: "center",
    margin: 15,
    marginRight: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  graphtlt: {
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20,
  },
  presetbox: {
    backgroundColor: "green",
    margin: 10,
    width: 165,
    height: 200,
    borderRadius: 10,
  },
  prboxtext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  }
);

export default styles;
