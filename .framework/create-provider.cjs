const { exec } = require("child_process");

module.exports.createProvider = function (providerName) {
  const fs = require("fs");
  const path = require("path");

  const providerDir = path.join(
    __dirname,
    "..",
    "src",
    "providers",
    providerName,
  );

  if (!fs.existsSync(providerDir)) {
    fs.mkdirSync(providerDir);
  }

  const providerFileContent = `
export interface ${providerName}Props {
  // Define your props here
  exampleProp?: string;
}

export function ${providerName}({ exampleProp }: ${providerName}Props) {
  // Define your provider logic here
  console.log(exampleProp);

  return <div>${providerName} provider works!</div>;
}
`;

  const providerFilePath = path.join(providerDir, `index.tsx`);
  fs.writeFileSync(providerFilePath, providerFileContent);

  const indexFilePath = path.join(providerDir, "..", "index.ts");
  const indexFileContent = `export * from './${providerName}';\n`;
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
      `Provider ${providerName} created successfully at ${providerFilePath}`,
    );
  });
};
