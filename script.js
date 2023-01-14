const input = document.getElementById("terminal-input");
const output = document.querySelector(".terminal-output");

input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) { // 13 is the key code for the Enter key
    event.preventDefault();
    const command = input.value;
    input.value = "";
    output.innerHTML +=

      const commands = {
  "help": helpCommand,
  "clear": clearCommand,
  "echo": echoCommand
};
    function helpCommand() {
  // code to display a list of available commands
}

function clearCommand() {
  // code to clear the terminal output
}

function echoCommand(args) {
  // code to display the arguments passed to the command
}
    
    input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) { // 13 is the key code for the Enter key
    event.preventDefault();
    const command = input.value;
    input.value = "";
    // code to execute the command
  }
});
    
    const args = command.split(" ");
const cmd = args.shift();

if (commands[cmd]) {
  commands[cmd](args);
} else {
  output.innerHTML += `<p>Command not found: ${cmd}</p>`;
}
