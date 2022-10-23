// Colorful Arrays

//Varibles for HTML Elements
let containerEl = document.getElementById("container");
let inputEl = document.getElementById("color-in");

let colors;

fetch("colors.txt").then(convertData).then(processData);

function convertData(rawData) {
    return rawData.text();
}

function processData(stringData) {
    colors = stringData.split(/\r\n/);
    displayColors(colors);

}

//Event Listener
inputEl.addEventListener("keyup", submitHandler);
function submitHandler(event) {
    let divStr = "";
    for (let i = 0; i < colors.length; i++) {
        if (colors[i].includes(inputEl.value)) {
            divStr += `<div style = "background: ${colors[i]}"></div>`;
        }
    }
    containerEl.innerHTML = divStr;
}

function displayColors(colors) {
    let divStr = "";
    let count = 0;
    for (let i = 0; i < colors.length; i++) {
        divStr += `<div style = "background: ${colors[i]}"></div>`;
        count++;
    }
    containerEl.innerHTML = divStr + `<p>Count ${count}<p>`;
}
