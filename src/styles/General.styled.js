import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.colors.purple},
    ${(props) => props.theme.colors.accent}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.6rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 3rem;
  text-align: center;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
