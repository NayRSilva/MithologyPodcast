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

