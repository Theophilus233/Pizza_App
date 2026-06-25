import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";

export default function Delivery() {
  return (
    <View style={styles.container}>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline
          coordinates={[
            {
              latitude: 37.78825,
              longitude: -122.4324,
            },
            {
              latitude: 37.78925,
              longitude: -122.4314,
            },
            {
              latitude: 37.79025,
              longitude: -122.4304,
            },
          ]}
          strokeWidth={4}
          strokeColor="#C67C4E"
        />

        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
        />

        <Marker
          coordinate={{
            latitude: 37.79025,
            longitude: -122.4304,
          }}
        />
      </MapView>

      {/* TOP BAR */}

      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={() => router.back()}
        >
          <Feather
            name="chevron-left"
            size={24}
          />
        </TouchableOpacity>
      </View>

      {/* BOTTOM CARD */}

      <View style={styles.bottomSheet}>

        <Text style={styles.time}>
          10 Minutes Left
        </Text>

        <Text style={styles.deliveryText}>
          Delivery to JI. Kpg Sutoyo
        </Text>

        {/* Progress */}

        <View style={styles.progressContainer}>
          <View style={styles.progressFill} />
        </View>

        <View style={styles.statusCard}>
          <Text style={styles.statusTitle}>
            Delivered your order
          </Text>

          <Text style={styles.statusText}>
            We will deliver your goods to
            you in the shortest possible time.
          </Text>
        </View>

        {/* Courier */}

        <View style={styles.courierRow}>

          <Image
            source={require("../assets/images/coffee3.png")}
            style={styles.avatar}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.courierName}>
              Brooklyn Simmons
            </Text>

            <Text style={styles.courierRole}>
              Personal Courier
            </Text>
          </View>

          <TouchableOpacity
            style={styles.callBtn}
          >
            <Feather
              name="phone"
              size={20}
            />
          </TouchableOpacity>

        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    flex: 1,
  },

  topBar: {
    position: "absolute",
    top: 60,
    left: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 12,
  },

  bottomSheet: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 25,
  },

  time: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "700",
  },

  deliveryText: {
    textAlign: "center",
    color: "#777",
    marginTop: 5,
  },

  progressContainer: {
    height: 6,
    backgroundColor: "#eee",
    borderRadius: 20,
    marginTop: 20,
  },

  progressFill: {
    width: "70%",
    height: "100%",
    backgroundColor: "#36C07E",
    borderRadius: 20,
  },

  statusCard: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#eee",
    padding: 15,
    borderRadius: 16,
  },

  statusTitle: {
    fontWeight: "600",
  },

  statusText: {
    color: "#777",
    marginTop: 5,
  },

  courierRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    marginRight: 15,
  },

  courierName: {
    fontWeight: "600",
    fontSize: 16,
  },

  courierRole: {
    color: "#777",
    marginTop: 3,
  },

  callBtn: {
    width: 45,
    height: 45,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
});