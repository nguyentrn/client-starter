/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const componentName = `${process.argv[2]
  .slice(0, 1)
  .toUpperCase()}${process.argv[2].slice(1)}`;

const dir = `${path.resolve(".")}\\components\\${componentName}`;
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);

  // Add *.component.jsx file
  const componentStream = fs.createWriteStream(
    `${dir}\\${componentName}.component.jsx`
  );

  componentStream.write(`import Styled${componentName} from "./${componentName}.styles";

const ${componentName} = () => {
  return <Styled${componentName}>${componentName}</Styled${componentName}>;
};

export default ${componentName};
`);
  componentStream.end();

  // Add *.styles.js file
  const stylesStream = fs.createWriteStream(
    `${dir}\\${componentName}.styles.js`
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
    `${dir}\\${componentName}.motion.jsx`
  );

  motionStream.write(`import { motion } from "framer-motion";

import ${componentName} from "./${componentName}.component";

const Motion${componentName} = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <${componentName} />
    </motion.div>
  );
};

export default Motion${componentName};
`);
  motionStream.end();

  // Add index.js file
  const indexStream = fs.createWriteStream(`${dir}\\index.js`);

  indexStream.write(`export { default } from "./${componentName}.motion";
`);
  indexStream.end();
  console.log(`\nDONE!      Đã tạo component ${componentName} !\n`);
} else {
  console.log(`\nERR!       Component ${componentName} trùng tên !\n`);
}
