const container = document.querySelector(".grid-container");


for (let i = 0; i < 256; i++) {
        const sqr = document.createElement("div");
        sqr.classList.add("square");
        container.append(sqr);
}

container.setAttribute("style", "grid-template-columns: repeat(16, 1fr); ");


const squares = document.querySelectorAll(".square");

/* for (square of squares) {
        square.addEventListener('mouseover', (e) => {
                square.style.backgroundColor = newColor();
                console.log(this);
        });
}
 */

squares.forEach(square => {
        square.addEventListener('mouseover', (e) => {
        square.style.backgroundColor = newColor();
})
});

function newColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
    
        return `rgb(${r}, ${g}, ${b})`;  
}


