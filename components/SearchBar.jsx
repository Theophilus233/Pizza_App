import {
    View,
    TextInput,
    StyleSheet,
  } from "react-native";
  
  import { Feather } from "@expo/vector-icons";
  
  export default function SearchBar() {
    return (
      <View style={styles.container}>
        <Feather
          name="search"
          size={20}
          color="#999"
        />
  
        <TextInput
          placeholder="Search coffee"
          placeholderTextColor="#999"
          style={styles.input}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#2A2A2A",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 15,
      height: 55,
      borderRadius: 16,
    },
  
    input: {
      color: "#fff",
      marginLeft: 10,
      flex: 1,
    },
  });