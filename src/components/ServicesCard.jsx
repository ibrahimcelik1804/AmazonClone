import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ServicesCard = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.recent}>{item.title}</Text>
      <Image source={item.image} style={styles.img} />
    </View>
  );
};

export default ServicesCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 140,
    padding: 5,
    marginLeft: 8,
    borderRadius: 5,
  },
  recent: { fontSize: 13, marginBottom: 8, color: "#000000" },
  img: { width: "100%", height: 130 },
});
