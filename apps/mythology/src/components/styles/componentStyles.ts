import styled from "styled-components";

export const MainDiv = styled.div`
    min-height:100vh;
    display:flex;

`

export const CommonDiv = styled.div`
    width: 100%;
    height:200px;
    background: #F3EAE8;
    display:flex;
    flex-wrap: wrap;
    justify-content:center;

    
`
export const ParticipantContainer= styled.div`
    flex-direction: column;
    display:flex;
    text-align:center;
    flex-shrink:0;
    width:200px;

`
export const RedBox = styled.div`
    height: 50px;
    width: 100%;
    background-color:red;    
`


export const GridDiv = styled.div`
    display:grid;
    grid-template-columns: 10vw 80vw 10vw; 
    text-align:center;
    justify-items:center;
`

export const ComponentDiv = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
`

export const ColumnDiv = styled.div`
    min-height:100vh;
    display:flex;
    flex-direction: column;
    width:80%;
    margin: 0 10%;

`

export const LightTitle= styled.h4`
    font-family: 'FiraSansCondensed';

`
export const BoldTitle= styled.h1`
    font-family: 'FiraSansBold';
    font-size: 2em;
    letter-spacing: -2px;

`
export const Titles= styled.div`
    margin-bottom:5%;
    `

export const EpisodeInfo= styled.p`
    font-family: 'FiraSansCondensed';
    font-size:1.2em;

`

export const CustomSecondTilte = styled.h2`
    font-family: 'FiraSansCondensed';
    font-size: 1.5em;
    letter-spacing: -2px;

`


export const LateralSliderDiv = styled.div`
    min-height: 200px;
    display:flex;
    flex: 0 0 100%;
    width:100%;
    justify-content:flex-start;
    overflow-x:auto;
    padding: 2% 0;

    &:focus{
        border: 2px solid black;
    }

 
`

export const ParticipantPhoto = styled.img`
    width: 80%;
    margin: 10% 10%;
    border-radius: 50%;
    flex-shrink:0;

`