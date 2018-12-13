

let rows : number = 4; //rows
let columns: number = 4; //columns
let matrix: number[][]= [
  [1,1,0,0],
  [0,1,1,0],
  [0,0,1,0],
  [1,0,0,0]
];

// Prints the matrix
console.log(matrix.join('\n'));

function getMaxNoCells( matrix: number[][]) {
  let maxCount = 0;
  for(let n = 0; n <= rows; n++) {
    for(let m = 0; m <= columns; m++) {
      let noCells = countConnectedCells(n,m,rows,columns);
      maxCount = noCells > maxCount ? noCells : maxCount;
    }
  }
  return maxCount;
}

function countConnectedCells(row: number, column: number, rows: number, columns: number ): number{
  if(row < 0 || column < 0 || row >= rows || column >= columns) {
      return 0;
  }
  if (matrix[row][column] === 0 || matrix[row][column] === -1) {
      return 0;
  }
  matrix[row][column] = -1; // considered counted
  return 1 +
    countConnectedCells(row, column + 1, rows, columns) +
    countConnectedCells(row, column - 1, rows, columns) +
    countConnectedCells(row +1 , column - 1, rows, columns) +
    countConnectedCells(row +1 , column, rows, columns) +
    countConnectedCells(row +1 , column + 1, rows, columns) +
    countConnectedCells(row -1, column - 1, rows, columns) +
    countConnectedCells(row -1, column, rows, columns) +
    countConnectedCells(row -1, column + 1, rows, columns);
}

console.log(getMaxNoCells(matrix))
