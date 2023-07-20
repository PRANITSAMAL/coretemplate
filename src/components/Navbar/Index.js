import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import Header from '../Header';

const Navbar = () => {
return (
	<>
	<div className="page-wrapper">
    <Header />
	<Nav>
		<Bars />

		<NavMenu>
        <NavLink to='/' >
			Home
		</NavLink>
		<NavLink to='/about' >
			About
		</NavLink>
		<NavLink to='/events' >
			Events
		</NavLink>
		<NavLink to='/annual' >
			Annual Report
		</NavLink>
		<NavLink to='/team' >
			Teams
		</NavLink>
		<NavLink to='/blogs' >
			Blogs
		</NavLink>
		<NavLink to='/sign-up' >
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</div>
	</>
);
};

export default Navbar;
