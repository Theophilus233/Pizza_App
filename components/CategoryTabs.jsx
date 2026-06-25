import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";

export default function CategoryButton({
  title,
  active,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        active && styles.active,
      ]}
    >
      <Text
        style={[
          styles.text,
          active && styles.activeText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginRight: 10,
  },

  active: {
    backgroundColor: "#C67C4E",
  },

  text: {
    color: "#333",
    fontWeight: "500",
  },

  activeText: {
    color: "#fff",
  },
});