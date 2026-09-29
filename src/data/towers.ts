export type TowerType = "basic" | "sniper" | "slow";

type Tower = {
  name: string;
  damage: number;
  range: number;
  speed: number;
  cost: number;
  towerType: TowerType;
};

const TOWERS = {
  basic: {
    name: "Basic Tower",
    damage: 10,
    range: 10,
    speed: 10,
    cost: 20,
    towerType: "basic",
  },
  sniper: {
    name: "Sniper Tower",
    damage: 40,
    range: 50,
    speed: 4,
    cost: 30,
    towerType: "sniper",
  },
  slow: {
    name: "Slow Tower",
    damage: 50,
    range: 15,
    speed: 2,
    cost: 25,
    towerType: "slow",
  },
} as const satisfies Record<TowerType, Tower>;
