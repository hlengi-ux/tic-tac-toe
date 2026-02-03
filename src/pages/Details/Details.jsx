import React from "react";
import { Container, Title, Subtitle } from "../../styles/General.styled";
import { DetailsWrapper, RulesSection, Rule } from "./Details.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Details() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>How to Play</Title>
      <Subtitle>Master the game of Tic Tac Toe!</Subtitle>

      <DetailsWrapper>
        <RulesSection>
          <h2>Game Rules</h2>
          <Rule>
            <span className="number">1</span>
            <div>
              <h3>Take Turns</h3>
              <p>
                Two players take turns marking spaces in a 3×3 grid. Player 1
                uses X, and Player 2 uses O.
              </p>
            </div>
          </Rule>

          <Rule>
            <span className="number">2</span>
            <div>
              <h3>Get Three in a Row</h3>
              <p>
                The first player to get 3 of their marks in a row (horizontally,
                vertically, or diagonally) wins the round.
              </p>
            </div>
          </Rule>

          <Rule>
            <span className="number">3</span>
            <div>
              <h3>Score Points</h3>
              <p>
                Each win earns you 1 point. The player with the highest score
                after multiple rounds is the ultimate winner!
              </p>
            </div>
          </Rule>

          <Rule>
            <span className="number">4</span>
            <div>
              <h3>Draw</h3>
              <p>
                If all 9 squares are filled and no player has three in a row,
                the round is a draw. No points are awarded.
              </p>
            </div>
          </Rule>
        </RulesSection>

        <RulesSection>
          <h2>Winning Combinations</h2>
          <div style={{ marginTop: "1.5rem" }}>
            <p>You can win by getting three in a row:</p>
            <ul>
              <li>✓ Horizontal: Top, middle, or bottom row</li>
              <li>✓ Vertical: Left, middle, or right column</li>
              <li>✓ Diagonal: Top-left to bottom-right</li>
              <li>✓ Diagonal: Top-right to bottom-left</li>
            </ul>
          </div>
        </RulesSection>

        <RulesSection>
          <h2>Strategy Tips</h2>
          <div style={{ marginTop: "1.5rem" }}>
            <ul>
              <li>Start in the center for the best advantage</li>
              <li>Always block your opponent's winning moves</li>
              <li>Create two winning threats at once (a "fork")</li>
              <li>Watch for your opponent trying to create a fork</li>
            </ul>
          </div>
        </RulesSection>
      </DetailsWrapper>

      <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
        <Button onClick={() => navigate("/game-on")}>Start Playing</Button>
        <Button onClick={() => navigate("/")}>Back to Home</Button>
      </div>
    </Container>
  );
}

export default Details;
