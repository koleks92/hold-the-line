import { StyleSheet, Text, View } from "react-native";

type ChapterProps = {
  title: string;
  number: number;
  stars: number;
  starsTotal: number;
};

export default function Chapter({
  title,
  number,
  stars,
  starsTotal,
}: ChapterProps) {
  <View style={styles.root}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.chapterNumber}>Chapter {number}</Text>
    <Text style={styles.stars}>
      {stars}/{starsTotal} ★
    </Text>
  </View>;
}

const styles = StyleSheet.create({
  root: {},
  title: {},
  chapterNumber: {},
  stars: {},
});
