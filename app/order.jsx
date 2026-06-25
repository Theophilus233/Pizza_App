import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

import { router } from "expo-router";

import {
  Feather,
  Ionicons,
} from "@expo/vector-icons";

export default function Order() {
  return (
    <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
        >
          <Feather
            name="chevron-left"
            size={24}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Order
        </Text>

        <View />
      </View>

      {/* Toggle */}

      <View style={styles.toggle}>
        <TouchableOpacity
          style={styles.activeToggle}
        >
          <Text style={styles.activeText}>
            Deliver
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.toggleBtn}
        >
          <Text>Pick Up</Text>
        </TouchableOpacity>
      </View>

      {/* Address */}

      <Text style={styles.sectionTitle}>
        Delivery Address
      </Text>

      <Text style={styles.addressName}>
        JI. Kpg Sutoyo
      </Text>

      <Text style={styles.addressText}>
        Kpg Sutoyo No.620
      </Text>

      <View style={styles.addressButtons}>
        <TouchableOpacity
          style={styles.smallButton}
        >
          <Feather
            name="edit-2"
            size={14}
          />

          <Text>Edit Address</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.smallButton}
        >
          <Feather
            name="file-text"
            size={14}
          />

          <Text>Add Note</Text>
        </TouchableOpacity>
      </View>

      {/* Coffee Card */}

      <View style={styles.productCard}>
        <Image
          source={require("../assets/images/coffee1.png")}
          style={styles.productImage}
        />

        <View style={{ flex: 1 }}>
          <Text style={styles.productName}>
            Caffe Mocha
          </Text>

          <Text style={styles.productType}>
            Deep Foam
          </Text>
        </View>

        <View style={styles.qtyRow}>
          <TouchableOpacity
            style={styles.qtyBtn}
          >
            <Text>-</Text>
          </TouchableOpacity>

          <Text>1</Text>

          <TouchableOpacity
            style={styles.qtyBtn}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.divider} />

      {/* Discount */}

      <TouchableOpacity
        style={styles.discountCard}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="pricetag-outline"
            size={18}
            color="#C67C4E"
          />

          <Text
            style={{
              marginLeft: 10,
            }}
          >
            1 Discount Is Applies
          </Text>
        </View>

        <Feather
          name="chevron-right"
          size={20}
        />
      </TouchableOpacity>

      {/* Payment */}

      <Text style={styles.sectionTitle}>
        Payment Summary
      </Text>

      <View style={styles.row}>
        <Text>Price</Text>
        <Text>$4.53</Text>
      </View>

      <View style={styles.row}>
        <Text>Delivery Fee</Text>

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Text
            style={{
              textDecorationLine:
                "line-through",
              color: "#999",
              marginRight: 5,
            }}
          >
            $2.0
          </Text>

          <Text>$1.0</Text>
        </View>
      </View>

      {/* Wallet */}

      <View style={styles.wallet}>
        <Text
          style={{
            fontWeight: "600",
          }}
        >
          Cash / Wallet
        </Text>

        <Text>$5.53</Text>
      </View>

      {/* Order */}

      <TouchableOpacity
        style={styles.orderButton}
        onPress={() =>
          router.push("/delivery")
        }
      >
        <Text style={styles.orderText}>
          Order
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    paddingTop:60,
    paddingHorizontal:20,
  },

  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
  },

  headerTitle:{
    fontSize:18,
    fontWeight:"600",
  },

  toggle:{
    flexDirection:"row",
    backgroundColor:"#f3f3f3",
    padding:5,
    borderRadius:16,
    marginTop:20,
  },

  activeToggle:{
    flex:1,
    backgroundColor:"#C67C4E",
    padding:12,
    borderRadius:12,
    alignItems:"center",
  },

  toggleBtn:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },

  activeText:{
    color:"#fff",
  },

  sectionTitle:{
    fontWeight:"600",
    marginTop:25,
  },

  addressName:{
    marginTop:10,
    fontWeight:"600",
  },

  addressText:{
    color:"#999",
    marginTop:5,
  },

  addressButtons:{
    flexDirection:"row",
    gap:10,
    marginTop:15,
  },

  smallButton:{
    flexDirection:"row",
    gap:5,
    borderWidth:1,
    borderColor:"#ddd",
    paddingHorizontal:10,
    paddingVertical:8,
    borderRadius:20,
  },

  productCard:{
    flexDirection:"row",
    alignItems:"center",
    marginTop:25,
  },

  productImage:{
    width:60,
    height:60,
    borderRadius:12,
    marginRight:15,
  },

  productName:{
    fontWeight:"600",
  },

  productType:{
    color:"#999",
  },

  qtyRow:{
    flexDirection:"row",
    alignItems:"center",
    gap:10,
  },

  qtyBtn:{
    width:28,
    height:28,
    borderWidth:1,
    borderColor:"#ddd",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:8,
  },

  divider:{
    height:1,
    backgroundColor:"#eee",
    marginVertical:20,
  },

  discountCard:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    borderWidth:1,
    borderColor:"#eee",
    padding:15,
    borderRadius:16,
  },

  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:15,
  },

  wallet:{
    marginTop:20,
    backgroundColor:"#f5f5f5",
    padding:15,
    borderRadius:16,
    flexDirection:"row",
    justifyContent:"space-between",
  },

  orderButton:{
    marginTop:"auto",
    marginBottom:30,
    backgroundColor:"#C67C4E",
    padding:18,
    borderRadius:18,
    alignItems:"center",
  },

  orderText:{
    color:"#fff",
    fontWeight:"600",
  },
});