// Description:
// Connect Four
// Take a look at wiki description of Connect Four game:

// Wiki Connect Four

// The grid is 6 row by 7 columns, those being named from A to G.

// You will receive a list of strings showing the order of the pieces which dropped in columns:

//   piecesPositionList = ["A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "A_Red",
//                         "B_Yellow",
//                         "G_Red",
//                         "B_Yellow"]
// The list may contain up to 42 moves and shows the order the players are playing.

// The first player who connects four items of the same color is the winner.

// You should return "Yellow", "Red" or "Draw" accordingly.

function whoIsWinner(piecesPositionList) {
    // Initialize a 6x7 grid
    const rows = 6;
    const cols = 7;
    const board = Array.from({ length: rows }, () => Array(cols).fill(null));

    // Map columns A-G to indices 0-6
    const columnMap = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6 };

    // Function to check for a win
    const checkWin = (row, col, player) => {
        const directions = [
            { x: 1, y: 0 },  // horizontal
            { x: 0, y: 1 },  // vertical
            { x: 1, y: 1 },  // diagonal \
            { x: 1, y: -1 }  // diagonal /
        ];

        for (const { x, y } of directions) {
            let count = 1;

            // Check in one direction
            for (let i = 1; i < 4; i++) {
                const newRow = row + y * i;
                const newCol = col + x * i;
                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && board[newRow][newCol] === player) {
                    count++;
                } else {
                    break;
                }
            }

            // Check in the opposite direction
            for (let i = 1; i < 4; i++) {
                const newRow = row - y * i;
                const newCol = col - x * i;
                if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && board[newRow][newCol] === player) {
                    count++;
                } else {
                    break;
                }
            }

            if (count >= 4) {
                return true;
            }
        }
        return false;
    };

    // Process each move
    for (const move of piecesPositionList) {
        const [column, color] = move.split('_');
        const colIndex = columnMap[column];
        
        // Find the next available row in the column
        for (let row = rows - 1; row >= 0; row--) {
            if (board[row][colIndex] === null) {
                board[row][colIndex] = color; // Place the piece
                // Check for a win
                if (checkWin(row, colIndex, color)) {
                    return color; // Return the winner
                }
                break; // Move to the next piece
            }
        }
    }

    return "Draw"; // If no winner after all moves
}

//other solution
function whoIsWinner(piecesPositionList){
    dict = {A: 35, B: 36, C: 37, D: 38, E: 39, F: 40, G:41};
     res = new Array(42).fill("-");
     for(s of piecesPositionList){
       res[dict[s[0]]] = s[2];
       dict[s[0]] -= 7;
       if(/((R.{6}){3}R)|(^((.{0,3}|.{7,10}|.{14,17}|.{21,24}|.{28,31}|.{35,38})R{4}))|(^((.{3,6}|.{10,13}|.{17,20})(R.{5}){3}R))|(^(.{0,3}|.{7,10}|.{14,17})(R.{7}){3}R)/.test(res.join(""))) return "Red";
       if(/((Y.{6}){3}Y)|(^((.{0,3}|.{7,10}|.{14,17}|.{21,24}|.{28,31}|.{35,38})Y{4}))|(^((.{3,6}|.{10,13}|.{17,20})(Y.{5}){3}Y))|(^(.{0,3}|.{7,10}|.{14,17})(Y.{7}){3}Y)/.test(res.join(""))) return "Yellow";
     }
     return "Draw";
   }