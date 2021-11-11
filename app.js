let pixelNum = 16;
let pixelCount = Math.pow(pixelNum,2) 
console.log(pixelCount)

for (let i = 1; i <= pixelCount; i++) {
    let createPixel = document.createElement("div");
    createPixel.classList.add("pixel");
    createPixel.id = "p" + i;
    document.querySelector(".pixelContainer").appendChild(createPixel);
}

for (let i = 1; i <= pixelCount; i++) {
    let pixel = document.querySelector("#p" + i);
    pixel.onmouseenter = function() {
        this.style.backgroundColor= "black";
    }
}