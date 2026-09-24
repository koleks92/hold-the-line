import { Colors } from "@/constants/colors";
import { rfs } from "@/util/responsiveFontSizing";
import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

export default function AccentText({ children }: PropsWithChildren) {
  return <Text style={styles.root}>{children}</Text>;
}

const styles = StyleSheet.create({
  root: {
    fontFamily: "Outfit500",
    color: Colors.fontMuted,
    fontSize: rfs(12),
    letterSpacing: 3,
  },
});
