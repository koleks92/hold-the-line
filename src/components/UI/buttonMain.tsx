import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

type ButtonMainProps = PropsWithChildren<{
  onPress: () => void;
}>;

export default function ButtonMain({ children, onPress }: ButtonMainProps) {
  return (
    <Pressable style={styles.root} onPress={() => onPress()}>
      <Text>{children}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: 50,
  },
});
