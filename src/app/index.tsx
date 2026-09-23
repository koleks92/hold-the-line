import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.navigate("/howto")}>
        <Text>How To Play</Text>
      </Pressable>
      <Pressable onPress={() => router.navigate("/settings")}>
        <Text>Settings</Text>
      </Pressable>

      <Pressable onPress={() => router.navigate("/levels")}>
        <Text>Play</Text>
      </Pressable>

      <Text>Edit src/app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
