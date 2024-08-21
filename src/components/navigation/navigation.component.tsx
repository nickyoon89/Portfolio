import { Fragment } from "react/jsx-runtime"
import { Logo, LogoContainer, MenuButton, NavigationContainer, NavLink, NavLinksContainer, NavMenu } from "./navigation.styles"
import LogoImg from '../../assets/logo.png'
import { Outlet, To, useNavigate } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArticleIcon from '@mui/icons-material/Article';

const Navigation = () => {
	const navigate = useNavigate()
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = (link:To) => {
		setAnchorEl(null);
		if(typeof(link) === "string") navigate(link);
	};

    return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<Logo src={LogoImg} alt="logo"/>
				</LogoContainer>
				<NavLinksContainer>
					<NavLink to="/"> 
						<HomeIcon/>Home
					</NavLink>
					<NavLink to="/about"> 
						<AccountBoxIcon/>About
					</NavLink>
					<NavLink to="/projects"> 
						<VerifiedIcon/>Projects
					</NavLink>
					<NavLink to="/resume"> 
						<ArticleIcon/>Resume
					</NavLink>
				</NavLinksContainer>
				<MenuButton 
					sx={{color:"var(--bs-indigo)"}}
					aria-controls={open ? 'positioned-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}>
					<MenuIcon></MenuIcon>
				</MenuButton>
				<NavMenu
					aria-labelledby="positioned-button"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left',
					}}
				>
					<MenuItem onClick={()=>handleClose("/")}><HomeIcon/>Home</MenuItem>
					<MenuItem onClick={()=>handleClose("/about")}><AccountBoxIcon/>About</MenuItem>
					<MenuItem onClick={()=>handleClose("/projects")}><VerifiedIcon/>Projects</MenuItem>
					<MenuItem onClick={()=>handleClose("/resume")}><ArticleIcon/>Resume</MenuItem>
				</NavMenu>
			</NavigationContainer>
			<Outlet />
		</Fragment>
	)
}

export default Navigation