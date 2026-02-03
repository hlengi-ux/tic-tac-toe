import { useState, createContext } from "react";

export const GameContext = createContext({});

export const GameContextProvider = (props) => {
  const [game, setGame] = useState({
    board: [null, null, null, null, null, null, null, null, null],
    player1: {
      choice: "x",
      name: "Hlengi",
    },
    player2: {
      choice: "o",
      name: "Nkosi",
    },
    turn: "x",
    winner: null,
    gameOver: false,
  });

  const updateBoard = (index) => {
    if (game.board[index] !== null || game.gameOver) {
      return;
    }

    const updatedBoard = [...game.board];
    updatedBoard[index] = game.turn;

    setGame({
      ...game,
      board: updatedBoard,
      turn: game.turn === "x" ? "o" : "x",
    });
  };

  const setWinner = (winner) => {
    setGame({
      ...game,
      winner: winner,
      gameOver: true,
    });
  };

  const resetGame = () => {
    setGame({
      ...game,
      board: [null, null, null, null, null, null, null, null, null],
      turn: "x",
      winner: null,
      gameOver: false,
    });
  };

  return (
    <GameContext.Provider value={{ game, updateBoard, setWinner, resetGame }}>
      {props.children}
    </GameContext.Provider>
  );
};
