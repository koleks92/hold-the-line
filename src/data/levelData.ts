import { EnemyType } from "./enemies";
import { TowerType } from "./towers";

// Types
type SpawnGroup = {
  enemy: EnemyType;
  count: number;
  interval: number;
  delay?: number;
};

type Wave = SpawnGroup[];

type Path = { x: number; y: number };

type Level = {
  id: number;
  name: string;
  path: Path[];
  waves: Wave[];
  startMoney: number;
  lives: number;
  allowedTowers: TowerType[];
};

export const LEVELS = [
  {
    id: 1,
    name: "Before everything",
    path: [
      { x: 1, y: 0 },
      { x: 1, y: 2 },
      { x: 3, y: 2 },
      { x: 3, y: 5 },
      { x: 1, y: 5 },
      { x: 1, y: 8 },
      { x: 6, y: 8 },
      { x: 6, y: 9 },
      { x: 4, y: 9 },
      { x: 4, y: 11 },
    ],
    waves: [
      [{ enemy: "basic", count: 10, interval: 100, delay: 20000 }],
      [
        {
          enemy: "basic",
          count: 15,
          interval: 1000,
          delay: 20000,
        },
      ],
    ],
    startMoney: 100,
    lives: 3,
    allowedTowers: ["basic", "slow", "sniper"],
  },
] as const satisfies readonly Level[];
