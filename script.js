const container =  document.querySelector("#container");

const newGridInputBtn = document.createElement("button");
const gridContainer = document.createElement("div");

container.style["text-align"] = "center";

newGridInputBtn.textContent = "New Grid Size"
newGridInputBtn.style.margin = "2%";
container.appendChild(newGridInputBtn);
gridContainer.classList.add("grid-container");
gridContainer.classList.add("flex-container");


let numberOfGrid = 16;

newGridInputBtn.addEventListener('click',() => {
    let userInput = prompt("Give new number of grid greater than 1:");
    let userInputInNumber = Number(userInput);
    if(Number.isInteger(userInputInNumber) && userInputInNumber > 1){
        numberOfGrid = userInputInNumber;
        removeGrid();
        render();
    }else {
        alert("Please enter a valid number");
    }
})

function removeGrid() {
    const gridDivList = document.querySelectorAll(".grid-container div");
    const gridDivArray = Array.from(gridDivList);
    gridDivArray.forEach(item => item.remove());
}

function getRandomColorValue(){
    let generatedValue = Math.random() * 256;
    let roundedValue = Math.floor(generatedValue); // rounds down the generated number
    return roundedValue;
}

const render = () => {
    // Initializing current page viewport width for the calculation of grids
    let viewportWidth = self.innerWidth;
    // base gap size is total gap allocated to be used between grids
    let baseGapSize = viewportWidth / numberOfGrid;
    // base grid size is total gap allocated to be used for the grid size
    let baseGridSize = baseGapSize * (numberOfGrid -1);

    let gridSize = baseGridSize / (numberOfGrid + 1);
    let totalGrid = Math.pow(numberOfGrid, 2);

    gridContainer.style.gap = `${(baseGapSize)/(numberOfGrid -1)}px`;
    container.appendChild(gridContainer);

    for( let i = 1; i <= totalGrid; i++) {
        const gridSquareDiv = document.createElement("div");
        gridSquareDiv.style.color = "red";
        gridSquareDiv.style["border-width"] = "1px";
        gridSquareDiv.style["border-style"] = "solid";
        gridSquareDiv.style["border-color"] = "black";
        gridSquareDiv.style["width"] = `${gridSize}px`
        gridSquareDiv.style["height"] = `${gridSize}px`
        
        gridContainer.appendChild(gridSquareDiv);

        gridSquareDiv.addEventListener('mouseenter',() => {
            gridSquareDiv.style["background-color"] = 
                `rgba(${getRandomColorValue()},
                ${getRandomColorValue()},
                ${getRandomColorValue()},
                ${getRandomColorValue()})`;
        });
    }
}

render();