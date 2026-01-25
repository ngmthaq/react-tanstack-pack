const { exec } = require("child_process");

function toUpperSnakeCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1_$2") // Insert underscore between lowercase and uppercase
    .toUpperCase();
}

module.exports.createConstant = function (constantName) {
  const fs = require("fs");
  const path = require("path");

  const constantsDir = path.join(__dirname, "..", "src", "constants");

  if (!fs.existsSync(constantsDir)) {
    fs.mkdirSync(constantsDir);
  }

  const constantFileName = constantName;
  const constantFilePath = path.join(constantsDir, `${constantFileName}.ts`);
  const constantNameUpper = toUpperSnakeCase(constantName);

  const constantFileContent = `export const ${constantNameUpper} = {} as const;
`;

  fs.writeFileSync(constantFilePath, constantFileContent);

  const indexFilePath = path.join(constantsDir, "index.ts");
  const indexFileContent = `export * from './${constantFileName}';\n`;
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
    console.log(
      `Constant ${constantName} created successfully at ${constantFilePath}`,
    );
  });
};
