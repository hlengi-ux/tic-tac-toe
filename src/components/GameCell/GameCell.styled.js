import styled from "styled-components";

export const CellStyle = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  font-size: 3rem;
  height: 8rem;
  width: 8rem;
  border: none;
  border-radius: 8px;
  box-shadow: 5px 10px ${(props) => props.theme.colors.gray};
  cursor: pointer;
  padding: 1rem;
  transition: all 0.2s ease;

  &:disabled {
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 5px 12px ${(props) => props.theme.colors.gray};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 3px 8px ${(props) => props.theme.colors.gray};
  }

  svg {
    width: 100%;
    height: 100%;
  }

  .outlineIcon {
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover:not(:disabled) .outlineIcon {
    opacity: 1;
  }
`;
