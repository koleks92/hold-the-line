import { ENEMIES, EnemyType } from "@/data/enemies";
import { Level, Point, SpawnGroup } from "@/data/levelData";
import { EnemyInstance, GameState } from "./types";

export function getSpawnCountDue(group: SpawnGroup, elapsed: number): number {
  const delay = group.delay ?? 0;
  if (elapsed < delay) {
    return 0;
  } else {
    return Math.min(
      group.count,
      Math.floor((elapsed - delay) / group.interval) + 1,
    );
  }
}

export function spawnEnemy(
  type: EnemyType,
  id: number,
  path: Point[],
): EnemyInstance {
  return {
    id,
    type,
    currentHealth: ENEMIES[type].health,
    currentPosition: path[0],
    targetIndex: 1,
    status: "moving",
  };
}

export function spawnDueEnemies(state: GameState, level: Level): GameState {
  let nextId = state.nextEnemyId;
  const newEnemies: EnemyInstance[] = [];
  const newCounts = [...state.spawnedCounts];

  const flattenWaves = level.waves.flat();
  // Go through each wave
  flattenWaves.forEach((group, i) => {
    // Get span count due
    const due = getSpawnCountDue(group, state.elapsed);
    const newCount = due - state.spawnedCounts[i];
    // Create new enemy
    for (let k = 0; k < newCount; k++) {
      const newEnemy = spawnEnemy(group.enemy, nextId, level.path);
      newEnemies.push(newEnemy);
      nextId++;
    }
    newCounts[i] = due;
  });
  return {
    ...state,
    enemies: [...state.enemies, ...newEnemies],
    spawnedCounts: newCounts,
    nextEnemyId: nextId,
  };
}
