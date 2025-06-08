// Description:
// Connect Four is a game in which two players take turns dropping red or yellow colored discs into a vertically suspended 7 x 6 grid. Discs fall to the bottom of the grid, occupying the next available space.

// A player wins by connecting four of their discs horizontally, vertically or diagonally.

// Given a multidimensional array representing a Connect Four board, your task is to create a function which can determine who won the game.

// Your connectFour function will be passed an array matrix similar to this:

// [['-','-','-','-','-','-','-'],
//  ['-','-','-','-','-','-','-'],
//  ['-','-','-','R','R','R','R'],
//  ['-','-','-','Y','Y','R','Y'],
//  ['-','-','-','Y','R','Y','Y'],
//  ['-','-','Y','Y','R','R','R']];
// 'R' represents a red disc

// 'Y' represents a yellow disc

// '-' represents an unoccupied space

// In this example the red player won by making a horizontal line of 4 red discs.

// If the red player won, your connectFour function should return 'R'. If the yellow player won, it should return 'Y'. If the board is full and no one won it should return 'draw'. If the game is still in progress it should return 'in progress'.

// You can learn more about how Connect Four is played here: http://en.wikipedia.org/wiki/Connect_Four function connectFour(board) {
//   // Your code goes here
// }

function connectFour(board) {
    const rows = board.length;
    const cols = board[0].length;

    // Function to check if there are four in a row from (row, col)
    function checkDirection(row, col, dRow, dCol) {
        const color = board[row][col];
        if (color === '-') return false;

        for (let i = 1; i < 4; i++) {
            const newRow = row + dRow * i;
            const newCol = col + dCol * i;
            // Check boundaries and color match
            if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols || board[newRow][newCol] !== color) {
                return false;
            }
        }
        return true;
    }

    // Check each cell in the board
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] !== '-') {
                // Check all directions
                if (
                    checkDirection(row, col, 0, 1) || // Horizontal
                    checkDirection(row, col, 1, 0) || // Vertical
                    checkDirection(row, col, 1, 1) || // Diagonal down-right
                    checkDirection(row, col, 1, -1)   // Diagonal down-left
                ) {
                    return board[row][col]; // Return the winner
                }
            }
        }
    }

    // Check if the board is full or still in progress
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (board[row][col] === '-') {
                return 'in progress'; // There are still moves left
            }
        }
    }

    return 'draw'; // No winners and no empty spaces
}

//other solutions
function connectFour(board) {
  let boardStr = board.map(line => line.join('')).join(' ');
  var m = [/(\w)\1\1\1/,
           /(\w).{7}\1.{7}\1.{7}\1/,
           /(\w).{8}\1.{8}\1.{8}\1/,
           /(\w).{6}\1.{6}\1.{6}\1/]
           .reduce((m, re) => m || boardStr.match(re), null);
  return m ? m[1] : boardStr.replace('-', '') == boardStr ? 'draw' : 'in progress';
}



