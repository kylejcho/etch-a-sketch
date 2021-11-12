//Starting pixel width/height
let pixelWidth = 16;
let pixelCount = 256;




//Clear button
let clearButton = document.querySelector(".clearButton");

function clear() {
    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);
        pixel.style.backgroundColor = "white";
    }
}

clearButton.addEventListener('click', function() {
    console.log("clear button clicked")
    clear();
})



//Create Grid
function createGrid() {
    
    pixelCount = Math.pow(pixelWidth,2) 
    console.log("pixel count: " + pixelCount)

    let pixelContainer = document.querySelector(".pixelContainer")
    pixelContainer.textContent = '';
    pixelContainer.style.gridTemplate = "repeat(" + pixelWidth + ", auto) / repeat(" + pixelWidth + ",auto)";

    for (let i = 1; i <= pixelCount; i++) {
        let createPixel = document.createElement("div");
        createPixel.classList.add("pixel");
        createPixel.id = "p" + i;
        pixelContainer.appendChild(createPixel);
    }
    colorPixel();
}





//color pixel on mouse enter
function colorPixel() {
    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);
        pixel.onmouseenter = function() {
            pixel.style.transition= "all 0.1s ease";
            this.style.backgroundColor = "#444444";
            //this.style.boxShadow= "5px 5px 10px rgba(0, 0, 0, 0.1) inset";
        }
    }
}




//selection slider
let slider = document.querySelector(".slider");
let selection = document.querySelector(".selection");

slider.oninput = function() {
    selection.innerHTML = this.value + ' x ' + this.value;
    pixelWidth = this.value;
    console.log(pixelWidth);
    createGrid();

    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);
        pixel.style.border = "solid 1px #eeeeee";
    }   
}

function releaseSlider() {
    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);
        pixel.style.border = "none";
    }   
}

slider.onmouseup = releaseSlider;




createGrid();
colorPixel();
