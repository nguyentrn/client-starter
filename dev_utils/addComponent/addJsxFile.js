const fs = require('fs');

module.exports = (dir, name, fileType) => {
  const jsxStream = fs.createWriteStream(`${dir}\\${name}.${fileType}.jsx`);
  jsxStream.write(`import Styled${name} from "./${name}.styles";

const ${name} = () => {
  return <Styled${name}>${name}</Styled${name}>;
};

export default ${name};
  `);
  jsxStream.end();
};
