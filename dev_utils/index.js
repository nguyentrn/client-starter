/* eslint-disable no-console */
const { execSync } = require("child_process");

const arg = process.argv[2]; // Default value `dv` if no args provided via CLI.

if (arg) {
  execSync(`node dev_utils/addComponent ${arg}`, { stdio: [0, 1, 2] });
} else {
  console.log("Fill component name !");
}
