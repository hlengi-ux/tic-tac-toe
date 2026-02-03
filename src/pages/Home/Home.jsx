import React from "react";
import { Container, Title, Subtitle } from "../../styles/General.styled";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>TicTacToe</Title>
      <Subtitle>Get ready to play, higher score Wins!!</Subtitle>
      <Button onClick={() => navigate("/game-on")}>Play Now</Button>
      <Button onClick={() => navigate("/details")}>How to Play</Button>
    </Container>
  );
}

export default Home;
