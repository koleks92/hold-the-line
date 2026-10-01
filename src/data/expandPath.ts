import { Point } from "./levelData";

export function expandPath(path: Point[]): Point[] {
  const expandedPath: Point[] = [];
  for (let i = 0; i < path.length - 1; i++) {
    const start = path[i];
    const end = path[i + 1];

    const dx = end.x - start.x;
    const dy = end.y - start.y;

    if (dx !== 0) {
      const step = dx > 0 ? 1 : -1;
      for (let x = start.x; x !== end.x; x += step) {
        expandedPath.push({ x, y: start.y });
      }
    } else if (dy !== 0) {
      const step = dy > 0 ? 1 : -1;
      for (let y = start.y; y !== end.y; y += step) {
        expandedPath.push({ x: start.x, y });
      }
    }
  }
  expandedPath.push(path[path.length - 1]); // Add the last point
  return expandedPath;
}
