const input = document.getElementById("inputText");
const replaceSpaceBtn = document.getElementById("removeSpace");
const output = document.getElementById("output");

function removeSpace () {
    const value = input.value;
    output.textContent = value.replaceAll(" ", "");
}
replaceSpaceBtn.onclick = removeSpace;


const input2 = document.getElementById("InputString2");
const charCountBtn = document.getElementById("countCharBtn");
const output2 = document.getElementById("output2");

function countChar() {
    const value = input2.value;
    output2.textContent = value.trim().length;
}
charCountBtn.onclick = countChar;


const input3 = document.getElementById("InputString3");
const checkEmailBtn = document.getElementById("checkEmailBtn");
const output3 = document.getElementById("output3");

function checkEmail() {
    const value = input3.value;
    output3.textContent = value.includes("@") ? "Valid":"Invalid";
}

checkEmailBtn.onclick = checkEmail;

const input4 = document.getElementById("InputString4");
const searchBtn = document.getElementById("searchBtn");
const output4 = document.getElementById("output4");
const inputSearch = document.getElementById("inputSearch");

function search () {
    const searchValue = inputSearch.value;
    const value = input4.value;
    output4.textcontent = value.includes(searchValue)? "Found":"Not Found";
}

searchBtn.onclick = search;

const input5 = document.getElementById("InputString5");
const replaceBtn = document.getElementById("replaceBtn");
const output5 = document.getElementById("output5");
const InputReplace = document.getElementById("InputReplace");
const InputWord = document.getElementById("InputWord");

function replaceWord () {
    const value = input5.value;
    const wordToReplace = InputReplace.value;
    const newWord = InputWord.value;

    output5.textContent = value.replaceAll(wordToReplace, newWord);
}

replaceBtn.onclick = replaceWord;
