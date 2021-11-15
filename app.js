//Default pixel width/height
let pixelWidth = 16;
let pixelCount = 256;

//Default pixel color
let color = "#444444";

//COLOR BUTTON
let colorButton = document.querySelector('.colorButton');
colorButton.style.color = "#444444";
//When color button is clicked, pixel background color is chosen color value
colorButton.addEventListener('click', function() {
    colorButton.style.color = color;
    eraserButton.style.color = "#b6b6b6";
})

//ERASER BUTTON
//When eraser button is clicked, cursor deletes pixel color 
let eraserButton = document.querySelector('.eraserButton');
eraserButton.addEventListener('click', function() {
    color = ""
    eraserButton.style.color = "#e29091"
})


//CLEAR BUTTON
let clearButton = document.querySelector(".clearButton");
//Function deletes background color of all pixels on grid
function clear() {
    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);
        pixel.style.backgroundColor = "";
        pixel.style.boxShadow = "";
    }
}
//When clear button is clicked, run clear function
clearButton.addEventListener('click', function() {
    clear();
    eraserButton.style.color = "#b6b6b6";
})


//CREATE GRID
function createGrid() {
    //Total pixel count = width^2
    pixelCount = Math.pow(pixelWidth,2) 
    let pixelContainer = document.querySelector(".pixelContainer")
    pixelContainer.textContent = '';

    //Takes width and creates grid template to dynamically fit pixal container size
    pixelContainer.style.gridTemplate = "repeat(" + pixelWidth + ", auto) / repeat(" + pixelWidth + ",auto)";

    //Adds pixel divs in the amount of pixelCount to the grid template. 
    //Creates numberically ordered IDs for each pixel
    for (let i = 1; i <= pixelCount; i++) {
        let createPixel = document.createElement("div");
        createPixel.classList.add("pixel");
        createPixel.id = "p" + i;
        pixelContainer.appendChild(createPixel);
    }
    colorPixel();
}

createGrid();


//color pixel on mouse enter using chosen color 
function colorPixel() {
    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);
        pixel.onmouseenter = function() {
            for (let i = 1; i <= pixelCount; i++) {
                let pixel = document.querySelector("#p" + i);
                pixel.style.border = "";
            }   
            this.style.backgroundColor = color;
            this.style.boxShadow="0 0 6px rgba(0, 0, 0, 0.3)"; 

            if (color == "") {
                this.style.boxShadow=""; 
            }
        }
    }
}
colorPixel();


//selection slider
let slider = document.querySelector(".slider");
let selection = document.querySelector(".selection");

//Reveal grid template when using grid size slider
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

//display grid size when changing slider value
slider.oninput = function() {
    selection.innerHTML = this.value + ' x ' + this.value;
    pixelWidth = this.value;

    //clears pixel container when changing grid size
    clear();
}

//Create a new grid once slider once mouse click is released
slider.onmouseup = function() {
    createGrid();
    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);
        pixel.style.border = "solid 1px #f0b0b0";
    }   
}




//Color Pallete
//Creates buttons for color selection. 
let colorsContainer = document.querySelector(".colorsContainer");
for (let i = 1; i <= 12; i++) {
    let createColor = document.createElement("button");
    createColor.classList.add("colorOption");
    createColor.id = "c" + i;
    colorsContainer.appendChild(createColor);
}

//Change "color" to background-color of button selection from color pallet
for (let i = 1; i <= 12; i++) {
    let colorOption = document.querySelector("#c" + i);
    let colorSelection = window.getComputedStyle(colorOption, null).getPropertyValue('background-color');
    colorOption.addEventListener('click', function() {
        color = colorSelection;
        eraserButton.style.color = "#b6b6b6";
        colorButton.addEventListener('click', function() {
            color = colorSelection;
        })
    })
}

//Custom cursor design
let cursor = document.querySelector(".cursor");
document.addEventListener('mousemove', function(e) {
    cursor.setAttribute("style", "top: " +  (e.clientY-7) + "px; left:  " + (e.clientX - 7) + "px;");
    //cursor color changes according to selected color
    cursor.style.backgroundColor = color;
})

document.addEventListener('click', function() {
    cursor.style.backgroundColor = color;
    //header and color button changes according to color selection
    let header = document.querySelector('header');
    header.style.color = color;
    colorButton.style.color = color;
})

