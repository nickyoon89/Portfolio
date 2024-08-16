import styled from 'styled-components';
import { Grid } from '@mui/material';

export const HomeContainer = styled(Grid)`
  height: 100%;
  width: 100%;
  margin-bottom: 25px;
`

export const Character = styled.img`
  width:100%;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`

export const Heading = styled.h1`
  font-size: 2.4em;
  padding-left: 50px;
  & span{
    color: var(--bs-indigo)
  }
`

export const Wave = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.1s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;
`