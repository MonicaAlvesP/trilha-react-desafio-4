import styled from 'styled-components';

import florestBackground from '../../assets/florest.jpg';

export const Container = styled.div`
    width: 100%; 
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${florestBackground});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 500px;
  height: 60vh;

  border-radius: 8px;
  padding: 20px;

  flex: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  backdrop-filter: blur(20px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

export const Title = styled.h1`
    font-size: 42px;
    font-weight: 700;
    font-family: cursive;
`

export const Row = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    `

export const Column = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    `
export const Spacing = styled.div`
    margin: 10px 0;
`