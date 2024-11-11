import { Image, StyleSheet, Text, View } from "react-native";
import Colors from "@/src/constants/Colors";

const ProductListItem = ({ product }) => {
  console.log(product);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: product.image }} />

      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  price: {
    color: Colors.light.tint,
  },
});
