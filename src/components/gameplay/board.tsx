import { Sizes } from "@/constants/sizes";
import { expandPath } from "@/data/expandPath";
import { Point } from "@/data/levelData";
import { StyleSheet, View } from "react-native";
import { gameConstants } from "@/constants/game";

type BoardProps = {
  path: Point[];
};

export default function Board({ path }: BoardProps) {
  // Create a path set
  const pathSet = new Set(expandPath(path).map((p) => `${p.x},${p.y}`));

  return (
    <View style={styles.root}>
      {Array.from({ length: gameConstants.rows }).map((_, y) => {
        return (
          <View key={y} style={styles.row}>
            {Array.from({ length: gameConstants.columns }).map((_, x) => {
              return (
                <View
                  key={x}
                  style={[styles.cell,pathSet.has(`${x},${y}`) && styles.path ]}
                />
              );
            })}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: gameConstants.columns * gameConstants.cellSize,
    height: gameConstants.rows * gameConstants.cellSize,
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flexDirection: "column",
    height: gameConstants.cellSize,
    width: gameConstants.cellSize,
    backgroundColor: "#222222",
  },
  path: {
    backgroundColor: "#333333",
  },
});
