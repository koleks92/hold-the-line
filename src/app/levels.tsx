import ButtonMain from "@/components/UI/buttonMain";
import Screen from "@/components/UI/screen";
import { goBack } from "expo-router/build/global-state/router";

export default function Levels() {
  return (
    <Screen padding={true}>
      <ButtonMain onPress={goBack}>Text</ButtonMain>
    </Screen>
  );
}
