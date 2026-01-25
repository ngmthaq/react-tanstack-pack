const { exec } = require("child_process");

module.exports.createType = function (typeName) {
  const fs = require("fs");
  const path = require("path");

  const typesDir = path.join(__dirname, "..", "src", "types");

  if (!fs.existsSync(typesDir)) {
    fs.mkdirSync(typesDir);
  }

  const typeFileName = typeName;
  const typeFilePath = path.join(typesDir, `${typeFileName}.ts`);

  const typeFileContent = `export type ${typeName.charAt(0).toUpperCase() + typeName.slice(1)} = {
  // Define your type properties here
  key: string;
};
`;

  fs.writeFileSync(typeFilePath, typeFileContent);

  const indexFilePath = path.join(typesDir, "index.ts");
  const indexFileContent = `export * from './${typeFileName}';\n`;
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
    console.log(`Type ${typeName} created successfully at ${typeFilePath}`);
  });
};
