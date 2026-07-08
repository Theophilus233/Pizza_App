import { View, Text, Image, StyleSheet } from "react-native";

export default function PromoBanner() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.promoTag}>
          <Text style={styles.promoText}>Promo</Text>
        </View>

        <Text style={styles.title}>
          Buy one get{"\n"}one FREE
        </Text>
      </View>

      <Image
        source={require("../assets/images/Pizza.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7A4B2A",
    borderRadius: 18,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  left: {
    flex: 1,
  },

  promoTag: {
    backgroundColor: "#ED5151",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 5,
  },

  promoText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },

  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 12,
  },
});