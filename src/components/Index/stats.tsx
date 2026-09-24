import { Colors } from "@/constants/colors";
import { Sizes } from "@/constants/sizes";
import { rfs } from "@/util/responsiveFontSizing";
import { StyleSheet, Text, View } from "react-native";

type StatsProps = {
  best?: number;
  stars?: number;
  streak?: number;
};

export default function Stats({ best = 1, stars = 3, streak = 5 }: StatsProps) {
  return (
    <View style={styles.root}>
      <View style={[styles.card, styles.cardLeft]}>
        <Text style={styles.value}>{best}</Text>
        <Text style={styles.title}>BEST</Text>
      </View>
      <View style={[styles.card, styles.cardMiddle]}>
        <Text style={styles.value}>{stars}/18</Text>
        <Text style={styles.title}>STARS</Text>
      </View>
      <View style={[styles.card, styles.cardRight]}>
        <Text style={styles.value}>{streak}</Text>
        <Text style={styles.title}>STREAK</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    margin: Sizes.scrW * 0.1,
    height: Sizes.scrW * 0.16,
    width: "100%",
    flexDirection: "row",
  },
  card: {
    flex: 1,
    backgroundColor: Colors.card,
    borderColor: Colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
  cardLeft: {
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardRight: {
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardMiddle: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  value: {
    fontFamily: "Outfit700",
    fontSize: rfs(16),
    color: Colors.primary,
  },
  title: {
    fontFamily: "Outfit400",
    fontSize: rfs(13),
    color: Colors.fontMuted,
  },
});
