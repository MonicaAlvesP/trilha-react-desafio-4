import styled from 'styled-components';


export const ButtonContainer = styled.button`
  width: 100%;
  height: 42px;
  background-color: #415DBE;
  color: #FFF;
  margin-top: 15px;

  border-radius: 21px;

  &:hover {
    color: #FFF;
    background-color: #2E3F7F;
    cursor:pointer;
  }

  &:disabled {
    background-color: #bdbdbd;
    color: #757575;
    cursor: not-allowed;
  }
`