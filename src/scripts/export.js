const fs = require("fs");
const path = require("path");

function exportFilePaths(directoryPath, outputPath) {
  const exportStatements = [];
  const absoluteDirectoryPath = path.resolve(__dirname, directoryPath);
  const absoluteOutputPath = path.resolve(__dirname, outputPath);

  function traverseDirectory(currentPath, relativePath) {
    const files = fs.readdirSync(currentPath);

    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const fileStat = fs.statSync(filePath);

      if (fileStat.isDirectory()) {
        const newRelativePath = path.join(relativePath, file);
        traverseDirectory(filePath, newRelativePath); // Recursive call for subdirectories
      } else {
        const fileName = path.basename(file, path.extname(file));
        const filePathRelativeToOutput = path
          .join(relativePath, file)
          .replace(/\\/g, "/")
          .replace(".tsx", "");
        const exportStatement = `export { default as ${fileName} } from "./svgs/${filePathRelativeToOutput}";`;
        exportStatements.push(exportStatement);
      }
    }
  }

  traverseDirectory(absoluteDirectoryPath, "");

  const fileData = exportStatements.join("\n");

  fs.writeFile(absoluteOutputPath, fileData, "utf8", (err) => {
    if (err) {
      console.error("Error exporting file paths:", err);
      return;
    }

    console.log("File paths exported successfully!");
  });
}

// Example usage
const directoryPath = "../svgs"; // Replace with the actual path to the directory
const outputPath = "../index.ts"; // Replace with the desired output file path

exportFilePaths(directoryPath, outputPath);
