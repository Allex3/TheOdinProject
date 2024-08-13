const container = document.querySelector(".container");

const divInGrid = document.createElement("div");
const gridLine = document.createElement("div");

divInGrid.classList.toggle("squareDivInGrid");
gridLine.classList.toggle("gridLine");
//added the css classes for styling 

for (let i=0; i<16; i++) //16 squares on the grid line
{
    const divClone = divInGrid.cloneNode(true);
    if (i==0) divClone.classList.toggle("leftBorder");
    if (i==15) divClone.classList.toggle("rightBorder");
    gridLine.appendChild(divClone);
}

//now add the 16 lines to the main container div 
for (let i=0; i<16; i++) {
    const lineClone = gridLine.cloneNode(true);
    if (i==0) lineClone.classList.toggle("topBorder");
    if (i==15) lineClone.classList.toggle("bottomBorder"); 
    container.appendChild(lineClone); 
}

//leftBorder, etc. are classes for the remained border on top, left, bottom, right
//because the borders intertwined at the other div squares, on those at the edges they don't
//so the borders remain thinner

//first time using cloneNode, didn't know I couldn't append it directly multiple times
//but it's ONE node created so it makes sense... it's a reference
