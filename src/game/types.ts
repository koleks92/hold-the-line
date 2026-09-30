import { EnemyType } from "@/data/enemies";
import { TowerType } from "@/data/towers";

export type EnemyInstance = {
  id: number;
  type: EnemyType;
  currentHealth: number;
  currentPosition: { x: number; y: number };
  targetIndex: number;
  status: "moving" | "finished" | "killed";
};

type TowerInstance = {
  id: number;
  type: TowerType;
  position: { x: number; y: number };
  target: number | null;
  nextShotAt: number;
};

type GameState = {
  enemies: EnemyInstance[];
  towers: TowerInstance[];
  money: number;
  lives: number;
  elapsed: number;
  waveIndex: number;
  groupIndex: number;
  spawnedCount: number;
};
