const { exec } = require("child_process");

module.exports.createUtil = function (utilName) {
  const fs = require("fs");
  const path = require("path");

  const utilsDir = path.join(__dirname, "..", "src", "utils");

  if (!fs.existsSync(utilsDir)) {
    fs.mkdirSync(utilsDir);
  }

  const utilFileName = utilName;
  const utilFilePath = path.join(utilsDir, `${utilFileName}.ts`);

  const utilFileContent = `export function ${utilName}ExampleFunction() {
  // Define your utility logic here
}
`;

  fs.writeFileSync(utilFilePath, utilFileContent);

  const indexFilePath = path.join(utilsDir, "index.ts");
  const indexFileContent = `export * from './${utilFileName}';\n`;
  fs.appendFileSync(indexFilePath, indexFileContent);

  exec(`yarn prettier --write .`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error formatting file: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Prettier stderr: ${stderr}`);
      return;
    }
    console.log(`Util ${utilName} created successfully at ${utilFilePath}`);
  });
};
