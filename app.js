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
    color = "#444444"
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


//Color Pallete
let colorsContainer = document.querySelector(".colorsContainer");
for (let i = 1; i <= 12; i++) {
    let createColor = document.createElement("button");
    createColor.classList.add("colorOption");
    createColor.id = "c" + i;
    colorsContainer.appendChild(createColor);

}


let c1 = document.querySelector('#c1');
let f94144 = c1.style.backgroundColor = "#f94144"

let c2 = document.querySelector('#c2');
c2.style.backgroundColor = "#f3722c";

let c3 = document.querySelector('#c3');
c3.style.backgroundColor = "#f8961e";

let c4 = document.querySelector('#c4');
c4.style.backgroundColor = "#f9844a";

let c5 = document.querySelector('#c5');
c5.style.backgroundColor = "#f9c74f";

let c6 = document.querySelector('#c6');
c6.style.backgroundColor = "#90be6d";

let c7 = document.querySelector('#c7');
c7.style.backgroundColor = "#43aa8b";

let c8 = document.querySelector('#c8');
c8.style.backgroundColor = "#4d908e";

let c9 = document.querySelector('#c9');
c9.style.backgroundColor = "#277da1";

let c10 = document.querySelector('#c10');
c10.style.backgroundColor = "#577590";

let c11 = document.querySelector('#c11');
c11.style.backgroundColor = "#444444";

let c12 = document.querySelector('#c12');
c12.style.backgroundColor = "black";


for (let i = 1; i <= 12; i++) {
   
    let a = document.querySelector("#c" + i);

    let b = window.getComputedStyle(a, null).getPropertyValue('background-color');
    console.log(b);

    a.addEventListener('click', function() {
        console.log("clicked");
        color = b;
    })
}

