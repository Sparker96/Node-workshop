//Output a prompt

process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const input = data.toString().trim(); //remove the newline
    let cmdArr = input.split(" ");
    let cmd = cmdArr[0]
    let arg = cmdArr[1]
    const pwd = require('./pwd');
    const ls = require('./ls');
    const cat = require('./cat');
    ls(cmd);
    pwd(cmd);
    cat(cmd, arg);

    const done = (output) => {
        process.stdout.write(output);
        process.stdout.write('\nprompt > ');
    };


});