function extractArgs(args) {
    let count = 0;
    for(let i = 0; i < args.length; i++) {
        if(args[i].includes("-") && args[i].length === 2) break;
        else count++;
    }
    args.splice(0, count)
}

module.exports = extractArgs;