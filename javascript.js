function createGrid(rows, cols){
    for(let i=0; i<rows; i++){
        const createRow = document.createElement('div');
        createRow.classList.add('row', 'grid');
        for(let j=0; j<cols; j++){
            const createCol = document.createElement('div');
            createCol.classList.add('cols', 'grid');
            createRow.appendChild(createCol);
        }
    }
}
createGrid(16,16);