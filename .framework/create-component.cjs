const { exec } = require("child_process");

module.exports.createComponent = function (componentName) {
  const fs = require("fs");
  const path = require("path");

  const componentDir = path.join(
    __dirname,
    "..",
    "src",
    "components",
    componentName,
  );

  if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir);
  }

  const componentFileContent = `
export interface ${componentName}Props {
  // Define your props here
  exampleProp?: string;
}

export function ${componentName}({ exampleProp }: ${componentName}Props) {
  console.log(exampleProp);

  return <div>${componentName} component works!</div>;
}
`;

  const componentFilePath = path.join(componentDir, `index.tsx`);
  fs.writeFileSync(componentFilePath, componentFileContent);

  const styledFilePath = path.join(componentDir, `styled.tsx`);
  const styledFileContent = ``;
  fs.writeFileSync(styledFilePath, styledFileContent);

  const indexFilePath = path.join(componentDir, "..", "index.ts");
  const indexFileContent = `export * from './${componentName}';\n`;
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
      `Component ${componentName} created successfully at ${componentFilePath}`,
    );
  });
};
