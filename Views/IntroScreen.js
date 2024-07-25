import React from "react";
import { View, Image } from "react-native";
import logo from "../assets/calclogo.png";
import { StyleSheet } from "react-native";

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Image source={logo} style={styles.innerImg} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "#FF5757",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    width: 100,
    height: 100,
    backgroundColor: "inherit",
  },
  innerImg: {
    width: 100,
    height: 100,
  },
});

export default IntroScreen;
