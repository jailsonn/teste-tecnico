import styled from "styled-components";

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
`;
