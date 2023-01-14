
const input = document.getElementById("terminal-input");
const output = document.querySelector(".terminal-output");

input.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) { // 13 is the key code for the Enter key
    event.preventDefault();
    const command = input.value;
    input.value = "";
    output.innerHTML += `<p>$ ${command}</p>`;
    // Add code here to handle the command
  }
});
