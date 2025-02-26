import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const SubHeader = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#88dae0", "#bdeee9", "#c3f1e1"]}
    >
      <Feather name="map-pin" size={16} color="black" />
      <Text style={styles.delivery}>Delevery to Turkey -- 465698</Text>
      <MaterialIcons name="keyboard-arrow-down" size={24} color="#2c4341" />
    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: { padding: 13, flexDirection: "row", alignItems: "center" },
  delivery: {
    fontSize: 13,
    fontWeight: "700",
    color: "#2c4341",
    paddingHorizontal: 6,
  },
});
