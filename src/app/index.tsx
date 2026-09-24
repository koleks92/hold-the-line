import Stats from "@/components/Index/stats";
import Title from "@/components/Index/title";
import TowerLogo from "@/components/Index/tower";
import AccentText from "@/components/UI/accentText";
import ButtonMain from "@/components/UI/buttonMain";
import Screen from "@/components/UI/screen";
import { useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const router = useRouter();

  return (
    <Screen padding={true}>
      {/* HERO */}
      <View style={[styles.root, styles.hero]}>
        <TowerLogo />
        <Title>Hold</Title>
        <Title>The</Title>
        <Title gold={true}>Line</Title>
        <AccentText>TOWER DEFENCE</AccentText>
      </View>
      {/* STATS */}
      <View style={[styles.root, styles.stats]}>
        <Stats />
      </View>
      {/* BUTTONS */}
      <View style={[styles.root, styles.buttons]}>
        <ButtonMain gold={true} onPress={() => router.navigate("/levels")}>
          Play
        </ButtonMain>
        <View style={styles.buttonsRow}>
          <ButtonMain onPress={() => router.navigate("/settings")}>
            Settings
          </ButtonMain>
          <ButtonMain onPress={() => router.navigate("/howto")}>
            How To Play
          </ButtonMain>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
  hero: {
    height: "50%",
  },
  stats: {
    height: "20%",
  },
  buttons: {
    height: "25%",
    justifyContent: "flex-start",
  },
  buttonsRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
});
