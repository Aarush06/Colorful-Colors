// Colorful Arrays

//Varibles for HTML Elements
let containerEl = document.getElementById("container");

//Array
let colors = ["red", "green", "blue"];
// index ->    0       1         2

containerEl.innerHTML = "<div style = 'background:" + colors[1] + "'</div>";