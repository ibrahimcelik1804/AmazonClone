import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Recommend from "../assets/recommend.jpg";

const Deals = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended deal for you </Text>
      <Image style={styles.imgStyle} source={Recommend} />
      <View style={styles.bottomSection}>
        <View style={styles.row}>
          <TouchableOpacity style={styles.offDealBtn}>
            <Text style={styles.offDeal}>%18 off</Text>
          </TouchableOpacity>

          <Text style={styles.deal}>Deals</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.discountPrice}>1,599999 ₺</Text>
          <Text style={styles.actualPrice}>1,900₺</Text>
        </View>

        <Text style={styles.productName}>
          {" "}
          Nykaa Face Wash Gentle cleanser, moisturizing, refreshing, soothing,
          hydrating.
        </Text>
        <TouchableOpacity>
          <Text style={styles.allDeals}>See all deals</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Deals;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000000",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  imgStyle: {
    height: 250,
    width: "100%",
  },
  row: { flexDirection: "row", alignItems: "center" },
  offDealBtn: {
    backgroundColor: "#be0201",
    width: 60,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  offDeal: { fontSize: 12, color: "#fff" },
  deal: {
    color: "#be0201",
    fontSize: 12,
    marginLeft: 6,
    fontWeight: "600",
  },
  bottomSection: { paddingHorizontal: 10 },
  discountPrice: { color: "#00000", fontSize: 16, marginVertical: 5 },
  actualPrice: {
    fontSize: 10,
    marginLeft: 7,
    textDecorationLine: "line-through",
  },
  productName: {
    fontSize: 15,
    color: "#0000000",
  },
  allDeals: {
    fontSize: 14,
    color: "#017185",
    marginVertical: 10,
  },
});
