function createGrid(rows, cols) {
    return Array.from({ length: rows }, () => Array(cols).fill(0));
}

function createRandomGrid(rows, cols) {
    return Array.from({ length: rows }, () => Array(cols).fill(0).map(() => Math.random() > 0.7 ? 1 : 0));
}

function setupGrid(table, grid) {
    table.innerHTML = "";
    grid.forEach((row, i) => {
        const tr = document.createElement("tr");
        row.forEach((cell, j) => {
            const td = document.createElement("td");
            td.dataset.row = i;
            td.dataset.col = j;
            td.addEventListener("click", () => toggleCell(grid, td));
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    updateGrid(table, grid);
}

function toggleCell(grid, cell) {
    const row = cell.dataset.row;
    const col = cell.dataset.col;
    grid[row][col] = grid[row][col] ? 0 : 1; 
    updateCell(cell, grid[row][col]); 
}

function updateGrid(table, grid) {
    document.querySelectorAll("td").forEach(td => {
        const row = parseInt(td.dataset.row);
        const col = parseInt(td.dataset.col);
        updateCell(td, grid[row][col]);
    });
}

function updateCell(cell, state) {
    if (state === 1) {
        cell.style.backgroundColor = "yellow";  
    } else {
        cell.style.backgroundColor = "white";  
    }
}

function nextGeneration(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const newGrid = createGrid(rows, cols);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const neighbors = countNeighbors(grid, i, j);
            if (grid[i][j] && (neighbors == 2 || neighbors === 3) || (!grid[i][j] && neighbors == 3)) {
                newGrid[i][j] = 1;  
            } else {
                newGrid[i][j] = 0;  
            }
        }
    }
    return newGrid;
}

function countNeighbors(grid, x, y) {
    let count = 0;
    const directions = [-1, 0, 1];

    directions.forEach(dx => {
        directions.forEach(dy => {
            if (dx === 0 && dy === 0) return; 
            const newX = x + dx;
            const newY = y + dy;
            if (newX >= 0 && newX < grid.length && newY >= 0 && newY < grid[0].length) {
                count += grid[newX][newY]; 
            }
        });
    });

    return count;
}
