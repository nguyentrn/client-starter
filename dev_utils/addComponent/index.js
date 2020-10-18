/* eslint-disable no-console */
const { execSync } = require('child_process');

const type = process.argv[2];
const domain = process.argv[3];
const name = process.argv[4];

if (name) {
  execSync(`node dev_utils/addComponent/addComponent.js ${type} ${domain} ${name}`, {
    stdio: [0, 1, 2],
  });
} else {
  console.log('\nERR!     Vui lòng nhập tên Component !\n');
}
