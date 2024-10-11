let input = "";
const outputElement = document.getElementById("output");

const showOutput = () => {
  const output = eval(input);
  if (!Number.isInteger(output)) {
    outputElement.innerText = output.toFixed(2);
  }
  outputElement.innerText = output;
  input = "";
};

const appendInput = (value) => {
  input += value;
  outputElement.innerText = input;
};

const clearInput = () => {
  input = "";
  outputElement.innerText = input;
};

const deleteInput = () => {
  input = input.slice(0, input.length - 1);
  outputElement.innerText = input;
};
