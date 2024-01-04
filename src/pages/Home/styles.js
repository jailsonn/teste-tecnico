import styled from "styled-components";
import breakpoints from "../../styles/breakpoints";

export const Container2 = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;
`;

export const ContainerItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 240px);
  /* grid-template-columns: 240px 240px 240px 240px; */
  gap: 16px;

  @media ${breakpoints.bg} {
    grid-template-columns: repeat(3, 240px);
  }

  @media ${breakpoints.md} {
    grid-template-columns: repeat(2, 240px);
  }

  @media ${breakpoints.sm} {
    grid-template-columns: repeat(1, 80vw);
  }
`;
