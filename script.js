const responses = {
  "mole": "1 mole = 6.022 × 10^23 particles. Formula: n = mass / molar mass.",
  "frequency": "Frequency is the number of oscillations per second. Unit: Hertz (Hz).",
  "lens formula": "Lens formula: 1/f = 1/v - 1/u",
  "ohm": "Ohm's Law: V = IR. Voltage equals current multiplied by resistance.",
  "echo": "Echo is reflection of sound. Minimum distance required: 17 metres."
};

function sendMessage() {
  const input = document.getElementById("user-input").value.toLowerCase();
  const output = document.getElementById("chat-output");

  let reply = "Sorry, I don't have that answer yet. Add it to script.js!";

  for (let key in responses) {
    if (input.includes(key)) {
      reply = responses[key];
      break;
    }
  }

  output.innerHTML += `<p><strong>You:</strong> ${input}</p>`;
  output.innerHTML += `<p><strong>AMG:</strong> ${reply}</p>`;

  document.getElementById("user-input").value = "";
}
