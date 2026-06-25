import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function CoffeeCard({
  item,
}) {
  const router = useNavigation()
  return (
    <TouchableOpacity style={styles.card} onPress={()=>{
      console.log('pressing is happening')
        router.navigate('detail')
    }}>
      <Image
        source={item.image}
        style={styles.image}
      />

      <Text style={styles.name}>
        {item.name}
      </Text>

      <Text style={styles.type}>
        {item.type}
      </Text>

      <View style={styles.bottom}>
        <Text style={styles.price}>
          ${item.price}
        </Text>

        <TouchableOpacity
          style={styles.addBtn}
        >
          <Text style={styles.plus}>
            +
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 16,
    padding: 10,
    marginBottom: 15,
  },

  image: {
    width: "100%",
    height: 120,
    borderRadius: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 10,
  },

  type: {
    color: "#888",
    marginTop: 3,
  },

  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
  },

  price: {
    fontWeight: "bold",
  },

  addBtn: {
    backgroundColor: "#C67C4E",
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  plus: {
    color: "#fff",
    fontSize: 18,
  },
});