import styled from "styled-components";

export const Radio = styled.div`
  margin-bottom: 18px;
  h4 {
    font-size: 18px;
    line-height: 144%;
    color: var(--colors-darkBlue);
    margin: 32px 0 16px;
    font-weight: normal;
  }
`;

export const Group = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  column-gap: 20px;
`;