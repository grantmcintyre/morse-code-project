const alphabet = {
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": " ",
};


const textToMorse = () => {
  const input = document.getElementById("text");
  const inputValue = input.value;
  const output = document.getElementById("result");
  const inputChar = inputValue.toLowerCase().split("");
  const runInput = inputChar.map((char) => alphabet[char]);
  const returnValue = runInput.join(" ");
  output.innerHTML = returnValue;
};


const morseToText = () => {
  const input = document.getElementById("text");
  const inputValue = input.value;
  const output = document.getElementById("result");
  const inputChar = inputValue.toLowerCase().split(" ");
  const runInput = inputChar.map(getValue);
  const returnValue = runInput.join(" ");
  output.innerHTML = returnValue;
};


const getValue = (element) => {
  return Object.keys(alphabet).find((key) => alphabet[key] === element);
};



const translate = () => {
  const input = document.getElementById("text");
  const inputValue = input.value;
  if (inputValue.includes(".") || inputValue.includes("-")) {
    return morseToText();
  } else {
    textToMorse();
  }
};



window.onload = function () {
  document.getElementById("translate").addEventListener("click", translate);
};

