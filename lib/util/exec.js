const exec = function(command) {
    require("child_process").exec(command);
}

module.exports.exec = exec;
