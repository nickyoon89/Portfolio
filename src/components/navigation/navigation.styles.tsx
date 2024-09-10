import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Menu } from '@mui/material';

export const NavigationContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
  height: 50px;
  width: min-content;
  padding: 10px 25px 0;
`
export const Logo = styled.img`
  height:40px;
`

export const NavLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px){
    display:none;
  }
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  display:flex;
  transition: 0.3s;
  cursor: pointer;
  & svg{
    margin-right:3px;
  }
  &:hover{
    background-color: var(--bs-indigo);
    border-radius: 5px;
  }
`

export const MenuButton = styled(Button)`
  display:none!important;
  @media only screen and (max-width: 768px){
    height:50px;
    width: 50px;
    display:flex!important;
    justify-content:center;
    align-items:center;
  }
`

export const NavMenu = styled(Menu)`
  && {
    & .MuiPaper-root {
      background-color: var(--bs-body-color);
      color: var(--bs-white);
      & li.MuiMenuItem-root svg{
        margin-right: 3px;
      }
    }
  }
`