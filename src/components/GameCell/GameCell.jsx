import React, { useContext, useEffect } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";

function GameCell({ cellItem, index }) {
  const { game, updateBoard, setWinner } = useContext(GameContext);

  useEffect(() => {
    const winner = checkForWinner(game.board);
    if (winner && !game.gameOver) {
      setWinner(winner);
    }
  }, [game.board, game.gameOver, setWinner]);

  const cellClickHandler = () => {
    if (!game.gameOver && cellItem === null) {
      updateBoard(index);
    }
  };

  const renderContent = () => {
    if (cellItem === "x") {
      return (
        <svg viewBox="0 0 64 64" width="100%" height="100%">
          <path
            d="M15 15L49 49M49 15L15 49"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>
      );
    } else if (cellItem === "o") {
      return (
        <svg viewBox="0 0 64 64" width="100%" height="100%">
          <circle
            cx="32"
            cy="32"
            r="20"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
          />
        </svg>
      );
    } else {
      return (
        <div className="outlineIcon">
          {game.turn === "x" ? (
            <svg viewBox="0 0 64 64" width="100%" height="100%">
              <path
                d="M15 15L49 49M49 15L15 49"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.3"
              />
            </svg>
          ) : (
            <svg viewBox="0 0 64 64" width="100%" height="100%">
              <circle
                cx="32"
                cy="32"
                r="20"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
            </svg>
          )}
        </div>
      );
    }
  };

  return (
    <CellStyle
      onClick={cellClickHandler}
      disabled={cellItem !== null || game.gameOver}
    >
      {renderContent()}
    </CellStyle>
  );
}

export default GameCell;
