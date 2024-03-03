export function calculateWinner(square) {
    const winLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    for (let i = 0; i < winLines.length; i++) {
        const [a, b, c] = winLines[i]

        if (square[a] && square[a] === square[b] && square[a] === square[c]) {
            return square[a]
        }
    }
    return null
}

export function isDraw(square, winner) {

    if (winner) return false

    for (let i = 0; i < square.length; i++) {
        if (square[i] === null) return false
    }
    return true
}