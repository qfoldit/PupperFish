/**
 * @file smarttv_snowflake.js
 * @description SmartTV-oriented qFoldIT configuration example.
 */

import {
  DeviceProfile,
  InputProfile,
  WorldBlueprint,
  CloudRenderer,
  CloudSession
} from "../src/index.js";

const device = DeviceProfile.smartTV();
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
    camera: { mode: "third_person", target: "arctic_hub" },
    deviceProfile: device,
    inputProfile: input,
    frameState: { sessionId: sessionInfo.sessionId }
  })
);

console.log(sessionInfo);
console.log(frame);
await session.close();
