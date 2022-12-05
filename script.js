const saveBtn = document.getElementById("save");
const message = document.getElementById("mess");
const form = document.getElementById("form");

const allInputs = document.querySelectorAll("input");

const boxReq = document.querySelector(".box-req");

const submitBtn = document.getElementById("submit-btn");

const uppercaseBox = document.getElementById("uppercase");
const lowecaseBox = document.getElementById("lowecase");
const numberBox = document.getElementById("number");
const symbolBox = document.getElementById("symbol");
const lengthBox = document.getElementById("length");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=";

const passwordGenerated = document.getElementById("pass");

let statusArray = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   passwordGenerated.innerText = "";
  showPassword();
  passwordGenerated.classList.add("animate");
  submitBtn.disabled = "true";

  setTimeout(() => {
    passwordGenerated.classList.remove("animate");
    submitBtn.disabled = false;
  }, 300);
});

function showPassword() {
  let currentPassLength = lengthBox.value;
  let result = "";
  for (let i = 0; i < currentPassLength; i++) {
    let actualLetter = generatePassword();
    result += actualLetter;
  }
  passwordGenerated.innerText = result;
}

function generateLetter(type) {
  let currentLetter = type[Math.floor(Math.random() * type.length)];
  return currentLetter;
}

function generatePassword() {
  let letterArray = [];
  if (uppercaseBox.checked) {
    letterArray.push(generateLetter(upperLetters));
  }
  if (lowecaseBox.checked) {
    letterArray.push(generateLetter(lowerLetters));
  }
  if (numberBox.checked) {
    letterArray.push(generateLetter(numbers));
  }
  if (symbolBox.checked) {
    letterArray.push(generateLetter(symbols));
  }

  if (letterArray.length === 0) {
    boxReq.classList.remove("hidden");
    return "";
  } else {
    boxReq.classList.add("hidden");
    return generateLetter(letterArray);
  }
}

saveBtn.addEventListener("mouseover", () => {
  message.classList.toggle("hidden");
});
saveBtn.addEventListener("mouseleave", () => {
  message.classList.toggle("hidden");
  message.innerText = "copy the text";
  message.style.color = "white";
});

saveBtn.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  const p = passwordGenerated.innerText;
  if (!p) {
    message.innerText = "Generate first";
    message.style.color = "red";
    return;
  }
  textArea.value = p;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  message.innerText = "Copied to clipboard";
  message.style.color = "green";
  //   const textToCopy = passwordGenerated.innerText;
  //   console.log(textToCopy);
  //   if (!textToCopy) {
  //     message.innerText = "Generate first";
  //     message.style.color = "red";
  //     return;
  //   }
  //   console.log(navigator.clipboard);
  //   navigator.clipboard.writeText(textToCopy).then(() => {
  //     console.log(navigator.clipboard);
  //     message.innerText = "Copied to clipboard";
  //     message.style.color = "green";
  //   });
});
