/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");

const componentName = `${process.argv[2]
  .slice(0, 1)
  .toUpperCase()}${process.argv[2].slice(1)}`;

const dir = `${path.resolve(".")}\\components\\${componentName}`;
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);

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

  const stylesStream = fs.createWriteStream(
    `${dir}\\${componentName}.styles.js`
  );

  stylesStream.write(`import styled from "styled-components";

export default styled.div\`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  height: 100%;
\`;
`);
  stylesStream.end();

  const indexStream = fs.createWriteStream(`${dir}\\index.js`);

  indexStream.write(`export { default } from "./${componentName}.component";
`);
  indexStream.end();
  console.log(`DONE!      Đã tạo component ${componentName} !`);
} else {
  console.log(`ERR!       Component ${componentName} trùng tên !`);
}
