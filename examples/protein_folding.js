/**
 * @file protein_folding.js
 * @description Demonstration of the simulated annealing folding loop.
 */

import { AminoAcidChain, EnergyGrid, FolderAgent, DeviceProfile } from "../src/index.js";

const device = DeviceProfile.desktop();
const chain = AminoAcidChain.fromSequence(["A", "L", "G", "S", "V", "T", "L"]);
const energyGrid = new EnergyGrid({ epsilon: 0.8, sigma: 1.2 });
const folder = new FolderAgent({
  chain,
  energyGrid,
  temperature: 8,
  coolingRate: 0.9,
  stepSize: 0.75
});

for (let i = 0; i < 25; i += 1) {
  console.log(folder.step({ stepIndex: i, deviceProfile: device }));
}

console.log("Best energy:", folder.bestEnergy);
console.log(folder.bestChain.toPoints());
