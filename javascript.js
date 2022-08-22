const sketchArea = document.querySelector('.etchASketch');
const gridOut = createEle(sketchArea,'div',' ','grid-frame')
const sketch = {x:16, y:16};

createGrid();

function createGrid(){
    const total = sketch.x * sketch.y;
    for (let i=0; i<total; i++){
        const temp = createEle(gridOut,'div', `${i+1}`,'grid');
    }
    gridOut.style.setProperty(`grid-template-columns`, `repeat(${sketch.y},1fr)`)
}
    

function createEle(parent, eleType, html, eleClass){
    const ele = document.createElement(eleType);
    ele.innerHTML = html;
    ele.classList.add(eleClass);
    return parent.appendChild(ele);
}

/*function createGrid(col, row){
    for(let i=0; i<col; i++){
        const grid = document.getElementById('grid-frame')
        const createCol = document.createElement('div');
        createCol.className = 'grid';
        
        for(let j=0; j<row; j++){
            const createRow = document.createElement('div');
            createRow.className = 'grid';
            createCol.appendChild(createRow);
            document.body.appendChild(document.getElementById('grid-frame'));
        }
        grid.appendChild(createCol);
        
    }
    
}
//createGrid(16,16);

function gridCreate (col, row){
    const grid = document.getElementById('grid-frame');
    grid.style.gridTemplateColumns = `repeat(${col}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${row}, 1fr)`
    
}

gridCreate(16,16);*/