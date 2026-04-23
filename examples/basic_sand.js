/**
 * @file basic_sand.js
 * @description Minimal pufferfish sand-building example.
 */

import { SandGrid, PufferfishAgent, DeviceProfile } from "../src/index.js";

const device = DeviceProfile.smartTV();
const grid = new SandGrid({ size: 21, center: { x: 10, y: 10 } });
const agent = new PufferfishAgent({
  x: 10,
  y: 10,
  fins: 6,
  intensity: 1,
  pattern: "radial_nest"
});

for (let i = 0; i < 8; i += 1) {
  console.log(agent.step({ grid, deviceProfile: device }));
}

console.log(grid.toMatrix());
