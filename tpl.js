const { execSync } = require("child_process");
const os = require("os");
const path = require("path");

// Get the TypeScript file name from process.argv
const tsFileName = process.argv[2];

// Run the TypeScript compiler using ts-node
try {
    let fileNameWithoutExtension = path.basename(tsFileName).split(".ts")[0];
    let outFileName = path.join(".", "dist", `${fileNameWithoutExtension}.js`);

    console.log(execSync(`npx tsc ${tsFileName} --outDir dist`).toString());
    console.log("TypeScript compilation completed successfully.");
    console.log(execSync(`node ${outFileName}`).toString());
} catch (error) {
    console.error("TypeScript compilation failed.");
    console.error(error.message);
}
