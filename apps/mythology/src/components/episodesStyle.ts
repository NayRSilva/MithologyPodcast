import styled from "styled-components";

export const ButtonGeneral = styled.button`
    font-family: 'FiraSansCondensed';
    background-color:#E45C3F;
    color:#FCE4E4;
    font-size: 22px;
    border:0;
    width: 10vw;
    padding: 10px 0px;
    border-radius:10px;
    cursor: pointer;
    transition-duration: 0.6s;
    &:focus{
        border: 2px solid #ce4224;
    }
    &:hover{
      background-color:#2cd5dc;
    }

    @media(max-width: 800px) {
        width:40vw;
        font-size: 0.9em;

      }

`

export const ComponentEpisodeDiv = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:center;
`

export const ProfessorName = styled.h3`
      font-size: 24px;
      text-transform: capitalize;

      @media(max-width: 1500px) {
        font-size:22px;

      }


      @media(max-width: 450px) {
        font-size:18px;

      }

      @media(max-width: 350px) {
        font-size:16px;

      }
`

export const ProfessorCargo = styled.p`
font-family: 'FiraSansCondensed';
text-transform: capitalize;


      font-size: 22px;

      @media(max-width: 1025px) {
        font-size: 20px;

      }
      

      @media(max-width: 450px) {
        font-size:14px;

      }

      
      @media(max-width: 350px) {
        font-size:14px;

      }

`