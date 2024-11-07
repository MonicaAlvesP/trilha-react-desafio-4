import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 100%;
    height: 42px;

    border-bottom: 1px solid #000000;
    overflow: hidden;
    padding: 0 10px;
    
    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background-color: transparent;
        border: 0;
        outline: none;
        &::placeholder {
            color: #000000;
        }
    }

`

export const ErrorMessage = styled.p`
    color: #9F1C21;
    font-size:15px;
    font-weight: 700;
    margin-top:8px;
    margin-left:10px;
`