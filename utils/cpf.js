// CPF = Copy and Paste Folders and Files

const fs = require("fs");
const path = require("path");

function cpf(createdFolderPath, type="mvc") {
    const templatePath = path.resolve(__dirname, "..", "templates", type);
    
    switch (type) {
        case "none":
            fs.mkdirSync(createdFolderPath, { recursive: true });
            createFiles(templatePath, createdFolderPath, "index.js", "package.json");
            break;

        case "mvc":
            createFolders(createdFolderPath, "controllers", "models", "routes", "views");
            createFiles(templatePath, createdFolderPath, "index.js", "package.json");
            break;

        case "ejs":
            createFolders(createdFolderPath, "controllers", "models", "views");
            createFiles(templatePath, createdFolderPath, "index.js", "package.json");
            const ejsCocde = fs.readFileSync(`${templatePath}/index.ejs`);
            fs.writeFileSync(`${createdFolderPath}/views/index.ejs`, ejsCocde);
            break;

        default:
            throw "Unnknown Template"
    }
}


function createFolders(createdFolderPath, ...folders) {
    for(const folder of folders) fs.mkdirSync(`${createdFolderPath}/${folder}`, { recursive: true });
} 

function createFiles(templatePath, createdFolderPath, ...files) {
    for (const file of files) {
        const code = fs.readFileSync(`${templatePath}/${file}`, "utf-8");
        fs.writeFileSync(`${createdFolderPath}/${file}`, code);
    }
}


module.exports = cpf;  