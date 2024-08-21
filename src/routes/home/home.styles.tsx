import styled from 'styled-components';
import { Grid } from '@mui/material';

export const HomeContainer = styled(Grid)`
  height: 100%;
  width: 100%;
  margin-bottom: 25px;
`

export const FullImage = styled.img`
  width:100%;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  @media only screen and (max-width: 768px){
    padding-left: 25px;
    padding-right:25px;
  }
`

export const Heading = styled.h1`
  font-size: 2.4em;
  padding: 0 50px;
  & span{
    color: var(--bs-indigo)
  }
  @media only screen and (max-width: 768px){
    padding-left: 25px;
    padding-right:25px;
  }
`

export const Description = styled.h2`
  font-size: 1.5em;
  padding: 0 50px;
  & span{
    color: var(--bs-indigo)
  }
  & .blue{
    color: var(--bs-blue)
  }
  & .red{
    color: var(--bs-red)
  }
  @media only screen and (max-width: 768px){
    padding-left: 25px;
    padding-right:25px;
  }
`

export const Wave = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.1s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`