import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { router } from "expo-router";

import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function Detail() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Feather name="chevron-left" size={24} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Detail
        </Text>

        <Ionicons
          name="heart-outline"
          size={24}
        />
      </View>

      {/* Coffee Image */}

      <Image
        source={require("../assets/images/coffee1.png")}
        style={styles.image}
      />

      {/* Product */}

      <Text style={styles.name}>
        Caffe Mocha
      </Text>

      <Text style={styles.type}>
        Ice/Hot
      </Text>

      <View style={styles.ratingRow}>
        <Ionicons
          name="star"
          size={18}
          color="#FBBE21"
        />

        <Text style={styles.rating}>
          4.8
        </Text>

        <Text style={styles.ratingCount}>
          (230)
        </Text>
      </View>

      {/* Feature Icons */}

      <View style={styles.featureRow}>
        <View style={styles.featureBox}>
          <Feather
            name="truck"
            size={22}
            color="#C67C4E"
          />
        </View>

        <View style={styles.featureBox}>
          <MaterialCommunityIcons
            name="coffee"
            size={22}
            color="#C67C4E"
          />
        </View>

        <View style={styles.featureBox}>
          <MaterialCommunityIcons
            name="cup-water"
            size={22}
            color="#C67C4E"
          />
        </View>
      </View>

      <View style={styles.divider} />

      {/* Description */}

      <Text style={styles.sectionTitle}>
        Description
      </Text>

      <Text style={styles.description}>
        A cappuccino is an approximately
        150 ml beverage with espresso
        coffee and fresh milk foam.
      </Text>

      <Text style={styles.readMore}>
        Read More
      </Text>

      {/* Size */}

      <Text style={styles.sectionTitle}>
        Size
      </Text>

      <View style={styles.sizeRow}>
        <TouchableOpacity
          style={styles.sizeButton}
        >
          <Text>S</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.sizeButton,
            styles.activeSize,
          ]}
        >
          <Text
            style={{
              color: "#C67C4E",
            }}
          >
            M
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sizeButton}
        >
          <Text>L</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom */}

      <View style={styles.bottom}>
        <View>
          <Text style={styles.priceLabel}>
            Price
          </Text>

          <Text style={styles.price}>
            $4.53
          </Text>
        </View>

        <TouchableOpacity
          style={styles.buyBtn}
          onPress={() =>
            router.push("/order")
          }
        >
          <Text style={styles.buyText}>
            Buy Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 20,
    marginTop: 20,
  },

  name: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 20,
  },

  type: {
    color: "#999",
    marginTop: 5,
  },

  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  rating: {
    marginLeft: 5,
    fontWeight: "700",
  },

  ratingCount: {
    color: "#999",
    marginLeft: 5,
  },

  featureRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },

  featureBox: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: "#FFF5EF",
    justifyContent: "center",
    alignItems: "center",
  },

  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 20,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
  },

  description: {
    color: "#777",
    lineHeight: 22,
    marginTop: 10,
  },

  readMore: {
    color: "#C67C4E",
    fontWeight: "600",
    marginTop: 5,
  },

  sizeRow: {
    flexDirection: "row",
    justifyContent:
      "space-between",
    marginTop: 15,
  },

  sizeButton: {
    width: 90,
    height: 45,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },

  activeSize: {
    borderColor: "#C67C4E",
    backgroundColor: "#FFF5EF",
  },

  bottom: {
    marginTop: "auto",
    marginBottom: 30,
    flexDirection: "row",
    justifyContent:
      "space-between",
    alignItems: "center",
  },

  priceLabel: {
    color: "#999",
  },

  price: {
    color: "#C67C4E",
    fontSize: 22,
    fontWeight: "700",
  },

  buyBtn: {
    backgroundColor: "#C67C4E",
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 16,
  },

  buyText: {
    color: "#fff",
    fontWeight: "600",
  },
});