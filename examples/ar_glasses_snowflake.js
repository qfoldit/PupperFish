/**
 * @file ar_glasses_snowflake.js
 * @description AR smart-glasses-oriented qFoldIT configuration example.
 */

import {
  DeviceProfile,
  InputProfile,
  WorldBlueprint,
  CloudRenderer,
  CloudSession
} from "../src/index.js";

const device = DeviceProfile.arGlasses();
const input = InputProfile.fromDeviceProfile(device);
const world = WorldBlueprint.snowflake();

const session = new CloudSession({ dryRun: true });
const renderer = new CloudRenderer({ dryRun: true });

const sessionInfo = await session.create({
  deviceProfile: device.toJSON(),
  world: world.toJSON()
});

const frame = await renderer.renderFrame(
  renderer.buildFrameRequest({
    world: world.toJSON(),
    camera: {
      mode: "spatial_overlay",
      target: "science_ring",
      hudDensity: device.limits.maxHudDensity
    },
    deviceProfile: device,
    inputProfile: input,
    frameState: {
      sessionId: sessionInfo.sessionId,
      comfortMode: true
    }
  })
);

console.log(sessionInfo);
console.log(frame);
await session.close();
