import { useState } from "react";

function LudoBoard() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 });

  return (
    <div className="flex flex-col items-center m-10 ">
      <p className="text-4xl">Game begins!</p>

      <div className="flex flex-col m-4">
        <p>blue moves = {moves.blue}</p>
        <button
          className="border border-black bg-blue-400"
          onClick={() => {
            moves.blue += 1;
            setMoves({ ...moves });
            console.log(moves.blue);
          }}
        >
          +1
        </button>

        <p>yellow moves = {moves.yellow}</p>
        <button
          className="border border-black bg-yellow-400"
          onClick={() => {
            setMoves({ ...moves, yellow: moves.yellow + 1 });
            console.log(moves.yellow);
          }}
        >
          +1
        </button>

        <p>Red moves = {moves.red}</p>
        <button
          className="border border-black bg-red-400"
          onClick={() => {
            setMoves({ ...moves, red: moves.red + 1 });
            console.log(moves.red);
          }}
        >
          +1
        </button>

        <p>Green moves = {moves.green} </p>
        <button
          className="border border-black bg-green-400"
          onClick={() => {
            setMoves({ ...moves, green: moves.green + 1 });
            console.log(moves.green);
          }}
        >
           +1
        </button>
      </div>
    </div>
  );
}

export default LudoBoard;
