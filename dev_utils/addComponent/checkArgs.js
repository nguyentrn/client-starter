const path = require('path');

module.exports = (argv) => {
  const domain = `${argv[3].slice(0, 1).toUpperCase()}${argv[3].slice(1)}`;
  const name = `${argv[4].slice(0, 1).toUpperCase()}${argv[4].slice(1)}`;
  let fileType;
  if (argv[2] === 'com') {
    fileType = 'component';
  } else if (argv[2] === 'con') {
    fileType = 'container';
  } else if (argv[2] === 'lay') {
    fileType = 'layout';
  }
  const domainDir = `${path.resolve('.')}\\domains\\${domain}`;
  const dir = `${domainDir}\\${fileType}s\\${name}`;

  return { domain, name, fileType, domainDir, dir };
};
