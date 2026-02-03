import React, { useContext, useEffect, useState } from "react";
import { Container } from "../../styles/General.styled";
import {
  GameBoardStyle,
  GameInfo,
  ScoreBoard,
  WinnerModal,
  Overlay,
} from "./Game.styled";
import GameCell from "../../components/GameCell/GameCell";
import { GameContext } from "../../contexts/GameContext";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Game() {
  const { game, resetGame } = useContext(GameContext);
  const navigate = useNavigate();

  const [scores, setScores] = useState({
    x: 0,
    o: 0,
    draws: 0,
  });

  useEffect(() => {
    if (game.gameOver && game.winner) {
      if (game.winner === "x") {
        setScores((prev) => ({ ...prev, x: prev.x + 1 }));
      } else if (game.winner === "o") {
        setScores((prev) => ({ ...prev, o: prev.o + 1 }));
      } else if (game.winner === "draw") {
        setScores((prev) => ({ ...prev, draws: prev.draws + 1 }));
      }
    }
  }, [game.gameOver, game.winner]);

  const getPlayerName = (choice) => {
    if (choice === "x") return game.player1.name;
    if (choice === "o") return game.player2.name;
    return "";
  };

  const handleNewRound = () => {
    resetGame();
  };

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <Container>
      <ScoreBoard>
        <div className="score-item player-x">
          <div className="label">Player 1</div>
          <h3>{game.player1.name} (X)</h3>
          <p>{scores.x}</p>
        </div>
        <div className="score-item draws">
          <div className="label">Ties</div>
          <h3>Draws</h3>
          <p>{scores.draws}</p>
        </div>
        <div className="score-item player-o">
          <div className="label">Player 2</div>
          <h3>{game.player2.name} (O)</h3>
          <p>{scores.o}</p>
        </div>
      </ScoreBoard>

      <GameInfo>
        {!game.gameOver && (
          <p>
            Current Turn: {getPlayerName(game.turn)} ({game.turn.toUpperCase()})
          </p>
        )}
      </GameInfo>

      <GameBoardStyle>
        {game.board.map((item, index) => (
          <GameCell key={index} cellItem={item} index={index} />
        ))}
      </GameBoardStyle>

      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <Button onClick={handleNewRound}>New Round</Button>
        <Button onClick={handleBackHome}>Back to Home</Button>
      </div>

      {game.gameOver && (
        <>
          <Overlay onClick={handleNewRound} />
          <WinnerModal>
            <h2>Round Over!</h2>
            {game.winner === "draw" ? (
              <p>It's a Draw!</p>
            ) : (
              <p>{getPlayerName(game.winner)} Wins!</p>
            )}
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <Button onClick={handleNewRound}>Next Round</Button>
              <Button onClick={handleBackHome}>Exit Game</Button>
            </div>
          </WinnerModal>
        </>
      )}
    </Container>
  );
}

export default Game;
