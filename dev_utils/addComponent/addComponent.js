/* eslint-disable no-console */
const fs = require("fs");
const checkArgs = require("./checkArgs");
const addStylesFile = require("./addStylesFile");
const addJsxFile = require("./addJsxFile");
const addIndex = require("./addIndex");
addDomainIndex;
const { domain, name, fileType, domainDir, dir } = checkArgs(process.argv);

if (!fs.existsSync(domainDir)) {
  fs.mkdirSync(domainDir);
  fs.mkdirSync(`${domainDir}\\components`);
  fs.mkdirSync(`${domainDir}\\containers`);
  fs.mkdirSync(`${domainDir}\\layouts`);
  fs.mkdirSync(`${domainDir}\\hooks`);
  addIndex(domainDir, domain, "domain");
  addStylesFile(domainDir, domain);
  addJsxFile(domainDir, domain, "domain");
}
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
  addStylesFile(dir, name);
  addJsxFile(dir, name, fileType);
  addIndex(dir, name, fileType);

  //   //   // Add *.motion.jsx file
  //   //   const motionStream = fs.createWriteStream(
  //   //     `${dir}\\${name}.motion.jsx`
  //   //   );

  //   //   motionStream.write(`import { motion } from "framer-motion";

  //   // import ${name} from "./${name}.component";

  //   // const Motion${name} = () => {
  //   //   return (
  //   //     <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
  //   //       <${name} />
  //   //     </motion.div>
  //   //   );
  //   // };

  //   // export default Motion${name};
  //   // `);
  //   //   motionStream.end();
  console.log(`\nDONE!      Đã tạo component ${name} !\n`);
} else {
  console.log(`\nERR!       Component ${name} trùng tên !\n`);
}
