import { gameConstants } from "@/constants/game";
import { expandPath } from "@/data/expandPath";
import { LEVELS } from "@/data/levelData";
import { EnemyInstance } from "@/game/types";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { moveEnemies } from "../../game/movement";

const path = expandPath(LEVELS[0].path);

export default function GameTest() {
  const [enemies, setEnemies] = useState<EnemyInstance[]>([
    {
      id: 1,
      type: "basic",
      currentHealth: 100,
      currentPosition: path[0],
      targetIndex: 1,
      status: "moving",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEnemies((prev) => moveEnemies(prev, path, 50));
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {enemies.map((enemy) => {
        return (
          <View
            key={enemy.id}
            style={{
              position: "absolute",
              left: enemy.currentPosition.x * gameConstants.cellSize,
              top: enemy.currentPosition.y * gameConstants.cellSize,
              width: 20,
              height: 20,
              backgroundColor: "red",
              borderRadius: 10,
            }}
          />
        );
      })}
    </>
  );
}
