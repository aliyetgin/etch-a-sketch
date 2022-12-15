const container = document.querySelector(".grid-container");


const createGrid = (col, row) => {
        for (let i = 0; i < (col * row); i++) {
                const sqr = document.createElement("div");
                sqr.classList.add("square");
                container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
                container.style.gridTemplateRows = `repeat(${row}, 1fr)`;
                container.append(sqr);
        }

        
}

const addColor = () => {
        const squares = document.querySelectorAll(".square"); 
        squares.forEach(square => {
                square.addEventListener('mouseover', (e) => {
                square.style.backgroundColor = "#161616";
        })
        }); 
}

createGrid(16, 16);
addColor();


function newColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
    
        return `rgb(${r}, ${g}, ${b})`;  
}

const resize = document.querySelector(".resize");
resize.addEventListener("click", btn => {
       const size = prompt("Enter size of your new grid: (if you want 64x64 enter 64)");
       container.textContent = '';
       const footerSizeText = document.querySelector(".footer p");
       footerSizeText .textContent = `Current size of the board: ${size}x${size}`;
       createGrid(size, size);
       addColor(); 
});

const randColor = document.querySelector(".rand");
randColor.addEventListener("click", btn => {
        const squares = document.querySelectorAll(".square"); 
        squares.forEach(square => {
                squares.forEach(square => {   
                        square.style.backgroundColor = "#FFFFFF";
        }); 
                square.addEventListener('mouseover', (e) => {
                square.style.backgroundColor = newColor();
        })
        }); 
})



const reset = document.querySelector(".reset");
reset.addEventListener("click", btn => {
        const squares = document.querySelectorAll(".square"); 
        squares.forEach(square => {   
                square.style.backgroundColor = "#FFFFFF";
}); 
})

