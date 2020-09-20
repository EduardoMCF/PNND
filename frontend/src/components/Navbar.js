import React from 'react';
import './Navbar.css';

const Navbar = ({menu}) => {

	React.useEffect(() => {
		const openbtn = document.getElementById("openbtn");
		const closebtn = document.getElementById("closebtn");
		const sidebar = document.getElementById("sidebar");
		const Root = document.getElementById("root")

		closebtn.onclick = () => {
			sidebar.style.width = "0";
  			Root.style.marginLeft= "0";
  			openbtn.innerHTML = "☰";
  			openbtn.style.fontsize = "20px";
  			openbtn.style.padding = "10px 15px";

		}

		openbtn.onclick = () => {
			sidebar.style.width = "250px";
  			Root.style.marginLeft= "250px";
  			openbtn.style.fontsize = "0px";
  			openbtn.style.padding = "0px";
  			openbtn.innerHTML = "";
		}
	},[])

	return (
		<div>
			<button id="openbtn">☰</button>
			<nav id='sidebar' class="sidebar">
			  <a href="javascript:void(0)" id="closebtn">×</a>
			  {	menu.map(({section, href}) => <a href={href}> {section} </a>) }
			</nav>
		</div>
	)
}

export default Navbar;
