import { moveEnemies } from "@/game/movement";
import { EnemyInstance } from "@/game/types";
import { useEffect, useState } from "react";
import { View } from "react-native";

const path = [
  { x: 0, y: 0 },
  { x: 3, y: 0 },
  { x: 2, y: 2 },
  { x: 1, y: 2 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 3, y: 6 },
];

export default function GameTest() {
  const [enemies, setEnemies] = useState<EnemyInstance[]>([
    {
      id: 1,
      type: "basic",
      currentHealth: 100,
      currentPosition: { x: 0, y: 0 },
      targetIndex: 1,
      status: "moving",
    },
    {
      id: 2,
      type: "basic",
      currentHealth: 100,
      currentPosition: { x: 1, y: 1 },
      targetIndex: 1,
      status: "moving",
    },
    {
      id: 3,
      type: "basic",
      currentHealth: 100,
      currentPosition: { x: 0, y: 0 },
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
              left: enemy.currentPosition.x * 100,
              top: enemy.currentPosition.y * 100,
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
