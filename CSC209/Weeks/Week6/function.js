function createEmptyGrid(rows, cols) {
    const gridArray = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(false);
      }
      gridArray.push(row);
    }
    return gridArray;
}
function renderGrid(){
    gridElement.innerHTML = '';
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            if (grid[i][j]) {
                cell.classList.add('alive');
            }
            cell.addEventListener('click', () => toggleCell(i, j));
            gridElement.appendChild(cell);
        }
    }
}