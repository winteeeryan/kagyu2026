const version = process.versions.node;
const [major, minor] = version.split(".").map(Number);

const supported = major > 20 || (major === 20 && minor >= 9);
const blocked = major >= 25;

if (!supported || blocked) {
  console.error("");
  console.error("Unsupported Node.js version for this project.");
  console.error(`Current version: ${version}`);
  console.error("Required version: >=20.9 and <25");
  console.error("");
  console.error("Recommended fix:");
  console.error("  nvm use 22");
  console.error("or");
  console.error("  nvm install 22 && nvm use 22");
  console.error("");
  console.error(
    "Next.js 15 in this project can fail under Node 25 with errors like `localStorage.getItem is not a function`."
  );
  process.exit(1);
}
