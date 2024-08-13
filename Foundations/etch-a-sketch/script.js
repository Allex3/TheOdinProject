const container = document.querySelector(".container");

const divInGrid = document.createElement("div");
const gridLine = document.createElement("div");

for (let i=0; i<16; i++) //16 squares on the grid line
    gridLine.appendChild(divInGrid);

//now add the 16 lines to the main container div 
for (let i=0; i<16; i++)
    container.appendChild(gridLine); 

