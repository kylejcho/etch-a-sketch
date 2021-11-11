let pixelWidth = 16;
let pixelCount = Math.pow(pixelWidth,2) 
console.log("pixel count: " + pixelCount)

let pixelContainer = document.querySelector(".pixelContainer")
pixelContainer.style.gridTemplate = "repeat(" + pixelWidth + ", auto) / repeat(" + pixelWidth + ",auto)";




for (let i = 1; i <= pixelCount; i++) {
    let createPixel = document.createElement("div");
    createPixel.classList.add("pixel");
    createPixel.id = "p" + i;
    pixelContainer.appendChild(createPixel);
}

for (let i = 1; i <= pixelCount; i++) {
    let pixel = document.querySelector("#p" + i);
    pixel.onmouseenter = function() {
        this.style.backgroundColor = "black";
    }
}