import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { ProductData } from "../../data/ProductData";
import PrimeLogo from "../../assets/prime-logo.png";
import {FontAwesome} from "@expo/vector-icons";

const ProductScreen = () => {
  const getRating = (rating ) => {
    const ratingStar = [];

    const fullStar = <FontAwesome name="star" size={12} color="#FF9D23" />;
    const halfStar = (
      <FontAwesome name="star-half-full" size={12} color="#FF9D23" />
    );

    const emptyStar = <FontAwesome name="star-o" size={12} color="#FF9D23" />;

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        ratingStar.push(fullStar);
      } else {
        ratingStar.push(emptyStar);
      }
    }

    if (rating % 1 !== 0) {
      ratingStar[Math.floor(rating)] = halfStar;
    }
    return ratingStar;
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Text style={styles.header}>Results</Text>
      <Text style={styles.text}>
        Price and other details may very based on products aside and color
      </Text>
      <View>
        {ProductData.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.imgcont}>
              <Image source={item.image} style={styles.img} />
            </View>
            <View style={styles.detail}>
              <Text style={styles.text}>Sponsored</Text>
              <Text style={styles.text}>{item.productName}</Text>

              <View style={styles.row}>
                <Text style={[styles.text, { color: "#6A9AB0" }]}>
                  {item.rating}
                </Text>
               <View style={styles.row}> {getRating(item.rating)}</View>
                <Text style={[styles.text, { color: "#6A9AB0" }]}>
                  {item.ratingCount}
                </Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.text, { fontSize: 16 }]}>
                  {item.price}
                </Text>
                <Text style={[styles.text, { fontSize: 14 }]}>
                  {item.crossOutText}
                </Text>
              </View>
              <Text style={[styles.text, { fontSize: 12 }]}>
                Up to 5% cashback with Amazon Pay Credit card
              </Text>
              <Image source={PrimeLogo} style={styles.logo} />
              <Text style={[styles.text, { fontSize: 12 }]}>
                FREE Delivery by Sunday, 18 May
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10 },
  header: {
    marginTop: 5,
    fontWeight: "700",
    fontSize: 20,
  },
  text: {
    color: "#4C585B",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 20,
  },
  img: {
    width: "100%",
    height: 150,
    paddingHorizontal: 5,
    paddingVertical: 10,
    resizeMode: "contain",
  },
  imgcont: {
    width: "40%",
    backgroundColor: "#F7CFD8",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  detail: {
    paddingVertical: 6,
    width: "60%",
    paddingLeft: 10,
    borderColor: "#F7CFD8",
    borderWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingHorizontal: 5,
  },
  card: { flexDirection: "row", marginTop: 20 },
  row: { flexDirection: "row", gap: 10,alignItems:"center" },
  logo: {
    width: 45,
    resizeMode: "contain",
    height: 20,
  },
});
