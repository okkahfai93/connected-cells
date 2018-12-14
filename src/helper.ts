let matrix: number[][];

export function getMaxNoCells( m: number[][]) {
  let maxCount = 0;
  matrix = m;
  let rows = matrix.length;
  let columns = matrix[0].length;
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
