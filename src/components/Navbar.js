import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<h1><NavLink to={'/'}>main</NavLink></h1>
			<h1><NavLink to={'/timer'}>timer</NavLink></h1>
		</div>
	);
};

export default Navbar;