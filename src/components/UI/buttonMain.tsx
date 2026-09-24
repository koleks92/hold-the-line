import { Colors } from "@/constants/colors";
import { Sizes } from "@/constants/sizes";
import { rfs } from "@/util/responsiveFontSizing";
import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonMainProps = PropsWithChildren<{
  gold?: boolean;
  onPress: () => void;
}>;

export default function ButtonMain({
  children,
  gold,
  onPress,
}: ButtonMainProps) {
  return (
    <Pressable
      style={[styles.root, gold && styles.gold]}
      onPress={() => onPress()}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "45%",
    height: Sizes.scrW * 0.14,
    backgroundColor: Colors.card,
    borderColor: Colors.border,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Outfit500",
    fontWeight: 500,
    fontSize: rfs(13),
    color: Colors.font,
  },
  gold: {
    backgroundColor: Colors.primary,
    width: "100%",
  },
});
