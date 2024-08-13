const container = document.querySelector(".container");

const divInGrid = document.createElement("div");
const gridLine = document.createElement("div");

divInGrid.classList.toggle("squareDivInGrid");
gridLine.classList.toggle("gridLine");
//added the css classes for styling

//the function for creating the grid

function removeGrid() {
    //remove the current grid from the page 
    const currGridLines = document.querySelectorAll(".gridLine"); //reference to all the grid lines
    currGridLines.forEach( (line) => {
        container.removeChild(line); //remove the line from the main div container
    })
    
    //now remove the current children from the const gridLine variable that are the squares of the last grid
    while (gridLine.firstChild) { //when false it doesn't have any children left
        gridLine.removeChild(gridLine.firstChild);
    }

}

function createGrid(sideSize) {
    //create clones of main variables for gridLine
    for (let i = 0; i < sideSize; i++) {
        //sideSize squares on the grid line

        const divClone = divInGrid.cloneNode(true);
        if (i == 0) divClone.classList.toggle("leftBorder");
        if (i == sideSize - 1) divClone.classList.toggle("rightBorder");
        //set their width
        divClone.style.width = `${800/sideSize}px`;
        divClone.style.height = `${800/sideSize}px`;


        gridLine.appendChild(divClone);
    }

    //now add the sizeSize lines to the main container div
    for (let i = 0; i < sideSize; i++) {
        const lineClone = gridLine.cloneNode(true);
        if (i == 0) lineClone.classList.toggle("topBorder");
        if (i == sideSize - 1) lineClone.classList.toggle("bottomBorder");

        

        container.appendChild(lineClone);
    }

    //now let's actually add events
    //(i tried adding events to created divs
    //but I think events can only be added once they are on the DOM? cuz it didn't work)

    const squares = document.querySelectorAll(".squareDivInGrid");
    squares.forEach((square) => {
        square.addEventListener("mouseover", (e) =>
            e.target.classList.add("hovered")
        );
    });

    //ok now it actually works so they have to be on the DOM first..
}

//leftBorder, etc. are classes for the remained border on top, left, bottom, right
//because the borders intertwined at the other div squares, on those at the edges they don't
//so the borders remain thinner

//first time using cloneNode, didn't know I couldn't append it directly multiple times
//but it's ONE node created so it makes sense... it's a reference
const selectGrid = document.querySelector("#selectGrid");
selectGrid.addEventListener("click", () => {
    let sideSize = parseInt(
        prompt(
            "How many squares should a line of the grid have? The grid is a square, so on the sides it will have the same number of squares."
        )
    );
    if (sideSize>100) {
        alert("Select a value smaller than or equal to 100.");
        return;
    }
    removeGrid();
    createGrid(sideSize);
});
