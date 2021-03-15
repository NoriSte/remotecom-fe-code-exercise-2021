import styled from "styled-components";

export const Currency = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 67px;
  margin-top: 32px;
  label {
    &:last-child {
      margin-top: 0;
      width: 67px;
      & select {
        font-size: 16px;
      }
      padding: 0;
      margin-bottom: -5px;
    }
  }
`;