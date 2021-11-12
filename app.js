//Starting pixel width/height
let pixelWidth = 16;
let pixelCount = 256;
//Default color
let color = "#444444";


//Color Button
let colorButton = document.querySelector('.colorButton');
colorButton.addEventListener('click', function() {
    color = "#444444"
})


//Eraser Button
let eraserButton = document.querySelector('.eraserButton');
eraserButton.addEventListener('click', function() {
    color = ""
})





//Clear button
let clearButton = document.querySelector(".clearButton");

function clear() {
    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);
        pixel.style.backgroundColor = "";
    }
}

clearButton.addEventListener('click', function() {
    clear();
})



//Create Grid
function createGrid() {
    
    pixelCount = Math.pow(pixelWidth,2) 

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
            for (let i = 1; i <= pixelCount; i++) {
                let pixel = document.querySelector("#p" + i);
                pixel.style.border = "";
            }   
            this.style.backgroundColor = color;
        }
    }
}




//selection slider
let slider = document.querySelector(".slider");
let selection = document.querySelector(".selection");

slider.onmouseover = function() {
    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);
        pixel.style.border = "solid 1px #f0b0b0";
    }   
}

slider.onmouseout = function() {
    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);
        pixel.style.border = "";
    }   
}


slider.oninput = function() {
    selection.innerHTML = this.value + ' x ' + this.value;
    pixelWidth = this.value;
    clear();
}

function releaseSlider() {
    createGrid();
    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);
        pixel.style.border = "solid 1px #f0b0b0";
    }   
}

slider.onmouseup = releaseSlider;




createGrid();
colorPixel();
