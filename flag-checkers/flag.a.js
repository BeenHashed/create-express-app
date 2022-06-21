const fs = require("fs");

function argAChecker(arg, projectPath) {
    if (arg[0] != "-a") return;
    const folders = arg.slice(1);
    if (folders.length === 0) throw "No Folder names provided"; 

    for(const folder of folders) {
        try {
            fs.mkdirSync(`${projectPath}/${folder}`, { recursive: true });
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = argAChecker;
