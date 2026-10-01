export type EnemyType = "basic" | "fast" | "slow";

type Enemy = {
  name: string;
  speed: number;
  health: number;
  enemyType: EnemyType;
};

export const ENEMIES = {
  basic: { name: "Basic Enemy", speed: 1, health: 100, enemyType: "basic" },
  fast: { name: "Fast Enemy", speed: 2, health: 50, enemyType: "fast" },
  slow: { name: "Slow Enemy", speed: 0.5, health: 300, enemyType: "slow" },
} as const satisfies Record<EnemyType, Enemy>;
