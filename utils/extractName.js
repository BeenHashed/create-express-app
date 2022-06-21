function seperateName(args) {
    let count = 0;
    for(let i = 0; i < args.length; i++) {
        if(args[i].includes("-") && args[i].length === 2) break;
        else count++;
    }
    return args.slice(0, count).join("-");
}

module.exports = seperateName;