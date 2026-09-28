import { Colors } from "@/constants/colors";
import { rfs } from "@/util/responsiveFontSizing";
import { StyleSheet, Text, View } from "react-native";
import GoBack from "./goBack";

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  return (
    <View style={styles.root}>
      <GoBack />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontFamily: "Outfit600",
    color: Colors.font,
    fontSize: rfs(17),
    paddingLeft: rfs(8),
  },
});
