import styled from "styled-components";

interface StyledDivProps {
  gap?: number;
  marginBottom?: number;
}

export const StlyedDiv = styled.div<StyledDivProps>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  gap: ${(props) => (props.gap ? `${props.gap}px` : "")};
  margin-bottom: ${(props) => props.marginBottom && `${props.marginBottom}px`};
`;

export const StyledButton = styled.button`
  border: none;
  background: none;
`;

export const StyledH1 = styled.h1`
  font-size: 1.5rem;
`;
