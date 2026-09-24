import Screen from "@/components/UI/screen";
import { goBack } from "expo-router/build/global-state/router";
import { Pressable, Text } from "react-native";

export default function HowTo() {
  return (
    <Screen padding={true}>
      <Pressable onPress={() => goBack()}>
        <Text>Go back</Text>
      </Pressable>
    </Screen>
  );
}
