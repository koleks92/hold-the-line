import { Colors } from "@/constants/colors";
import { StyleSheet, View } from "react-native";

export default function AccentBar() {
  return <View style={styles.root} />;
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: Colors.border,
    height: 2,
    width: "100%",
  },
});
