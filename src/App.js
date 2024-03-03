import { useState } from "react";
import "./App.css"
import { calculateWinner, isDraw } from "./ticTacToeFunctions"
import { useXIsNext } from "./useXIsNext";

// ルール
// 3*3の9マスのボードで遊ぶ　✅
// 先行は○で後攻がX ✅
// 交互に○とxを置いていき、一列並べたら勝利 ✅

function Square({ value, handleClick }) {
  console.log(value)
  return (
    <button className="square" onClick={handleClick}>{value}</button>
  )
}

export default function Board() {

  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useXIsNext(false);

  const handleClick = (i) => {

    if (square[i] || calculateWinner(square)) return
    const squareBak = square.slice()

    squareBak[i] = xIsNext ? 'X' : '○';

    // if (xIsNext) {
    //   squareBak[i] = 'X';
    // } else {
    //   squareBak[i] = '○';
    // }

    setSquare(squareBak)
    setXIsNext(!xIsNext)
  }
  const reset = () => {
    setSquare(Array(9).fill(null))
    setXIsNext(false)
  }

  return (
    <>
      {!calculateWinner(square) &&
        <label>次は{xIsNext ? 'X' : '○'}です</label>
      }

      {/* <div className="board-row">
        {square.map((v, i) => (
          <Square value={v} handleClick={() => handleClick(i)} />
        ))}
      </div> */}

      <div className="board-row">
        <Square value={square[0]} handleClick={() => handleClick(0)} />
        <Square value={square[1]} handleClick={() => handleClick(1)} />
        <Square value={square[2]} handleClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={square[3]} handleClick={() => handleClick(3)} />
        <Square value={square[4]} handleClick={() => handleClick(4)} />
        <Square value={square[5]} handleClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={square[6]} handleClick={() => handleClick(6)} />
        <Square value={square[7]} handleClick={() => handleClick(7)} />
        <Square value={square[8]} handleClick={() => handleClick(8)} />
      </div>

      {calculateWinner(square) &&
        <>
          <h1>勝ったのは{calculateWinner(square)}です。</h1>
          <button onClick={reset}>もう一度遊ぶ</button>
        </>
      }
      {isDraw(square, calculateWinner(square)) &&
        <>
          <h1>引き分けです。</h1>
          <button onClick={reset}>もう一度遊ぶ</button>
        </>
      }
    </>
  );
}
