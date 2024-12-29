const container =  document.querySelector("#container");

container.classList.add("flex-container");

// Initializing current page viewport width for the calculation of grids
let viewportWidth = self.innerWidth;

// base gap size is total gap allocated to be used between grids
let baseGapSize = viewportWidth / 16;

// base grid size is total gap allocated to be used for the grid size
let baseGridSize = baseGapSize * 15;

let gridSize = baseGridSize / 17;

container.style.gap = `${(baseGapSize)/15}px`;

const render = () => {
    for( let i = 1; i <= 256; i++) {
        const gridSquareDiv = document.createElement("div");
        gridSquareDiv.style.color = "red";
        gridSquareDiv.style["border-width"] = "1px";
        gridSquareDiv.style["border-style"] = "solid";
        gridSquareDiv.style["border-color"] = "black";
        gridSquareDiv.style["width"] = `${gridSize}px`
        gridSquareDiv.style["height"] = `${gridSize}px`
        
        container.appendChild(gridSquareDiv);

        gridSquareDiv.addEventListener('mouseenter',() => {
            gridSquareDiv.style["background-color"] = "green";
        });
    }
}

render();