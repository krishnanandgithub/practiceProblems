const folder = [];
const promptMsg = 'nutshell ';
let path = ['~ '];
let pathIndex = 0;

const echo = function (msg) {
  return msg.join(' ');
};

const cd = function (newPath) {
  if (newPath.length === 0) {
    pathIndex = 0;
    path = ['~ '];
    return;
  }
  if (newPath[0] === '..' || newPath[0] === '../') {
    pathIndex = Math.max(0, pathIndex - 1);
    return;
  }
  path = [path[0], ...newPath.join().split('/')];
  if (path.at(-1) === '') {
    path.pop();
  }
  pathIndex = path.length - 1;
};

const mkdir = function (folderName) {
  folder.push(folderName);
};

const ls = function () {
  console.log(folder.join(' '.repeat(20)));
};

const COMMANDS = [
  [echo, 'echo'],
  [cd, 'cd'],
  [mkdir, 'mkdir'],
  [ls, 'ls']
];

const getCommandFunction = function (command, commandFunction) {
  return command === commandFunction[1] ? commandFunction[0] : command;
};

const runCommand = function (commandString) {
  const [command, ...arg] = commandString.split(' ');
  const isValid = COMMANDS.some(function (x) { return x.includes(command); });
  if (!isValid) {
    return 'nts: command not found: ' + command;
  }
  const functionName = COMMANDS.reduce(getCommandFunction, command);

  return functionName(arg);
};

const nutShell = function () {
  while (true) {
    const command = prompt(promptMsg + path.at(pathIndex) + ' %');
    const commandOutput = runCommand(command);
    if (commandOutput !== undefined) {
      console.log(commandOutput);
    }
  }
};

nutShell();

























const _runCommand = function (commandString) {
  const [command, ...arg] = commandString.split(' ');
  switch (command) {
    case 'echo': return echo(arg);
    case 'cd': return cd(arg);
    case 'mkdir': return mkdir(arg);
    case 'ls': return ls();


    default: return 'nts: command not found: ' + command;
  }
};