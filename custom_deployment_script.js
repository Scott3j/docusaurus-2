// Import the necessary modules
const { execSync } = require("child_process");

// Define the deploy function
function deploy() {
  // Execute the necessary commands for deployment
  execSync("npm run build", { stdio: "inherit" });
  execSync("npm run deploy", { stdio: "inherit" });
}

// Export the deploy function
module.exports = {
  deploy,
};
