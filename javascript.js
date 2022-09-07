const sketchArea = document.querySelector('.etchASketch');
const gridOut = createEle(sketchArea,'div',' ','grid-frame')
const gridSize = "960";
//const sketch = {x:16, y:16};

createGrid(16*16);

function createGrid(total){
    for (let i=0; i<total; i++){
        const temp = createEle(gridOut,'div', `${i+1}`,'grid');
    }
    gridOut.style.setProperty(`grid-template-columns`, `repeat(${Math.sqrt(total)},1fr)`)
    var box = document.querySelectorAll('.grid');
    box.forEach(elem => elem.addEventListener('mouseover', hoverOn, false));
    let gridCalc = gridSize / Math.sqrt(total);
    box.forEach(elem => elem.setAttribute('style', `width: ${gridCalc}px; height: ${gridCalc}px`));
}
    

function createEle(parent, eleType, html, eleClass){
    const ele = document.createElement(eleType);
    //ele.innerHTML = html;
    ele.classList.add(eleClass);
    return parent.appendChild(ele);
    
}


//box.addEventListener('mouseovut', hoverOff, false);

function hoverOn(){
    this.classList.add('hoverOn')
}

function hoverOff(){
    box.setAttribute('style', 'background-color: white')
}

const resizeBtn = document.getElementById('resize');
resizeBtn.addEventListener('click', resizeGrid);

const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click',  clearGrid());

function clearGrid(){
    var box = document.querySelectorAll('div');
    box.forEach(elem => elem.classList.remove('hoverOn'));
}

function resizeGrid(){
    let newSize = prompt("What size grid would you like?", "16");
    let newSizeInt = parseInt(newSize, 10);
    if (0 < newSizeInt < 100){
        document.querySelectorAll(".grid").forEach(el => el.remove());
        createGrid(newSizeInt*newSizeInt);
    } else {
        alert('Please enter a number between 0 and 100.')
    }

}

