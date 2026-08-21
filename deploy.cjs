const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

console.log("=== STEP 1: Building production bundle ===");
execSync("npm run build", { stdio: "inherit" });

const distPath = path.join(__dirname, "dist");
const gitDir = path.join(distPath, ".git");
if (fs.existsSync(gitDir)) {
  fs.rmSync(gitDir, { recursive: true, force: true });
}

// Ensure .gitattributes exists in dist to disable any LFS filter
fs.writeFileSync(
  path.join(distPath, ".gitattributes"),
  "* text=auto\n*.glb -filter -merge -diff -text\n*.wasm -filter -merge -diff -text\n*.hdr -filter -merge -diff -text\n*.pdf -filter -merge -diff -text\n*.webm -filter -merge -diff -text\n"
);

console.log("=== STEP 2: Initializing clean gh-pages git tree ===");
execSync("git init", { cwd: distPath, stdio: "inherit" });
execSync("git checkout -b gh-pages", { cwd: distPath, stdio: "inherit" });
execSync("git add -A", { cwd: distPath, stdio: "inherit" });
execSync('git commit -m "deploy: publish raw binary assets to gh-pages"', {
  cwd: distPath,
  stdio: "inherit",
});

console.log("=== STEP 3: Pushing directly to origin gh-pages ===");
execSync(
  "git push -f https://github.com/NonchaloirKN/my-eportfolio.git gh-pages",
  { cwd: distPath, stdio: "inherit" }
);

console.log("=== STEP 4: Cleanup ===");
fs.rmSync(gitDir, { recursive: true, force: true });
console.log("✨ Successfully deployed live to GitHub Pages!");
