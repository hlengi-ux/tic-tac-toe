import styled from "styled-components";

export const DetailsWrapper = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 2rem 0;
`;

export const RulesSection = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  border: 3px solid ${(props) => props.theme.colors.purple};
  border-radius: 15px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

  h2 {
    color: ${(props) => props.theme.colors.text};
    font-size: 2rem;
    margin-bottom: 1.5rem;
    border-bottom: 3px solid ${(props) => props.theme.colors.purple};
    padding-bottom: 0.8rem;
    font-weight: 700;
  }

  p {
    color: ${(props) => props.theme.colors.text};
    line-height: 1.8;
    font-size: 1.1rem;
    font-weight: 500;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      color: ${(props) => props.theme.colors.text};
      padding: 0.8rem 0;
      font-size: 1.15rem;
      font-weight: 500;
      line-height: 1.6;
      border-bottom: 1px solid ${(props) => props.theme.colors.gray};

      &:last-child {
        border-bottom: none;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }

    ul li {
      font-size: 1rem;
    }
  }
`;

export const Rule = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: flex-start;
  padding: 1.5rem;
  background-color: ${(props) =>
    props.theme.colors.background === "#111827"
      ? "rgba(255, 255, 255, 0.05)"
      : "rgba(0, 0, 0, 0.02)"};
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(5px);
    box-shadow: 0 3px 15px rgba(139, 92, 246, 0.2);
  }

  .number {
    background: linear-gradient(
      135deg,
      ${(props) => props.theme.colors.purple},
      ${(props) => props.theme.colors.accent}
    );
    color: white;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
    font-weight: 700;
    flex-shrink: 0;
    box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
  }

  div {
    flex: 1;

    h3 {
      color: ${(props) => props.theme.colors.text};
      font-size: 1.4rem;
      margin-bottom: 0.7rem;
      font-weight: 700;
    }

    p {
      color: ${(props) => props.theme.colors.text};
      line-height: 1.7;
      font-size: 1.1rem;
      margin: 0;
      font-weight: 500;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    padding: 1rem;

    .number {
      width: 45px;
      height: 45px;
      font-size: 1.3rem;
    }

    div h3 {
      font-size: 1.15rem;
    }

    div p {
      font-size: 1rem;
    }
  }
`;
