//getting the buttons and inputs
const cont = document.querySelector(".gridContainer");

const eraser = document.querySelector('.eraser');

const clear = document.querySelector('.clear');

const red = document.querySelector('.red');

const green = document.querySelector('.green');

const blue = document.querySelector('.blue');

const colorValues = document.querySelectorAll('.colorValue');

const display = document.querySelector('.display');
let redValue;

let greenValue;

let blueValue;

//setting up auxiliary variables
let ID = 0;

let paint = false;

let erase = false;

//Creating the grid
for (let i = 0; i < 16; i++) {
    const line = document.createElement("div");
    line.classList.add('line');

    for (let j = 0; j < 16; j++) {
        const column = document.createElement("div");
        column.classList.add('col');
        column.setAttribute('id',ID);
        ID ++;

        line.appendChild(column);
    }

    cont.appendChild(line);
}

//Implementing the eraser button
eraser.addEventListener('click', () =>{
    if (erase == true) {
        erase = false;
        eraser.classList.toggle("activeEraser");
    }
    else{
        erase = true;
        eraser.classList.toggle("activeEraser");
    }
})

redValue = colorValues[0].textContent = parseInt(red.value).toString(16); //the value of the red slider
greenValue = colorValues[1].textContent = parseInt(green.value).toString(16); //the value of the green slider
blueValue = colorValues[2].textContent = parseInt(blue.value).toString(16); //the value of the blue slider

//adding the padding needed for hexadecimal code
if (redValue.length < 2) {
    redValue = "0" + redValue;
}

if (greenValue.length < 2) {
    greenValue = "0" + greenValue;
}

if (blueValue.length < 2) {
    blueValue = "0" + blueValue;
}

//changing the display color
display.style.backgroundColor = '#' + redValue
                                +greenValue
                                +blueValue;

//implementing the responsive color sliders
red.addEventListener('input', () =>{
    redValue = colorValues[0].textContent = parseInt(red.value).toString(16);

    if (redValue.length < 2) {
        redValue = "0" + redValue;
    }

    display.style.backgroundColor = '#' + redValue
                                        +greenValue
                                        +blueValue;
})

green.addEventListener('input', () =>{
    greenValue = colorValues[1].textContent = parseInt(green.value).toString(16);

    if (greenValue.length < 2) {
        greenValue = "0" + greenValue;
    }

    display.style.backgroundColor = '#' + redValue
                                        +greenValue
                                        +blueValue;
})

blue.addEventListener('input', () =>{
    blueValue = colorValues[2].textContent = parseInt(blue.value).toString(16);

    if (blueValue.length < 2) {
        blueValue = "0" + blueValue;
    }

    display.style.backgroundColor = '#' + redValue
                                        +greenValue
                                        +blueValue;
})

//implementing the paint and eraser mechanic
for (let index = 0; index < 256; index++) {
    const square = document.getElementById(index)

    square.addEventListener("mousedown", () =>{
        paint = true;
    })

    square.addEventListener('mouseup', () =>{
        paint = false;
    })

    square.addEventListener("mousemove", () =>{
        if (erase && paint) {
            square.style.backgroundColor = "#d4d4d4";
        }

        else if (paint) {
            square.style.backgroundColor = '#' + redValue
                                                + greenValue
                                                + blueValue;
        }
    })

    square.addEventListener("click", () =>{
        if (erase) {
            square.style.backgroundColor = "#d4d4d4";
        }

        else{
            square.style.backgroundColor = '#' + redValue
                                                + greenValue
                                                + blueValue;
        }
    })
}

//implementing the clear mechanic
clear.addEventListener('click', () =>{
    const grid = document.querySelectorAll(".col");

    grid.forEach(element => {
        element.style.backgroundColor = "#d4d4d4";
    });
})