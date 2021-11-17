//Default pixel width/height/color
let pixelWidth = 16; 
let pixelCount = 256;
let color = "#444444";

//Selectors
const colorButton = document.querySelector('.colorButton');
const eraserButton = document.querySelector('.eraserButton');
const clearButton = document.querySelector(".clearButton");
const pixelContainer = document.querySelector(".pixelContainer");
const slider = document.querySelector(".slider");
const selection = document.querySelector(".selection");

//COLOR BUTTON
colorButton.style.color = color;
colorButton.onclick = () => {                                 //When color button is clicked, pixel background color is chosen color value
    colorButton.style.color = color;
    eraserButton.style.color = "#b6b6b6";
}

//ERASER BUTTON
eraserButton.onclick = () => {                                //When eraser button is clicked, cursor deletes pixel color 
    color = ""
    eraserButton.style.color = "#e29091";
}

//CLEAR BUTTON
const clear = () => {
    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);         //Function deletes background color of all pixels on grid
        pixel.style.backgroundColor = "";
        pixel.style.boxShadow = "";
    }
}
clearButton.onclick = () => {
    clear();                                                  
    eraserButton.style.color = "#b6b6b6";
}


//CREATE GRID
const createGrid = () => {
    pixelCount = Math.pow(pixelWidth, 2);                     //Takes width and creates grid template to dynamically fit pixal container size
    pixelContainer.textContent = '';
    pixelContainer.style.gridTemplate = "repeat("+pixelWidth+", auto)/repeat(" +pixelWidth+",auto)";

    for (let i = 1; i <= pixelCount; i++) {                   //Adds pixel divs in the amount of pixelCount to the grid template. 
        let createPixel = document.createElement("div");
        createPixel.classList.add("pixel");
        createPixel.id = "p" + i;
        pixelContainer.appendChild(createPixel);
    }
    colorPixel();
}


//COLOR PIXELS
const colorPixel = () => {
    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);
        pixel.onmouseenter = function() {
            for (let i = 1; i <= pixelCount; i++) {
                let pixel = document.querySelector("#p" + i);
                pixel.style.border = "";
            }   
            this.style.backgroundColor = color;
            this.style.boxShadow="0 0 6px rgba(0, 0, 0, 0.3)"; 
            if (color === "") this.style.boxShadow=""; 
        }
    }
}

//SLIDER
slider.onmouseover = () => {
    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);         //Reveal grid template when using slider
        pixel.style.border = "solid 1px #f0b0b0";
    }   
}
slider.onmouseout = () => {
    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);
        pixel.style.border = "";
    }   
}

//GRID-SIZE DISPLAY
slider.oninput = function() {
    selection.innerHTML = this.value + ' x ' + this.value;
    pixelWidth = this.value;
    clear();
}                                                             //Create a new grid once slider once mouse click is released
slider.onmouseup = () => {
    createGrid();
    for (let i = 1; i <= pixelCount; i++) {
        let pixel = document.querySelector("#p" + i);
        pixel.style.border = "solid 1px #f0b0b0";
    }   
}

//COLOR PALLETE
let colorsContainer = document.querySelector(".colorsContainer");
for (let i = 1; i <= 12; i++) {
    let createColor = document.createElement("button");      //Creates buttons for color selection. 
    createColor.classList.add("colorOption");
    createColor.id = "c" + i;
    colorsContainer.appendChild(createColor);
}
for (let i = 1; i <= 12; i++) {
    let colorOption = document.querySelector("#c" + i);
    let colorSelection = window.getComputedStyle(colorOption, null).getPropertyValue('background-color');
    colorOption.onclick = () => {
        color = colorSelection;                              //Change "color" to background-color of button selection from color pallet
        eraserButton.style.color = "#b6b6b6";
        colorButton.onclick = () => {
            color = colorSelection;
        }
    }
}

//CUSTOM CURSOR
let cursor = document.querySelector(".cursor");              //cursor color changes according to selected color
document.onmousemove = (e) => {
    cursor.setAttribute("style", "top: " +  (e.clientY-7) + "px; left:  " + (e.clientX - 7) + "px;");
    cursor.style.backgroundColor = color;
}
document.addEventListener('click', function() {
    cursor.style.backgroundColor = color;                    //header and color button changes according to color selection
    document.querySelector('header').style.color = color;                    
    colorButton.style.color = color;
})

createGrid();
colorPixel();