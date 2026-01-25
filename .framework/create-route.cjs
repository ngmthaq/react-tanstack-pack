const { exec } = require("child_process");

module.exports.createRoute = function (routePath) {
  const fs = require("fs");
  const path = require("path");

  const routesDir = path.join(__dirname, "..", "src", "routes");
  const routeFilePath = path.join(routesDir, routePath);

  // Ensure the directory exists
  const dir = path.dirname(routeFilePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const routeFileContent = ``;

  fs.writeFileSync(routeFilePath, routeFileContent);

  exec(`yarn build && yarn prettier --write .`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error formatting file: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Prettier stderr: ${stderr}`);
      return;
    }
    console.log(`Route ${routePath} created successfully at ${routeFilePath}`);
  });
};
