import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainDiv = styled.div`
    min-height:100vh;
    display:flex;

`

export const CommonDiv = styled.div`
    width: 100%;
    height: 100vh;
    display:flex;
    flex-wrap: wrap;
    justify-content:center;

    
`
export const ParticipantContainer = styled.div`
    flex-direction: column;
    display:flex;
    text-align:center;
    flex-shrink:0;
    width:200px;

    @media(max-width: 1025px) {
        width:200px;

      }

      @media(max-width: 450px) {
        width:150px;

      }

`


export const ParticipantPhoto = styled.img`
    width: 150px;
    height:150px;
    margin: 10% 10%;
    border-radius: 50%;
    flex-shrink:0;

    @media(max-width: 800px) {
      width: 100px;
      height:100px;
      margin: 15px 45px;

    }

    
    @media(max-width: 400px) {
      width: 90px;
      height:90px;
      margin: 15px 30px;

    }

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
    width:40%;
    margin: 5% 30%;

    @media(max-width: 800px) {
        width: 60%;
        margin: 5% 20%;


      }

      @media(max-width: 450px) {
        width: 70%;
        margin: 5% 15%;


      }

      @media(max-width: 450px) {
        width: 90%;
        margin: 5% 5%;


      }

`
export const LightTitle = styled.h3`
    font-family: 'FiraSansCondensed';
    font-size: 25px;

    @media(max-width: 450px) {
        font-size: 18px; 


      }

      @media(max-width: 350px) {
        font-size: 16px; 


      }



`

export const FloatTitle = styled.h1`
	font-family: 'FiraSansBold';
	font-size: 45px;
	letter-spacing: -2px;
	  margin-top: -30px;
	  margin-bottom: 30px;

  
  @media(max-width: 1500px) {
    font-size: 30px;

  }

@media(max-width: 1025px) {
    font-size: 1.8em;

  }

  @media(max-width: 800px) {
    font-size: 22px;

  }

  
  @media(max-width: 350px) {
    font-size: 20px;

  }


`
export const BoldTitle = styled.h1`
    font-family: 'FiraSansBold';
    font-size: 32px;
    letter-spacing: -2px;

    @media(max-width: 1500px) {
        font-size: 30px;

      }

    @media(max-width: 1025px) {
        font-size: 1.8em;

      }

      @media(max-width: 800px) {
        font-size: 22px;

      }

      
      @media(max-width: 350px) {
        font-size: 20px;

      }

`
export const Titles = styled.div`
    margin-bottom:5%;
    `

export const EpisodeInfo = styled.p`
    font-family: 'FiraSansCondensed';
    font-size:22px;
    margin:2vh 0;
    
    @media(max-width: 1025px) {
        font-size: 1em;

      }

      @media(max-width: 450px) {
        font-size: 16px;

      }

      @media(max-width: 350px) {
        font-size: 14px;

      }


`

export const EpisodeSummary = styled.div`
    font-family: 'FiraSans';
    font-size:20px;
    letter-spacing: -2px;
    margin: 3% 0;

    
    @media(max-width: 1025px) {
        font-size: 1em;
        letter-spacing: 0px;
        margin: 3vh 0;



      }

      @media(max-width: 450px) {
        font-size: 14px;

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
    font-size: 32px;
    letter-spacing: -2px;

    @media(max-width: 1500px) {
        font-size: 26px;

      }
    
    @media(max-width: 1025px) {
        font-size: 1.8em;

      }

      @media(max-width: 800px) {
        font-size: 1.4em;

      }
      @media(max-width: 450px) {
        font-size:22px;

      }

      @media(max-width: 350px) {
        font-size:20px;

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
    font-size:20px;
    height: 200px;
    margin-bottom:5%;
    word-wrap: break-word;

    &:focus{
        border: 2px solid #ce4224;
    }

    @media(max-width: 1500px) {
      font-size: 18px;
      line-height: 30px;


    }


      @media(max-width: 450px) {
        font-size: 16px;
        line-height: 30px;


      }

      @media(max-width: 350px) {
        font-size: 15px;
        line-height: 28px;


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
        border: 2px solid #ce4224;
    }

 
`


export const SocialImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius:50%;
    margin: 0 15px;

`
export const EpisodeCardDiv = styled.div`
	width: 300px;
	min-height: 350px;
	background:#D9D9D9;
  padding: 20px 0  30px 0;
  border-radius:15px;
  margin: 0 15px;

  @media(max-width: 1025px) {
    width:250px;
    min-height: 300px;

  }
`

export const UndersCoreEpLink = styled(Link)`

    font-family: 'FiraSansCondensed';
    display:block;

    font-size: 25px;
    text-decoration: underline,
    text-underline-offset: 10px,
    color: #E45C3F;

    &:visited{
      color: #ce4224;
    }

    @media(max-width: 450px) {
        font-size: 18px; 


      }

      @media(max-width: 350px) {
        font-size: 16px; 


      }

`


export const BolderEpLink = styled(Link)`

    font-family: 'FiraSansBold';
    display:block;
    text-decoration:none;
  
    font-size: 32px;
    letter-spacing: -2px;
    color: #E45C3F;
    margin-top: 20%;
    margin-bottom: 5%;


    @media(max-width: 1500px) {
        font-size: 30px;

      }

    @media(max-width: 1025px) {
        font-size: 1.8em;

      }

      @media(max-width: 800px) {
        font-size: 22px;

      }

      
      @media(max-width: 350px) {
        font-size: 20px;

      }

` 
