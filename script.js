const cont = document.querySelector(".gridContainer");

let ID = 0;

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

let paint = false;

let erase = false;

const eraser = document.querySelector('.eraser');

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
            square.classList.remove('activeCol');
        }

        else if (paint) {
        square.classList.add('activeCol');
        }
    })

    square.addEventListener("click", () =>{
        if (erase) {
            square.classList.remove('activeCol');
        }

        else{
            square.classList.add('activeCol');
        }
    })
}

const clear = document.querySelector('.clear');

clear.addEventListener('click', () =>{
    const grid = document.querySelectorAll(".col");

    grid.forEach(element => {
        element.classList.remove('activeCol');
    });
})