const fs = require("fs");

module.exports = (dir, name) => {
  const stylesStream = fs.createWriteStream(`${dir}\\${name}.styles.js`);

  stylesStream.write(`import styled from "styled-components";

export default styled.div\`
  display: flex;
\`;
`);
  stylesStream.end();
};
