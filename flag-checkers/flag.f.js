const fs = require("fs");

function argFChecker(arg, projectPath) {
    if (arg[0] != "-f") return;
    const files = arg.slice(1);
    if (files.length === 0) throw "No File names provided"; 

    if (fs.existsSync(projectPath)) fs.mkdirSync(projectPath, { recursive: true });
    for(const file of files) {
        try {
            fs.writeFileSync(`${projectPath}/${file}`, "");
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = argFChecker;