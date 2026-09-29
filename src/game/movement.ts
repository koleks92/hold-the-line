import { ENEMIES } from "@/data/enemies";
import { EnemyInstance } from "./types";

type MoveForwardProps = {
  current: { x: number; y: number };
  target: { x: number; y: number };
  speed: number;
  deltaMs: number;
};

// Move one step
export function moveForward({
  current,
  target,
  speed,
  deltaMs,
}: MoveForwardProps): { x: number; y: number } {
  const dx = target.x - current.x;
  const dy = target.y - current.y;

  const distance = Math.sqrt(dx * dx + dy * dy);

  const dirX = dx / distance;
  const dirY = dy / distance;

  const moveDistance = speed * (deltaMs / 1000);

  if (moveDistance >= distance) {
    return target; // arrived
  }

  return {
    x: current.x + dirX * moveDistance,
    y: current.y + dirY * moveDistance,
  };
}

// Move along the path
export function moveEnemyAlongPath(
  enemy: EnemyInstance,
  path: { x: number; y: number }[],
  deltaMs: number,
): EnemyInstance {
  // 1. if status is already "finished", return enemy unchanged
  if (enemy.status === "finished") {
    return enemy;
  }
  // 2. get target = path[enemy.targetIndex]
  const target = path[enemy.targetIndex];

  // 3. compute new position with moveForward
  const newPosition = moveForward({
    current: enemy.currentPosition,
    target: target,
    speed: ENEMIES[enemy.type].speed,
    deltaMs: deltaMs,
  });
  // 4. check if newPosition equals target (arrived)
  const arrived = newPosition.x == target.x && newPosition.y == target.y;
  // 5. if arrived AND targetIndex was the last index, return with status "finished"
  if (arrived && enemy.targetIndex === path.length - 1) {
    return {
      ...enemy,
      currentPosition: target,
      status: "finished",
    };
  }
  // 6. if arrived but not last, return with targetIndex + 1, position = target
  if (arrived && enemy.targetIndex !== path.length - 1) {
    return {
      ...enemy,
      targetIndex: enemy.targetIndex + 1,
      currentPosition: target,
    };
  }
  // 7. otherwise, just return updated position, same targetIndex
  return {
    ...enemy,
    currentPosition: newPosition,
  };
}

// Move multiple items
export function moveEnemies(
  enemies: EnemyInstance[],
  path: { x: number; y: number }[],
  deltaMs: number,
): EnemyInstance[] {
  return enemies.map((enemy) => moveEnemyAlongPath(enemy, path, deltaMs));
}
