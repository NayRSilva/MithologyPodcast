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

    @media(max-width: 1025px) {
        font-size: 1.8em;

      }

      @media(max-width: 800px) {
        font-size: 1.4em;

      }

`
export const Titles= styled.div`
    margin-bottom:5%;
    `

export const EpisodeInfo= styled.p`
    font-family: 'FiraSansCondensed';
    font-size:1.2em;

    
    @media(max-width: 1025px) {
        font-size: 1em;

      }


`

export const EpisodeSummary= styled.div`
    font-family: 'FiraSans';
    font-size:1.2em;
    letter-spacing: -2px;
    margin: 3% 0;

    
    @media(max-width: 1025px) {
        font-size: 1em;
        letter-spacing: 0px;
        margin: 3vh 0;



      }



`

export const LineDivisor = styled.div`
    
    width: 80%;
    margin: 0 10%;
    height: 5px;
    border-bottom: 2px solid #D1472A;

`

export const CustomSecondTilte = styled.h2`
    margin: 5% 0;
    font-family: 'FiraSansCondensed';
    font-size: 2em;
    letter-spacing: -2px;

    
    @media(max-width: 1025px) {
        font-size: 1.8em;

      }

      @media(max-width: 800px) {
        font-size: 1.4em;

      }


`

export const TranscriptionBox = styled.div`
    background: #D9D9D9;
    font-family: 'FiraSansCondensed';
    letter-spacing: -1px;
    overflow-y: auto;
    text-align:center;
    padding: 2vh 2vh;
    border-radius: 15px;
    line-height: 35px;
    font-size:1.3em;
    height: 200px;
    margin-bottom:5%;

    &:focus{
        border: 2px solid black;
    }

    @media(max-width: 1025px) {
        font-size: 1em;

      }
    
    @media(max-width: 800px) {
        font-size: 1em;

      }

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