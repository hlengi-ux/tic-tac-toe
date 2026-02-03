import styled from "styled-components";

export const GameBoardStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
`;

export const GameInfo = styled.div`
  text-align: center;
  color: ${(props) => props.theme.colors.text};
  margin: 1rem 0;

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.purple};
    font-weight: 600;
  }
`;

export const ScoreBoard = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 2rem;
  width: 100%;
  max-width: 700px;

  .score-item {
    background-color: ${(props) => props.theme.colors.secondary};
    border: 3px solid ${(props) => props.theme.colors.purple};
    border-radius: 15px;
    padding: 1.5rem 2rem;
    text-align: center;
    flex: 1;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(139, 92, 246, 0.4);
    }

    &.draws {
      border-color: ${(props) => props.theme.colors.accent};
    }

    &.player-x {
      border-color: #10b981;
    }

    &.player-o {
      border-color: #f59e0b;
    }

    .label {
      color: ${(props) => props.theme.colors.text};
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 600;
      opacity: 0.7;
      margin-bottom: 0.3rem;
    }

    h3 {
      color: ${(props) => props.theme.colors.text};
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }

    p {
      color: ${(props) => props.theme.colors.purple};
      font-size: 2.5rem;
      font-weight: 700;
      margin: 0;
    }

    &.player-x p {
      color: #10b981;
    }

    &.player-o p {
      color: #f59e0b;
    }

    &.draws p {
      color: ${(props) => props.theme.colors.accent};
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;

    .score-item {
      padding: 1rem;

      .label {
        font-size: 0.65rem;
      }

      h3 {
        font-size: 0.9rem;
      }

      p {
        font-size: 2rem;
      }
    }
  }
`;

export const WinnerModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
  text-align: center;
  z-index: 1000;
  border: 3px solid ${(props) => props.theme.colors.purple};

  h2 {
    color: ${(props) => props.theme.colors.text};
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme.colors.purple};
    font-size: 1.8rem;
    margin-bottom: 2rem;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    width: 90%;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`;
