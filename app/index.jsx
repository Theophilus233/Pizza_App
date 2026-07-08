import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
} from "react-native";

import { router } from "expo-router";

import CustomButton from "../components/CustomButton";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/Pizza1.png")}
      style={styles.container}
    >
      <StatusBar/>
      <View style={styles.overlay}>
        <Text style={styles.title}>
          Fall In Love With{"\n"}
          Freshly Baked{"\n"}
          Pizza!
        </Text>

        <Text style={styles.desc}>
        Hot, cheesy, and made with the freshest ingredients.
        very slice is baked to perfection just for you.
        </Text>

        <CustomButton
          title="Get Started"
          onPress={() =>
            router.push("login")
          }
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "flex-end",
    padding: 25,
    paddingBottom: 50,
  },

  title: {
    color: "#fff",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
  },

  desc: {
    color: "#ccc",
    textAlign: "center",
    marginVertical: 20,
  },
});