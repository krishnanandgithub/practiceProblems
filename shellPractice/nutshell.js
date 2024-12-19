const promptMsg = 'nutshell ';
let path = '~ ';

const echo = function (msg) {
  return msg.join(' ');
};

const cd = function (newPath) {
  if (newPath.length === 0) {
    path = '~ ';
  }
  
  path += newPath.join(' ');
};

const runCommand = function (commandString) {
  const [command, ...arg] = commandString.split(' ');
  switch (command) {
    case 'echo': return echo(arg);
    case 'cd': return cd(arg);

  }
};

const nutShell = function () {
  while (true) {
    const command = prompt(promptMsg + path + ' %');
    const commandOutput = runCommand(command);
    if (commandOutput !== undefined) {
      console.log(commandOutput);
    }
  }
};

nutShell();