function createGrid(rows, cols){
    for(let i=0; i<rows; i++){
        const grid = document.getElementById('grid-frame')
        const createRow = document.createElement('div');
        createRow.className = 'row', 'grid';
        
        for(let j=0; j<cols; j++){
            const createCol = document.createElement('div');
            const currentRow = document
            createCol.className = 'cols', 'grid';
            createRow.appendChild(createCol);
        }
        grid.appendChild(createRow);
    }
    document.body.appendChild(document.getElementById('grid-frame'));
}
createGrid(16,16);