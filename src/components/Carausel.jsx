import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";
import { CarouselData } from "../data/CarauselData";

const Carausel = () => {
  return (
    <View style={styles.container}>
      <Swiper showsPagination={false} showsButtons={false} autoplay={true} style={styles.wrapper}>
        {CarouselData.map((item) => (
          
            <Image source={item.image} style={styles.img} />
          
        ))}
      </Swiper>
    </View>
  );
};

export default Carausel;

const styles = StyleSheet.create({
  container: { position: "" },
  wrapper: { height: 300 },
  img: { width: "100%", height: 250 },
});
