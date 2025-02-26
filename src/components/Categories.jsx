import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Category } from "../data/Categories";
import { useNavigation } from "@react-navigation/native";
import { SCREENS } from "../utils/router";

const Categories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {Category.map((item) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Products")}
          style={styles.category}
          key={item.id} // index yerine benzersiz bir ID
        >
          <Image source={item.image} style={styles.img} />
          <Text style={styles.text}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 50,
  },
  container: {
    padding: 10,
    backgroundColor: "transparent", // Boş string yerine şeffaf renk
  },
  category: {
    paddingHorizontal: 8,
    alignItems: "center",
  },
  text: {
    color: "#2c4341",
  },
});
