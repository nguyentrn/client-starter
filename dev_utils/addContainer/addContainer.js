/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const containerName = `${process.argv[2]
  .slice(0, 1)
  .toUpperCase()}${process.argv[2].slice(1)}Container`;

const dir = `${path.resolve(".")}\\containers\\${containerName}`;
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);

  // Add *.container.jsx file
  const containerStream = fs.createWriteStream(
    `${dir}\\${containerName}.container.jsx`
  );

  containerStream.write(`import Styled${containerName} from "./${containerName}.styles";

const ${containerName} = () => {
  return <Styled${containerName}>${containerName}</Styled${containerName}>;
};

export default ${containerName};
`);
  containerStream.end();

  // Add *.styles.js file
  const stylesStream = fs.createWriteStream(
    `${dir}\\${containerName}.styles.js`
  );

  stylesStream.write(`import styled from "styled-components";

export default styled.div\`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
\`;
`);
  stylesStream.end();

  // Add *.motion.jsx file
  const motionStream = fs.createWriteStream(
    `${dir}\\${containerName}.motion.jsx`
  );

  motionStream.write(`import { motion } from "framer-motion";

import ${containerName} from "./${containerName}.container";

const Motion${containerName} = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <${containerName} />
    </motion.div>
  );
};

export default Motion${containerName};
`);
  motionStream.end();

  // Add index.js file
  const indexStream = fs.createWriteStream(`${dir}\\index.js`);

  indexStream.write(`export { default } from "./${containerName}.motion";
`);
  indexStream.end();
  console.log(`\nDONE!      Đã tạo container ${containerName} !\n`);
} else {
  console.log(`\nERR!       container ${containerName} trùng tên !\n`);
}
