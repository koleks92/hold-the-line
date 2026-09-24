import { Colors } from "@/constants/colors";
import { rfs } from "@/util/responsiveFontSizing";
import { PropsWithChildren } from "react";
import { StyleSheet, Text } from "react-native";

type TitleProps = PropsWithChildren<{
  gold?: boolean;
}>;

export default function Title({ children, gold }: TitleProps) {
  return <Text style={[styles.root, gold && styles.gold]}>{children}</Text>;
}

const styles = StyleSheet.create({
  root: {
    fontFamily: "DMSerifDisplay",
    fontSize: rfs(50),
    lineHeight: rfs(50),
    color: Colors.font,
  },
  gold: {
    color: Colors.primary,
  },
});
