import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({menu}) => {

	React.useEffect(() => {
		const openbtn = document.getElementById("openbtn");
		const closebtn = document.getElementById("closebtn");
		const sidebar = document.getElementById("sidebar");
		const Root = document.getElementById("root");
		const routes = [...sidebar.getElementsByClassName('routes')];

		console.log(document.getElementById('sidebar'));

		const open = () => {
			sidebar.style.width = "250px";
  			Root.style.marginLeft= "250px";
  			openbtn.style.fontsize = "0px";
  			openbtn.style.padding = "0px";
  			openbtn.innerHTML = "";
		}

		const close = () => {
			sidebar.style.width = "0";
  			Root.style.marginLeft= "0";
  			openbtn.innerHTML = "☰";
  			openbtn.style.fontsize = "20px";
  			openbtn.style.padding = "10px 15px";
		}

		closebtn.onclick = close;
		openbtn.onclick = open;

		routes.map(elem => elem.onclick = close);
	},[])

	return (
		<div>
			<button id="openbtn">☰</button>
			<nav id='sidebar' class="sidebar">
			  <a href="javascript:void(0)" id="closebtn">×</a>
			  {	menu.map(({section, route}) => <Link to={route} className='routes'> {section} </Link>) }
			</nav>
		</div>
	)
}

export default Navbar;
