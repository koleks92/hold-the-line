import { EnemyType } from "./enemies";
import { TowerType } from "./towers";

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
      { x: 0, y: 0 },
      { x: 2, y: 2 },
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
