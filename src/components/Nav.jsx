import React from "react";
import { Link} from "react-router-dom";

const Nav = (props)=>{
	var responce = props.data1.map((obj, i)=>{
		return <div key={i}>
			 <div>

				 <div class="navbar">
				<img class="navbar-img" src="./images/Office.png"/>

				<ul class="nav-ul">
				<li><Link to="./Home">{obj.Navbar.navbarhome}</Link></li>
				<li><Link to="./About">{obj.Navbar.navbarabout}</Link></li>
				<li><Link to='./Blog'>{obj.Navbar.navbarblog}</Link></li>
				<li><Link to='./Team'>{obj.Navbar.navbarteam}</Link></li>
				<li><Link to='./Contact'>{obj.Navbar.navbarcontect}</Link></li>
				</ul>
			</div>
</div>






</div>

	});
	return(
	   <div>
		   <div>{responce}</div>
	   </div>
	);
}


export default Nav;