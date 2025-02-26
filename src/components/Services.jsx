import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import AmazonPay from "../assets/amazon-pay.png";
import SendMoney from "../assets/send-money.jpg";
import ScanQR from "../assets/scan-qr.jpeg";
import PayBills from "../assets/pay-bills.jpeg";
import { RecentSearchData } from "../data/RecentSearchData";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      <View style={[{}, styles.serviceContainer]}>
        <View style={[{ flexDirection: "row" }, styles.row]}>
          <View style={[{  }, styles.innerContainer]}>
            <Image source={AmazonPay} style={styles.img} />
            <Text stye={styles.title}>Amazon Pay</Text>
          </View>
          <View style={[{  }, styles.innerContainer]}>
            <Image source={SendMoney} style={styles.img} />
            <Text stye={styles.title}>Send Money</Text>
          </View>
          <View></View>
        </View>

        <View style={[{}, styles.row]}>
          <View style={[{ }, styles.innerContainer]}>
            <Image source={ScanQR} style={styles.img} />
            <Text stye={styles.title}>Scan QR</Text>
          </View>
          <View style={[{ }, styles.innerContainer]}>
            <Image source={PayBills} style={styles.img} />
            <Text stye={styles.title}>Pay Bills</Text>
          </View>
        </View>
      </View>
      {RecentSearchData.map((item, index) => (
        <ServicesCard item={item} key={index} />
      ))}
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: { marginTop: -80, paddingHorizontal: 10 },
  serviceContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: { padding: 10, alignItems: "center", paddingTop: 15 },
  img: { width: 50, height: 50, borderRadius: 50 },
  title: { fontSize: 10, color: "#000000", marginTop: 2 },
});
