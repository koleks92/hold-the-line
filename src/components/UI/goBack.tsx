import { Colors } from "@/constants/colors";
import { Sizes } from "@/constants/sizes";
import { rfs } from "@/util/responsiveFontSizing";
import { router } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function GoBack() {
  return (
    <Pressable
      style={styles.root}
      onPress={() => router.back()}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel="Go back"
    >
      <Svg width={rfs(16)} height={rfs(16)} viewBox="0 0 16 16" fill="none">
        <Path
          d="M10 3L5 8l5 5"
          stroke={Colors.fontMuted}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: {
    height: Sizes.scrW * 0.1,
    width: Sizes.scrW * 0.1,
    borderRadius: "50%",
    borderWidth: 1,
    borderColor: Colors.border,
    justifyContent: "center",
    alignItems: "center",
  },
});
