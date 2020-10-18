const fs = require('fs');

module.exports = (dir, name, fileType) => {
  const indexStream = fs.createWriteStream(`${dir}\\index.js`);

  indexStream.write(`export { default } from "./${name}.${fileType}";
    `);
  indexStream.end();
};
