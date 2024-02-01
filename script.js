
// get html document
const body = document.querySelector('#container')

// create 16 grid squares using for loop
function generateGrid(gridsize) {

    let size = Math.floor(window.screen.width / gridsize) + "px";

    for (let i = 0; i < gridsize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');

        for (let x = 0; x < gridsize; x++) {
            let gridsquare = document.createElement('div');
            gridsquare.classList.add('gridsquare');
            row.appendChild(gridsquare);
            gridsquare.addEventListener("mouseenter", function () {

                let red = Math.floor(Math.random() * 256) + 1;
                let blue = Math.floor(Math.random() * 256) + 1;
                let green = Math.floor(Math.random() * 256) + 1;

                this.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
            });
        }

        body.appendChild(row)
    }

    let gridsquares = document.getElementsByClassName("gridsquare")

    for (let i = 0; i < gridsquares.length; i++) {
        gridsquares[i].style.width = size;
        gridsquares[i].style.height = size;
    }
}


let button = document.querySelector("button")
button.addEventListener("click", function () {

    let gridsize = prompt("Please enter the size of the grid (1-100): ")
    generateGrid(gridsize)

})

