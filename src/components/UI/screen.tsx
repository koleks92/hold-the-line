import { Colors } from "@/constants/colors";
import { PropsWithChildren } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type ScreenProps = PropsWithChildren<{
  title?: string;
  padding?: boolean;
}>;

export default function Screen({ children, title, padding }: ScreenProps) {
  return (
    <SafeAreaView style={[styles.container, padding && styles.padding]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    alignItems: "center",
  },
  padding: {
    padding: "15%",
  },
});
