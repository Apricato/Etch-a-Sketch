const container = document.querySelector(".container")


container.addEventListener("mouseover", (event) => {
    if (event.target.classList.contains("cellStyle")){
        event.target.style.backgroundColor = getRandomColor();
    }
}) 


function getRandomColor(){
    const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    return color;
}



function generateCell(cellInput){

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const cellSize = Math.min(containerWidth, containerHeight) / cellInput;

    for (let i = 0; i < cellInput; i++) {
        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.width = "100%";
        row.style.height = `${cellSize}px`

        container.appendChild(row);

        for (let k = 0; k < cellInput; k++) {
            const cell = document.createElement("div");
            cell.classList.add("cellStyle");
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            row.appendChild(cell);
        }
    }
     
    

}



const clickButton = document.querySelector("button")
clickButton.addEventListener("click", () => {
    const gridSize = prompt ("Enter size of square grid :" , 16);
    if (gridSize <= 0 &&  gridSize >100 ){
        alert("Please enter a valid number between 1 and 100.");
    } else {
        currentGridSize = gridSize;
        container.innerHTML = "";
        generateCell(gridSize)
    }
})

generateCell(16);

window.addEventListener("resize", () => {
    console.log("yti")
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const cellSize = Math.min(containerWidth, containerHeight) / currentGridSize;

    const rows = container.querySelectorAll("div");
    rows.forEach(row => {
        row.style.height = `${cellSize}px`;
        const cells = row.querySelectorAll(".cellStyle");
        cells.forEach(cell => {
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
        });
    });
});