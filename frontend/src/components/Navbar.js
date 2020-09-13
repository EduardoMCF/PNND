import React from 'react';
import './Navbar.css';

const Navbar = ({menu}) => (
	<nav>
		<ul className="navUl">
			{menu.map(({section, href}) => <li className="navLi"><a href={href}>{section}</a></li>)}
		</ul>
	</nav>
)

export default Navbar;
