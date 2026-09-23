import { goBack } from "expo-router/build/global-state/router";
import { Pressable, Text, View } from "react-native";

export default function Levels() {
  return (
    <View>
      <Pressable onPress={() => goBack()}>
        <Text>Go back</Text>
      </Pressable>
    </View>
  );
}
