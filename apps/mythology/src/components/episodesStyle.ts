import styled from "styled-components";

export const ButtonGeneral= styled.button`
    font-family: 'FiraSansCondensed';
    background-color:#E45C3F;
    color:#FCE4E4;
    font-size: 1.2em;
    border:0;
    width: 18vw;
    padding: 10px 0px;
    border-radius:10px;
    &:focus{
        border: 2px solid black;
    }


    @media(max-width: 800px) {
        width:25vw;
    font-size: 0.9em;

      }

`

export const ComponentEpisodeDiv = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
`