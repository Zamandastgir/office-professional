import React from "react";
import { Link} from "react-router-dom";

class Footer extends React.Component{
	arr=[
		{
			navbar:{
					
					navbarhome:"Home",
					navbarabout:"About",
					navbarblog:"Blog",
					navbarteam:"Team",
					navbarcontect:"Contact",

			}
		}
];
render(){

	var responce = this.arr.map((obj, i)=>{
		return <div key={i}>
			 <div>

                 <div class="footer">
			
			<h3><i class="fa fa-map-marker"></i> Contact:</h3>
			
			<p class="footer-contact">
                        Via Ludovisi 39-45, Rome, 54267, Italy<br/>
                        Phone: 1.800.245.356 Fax: 1.800.245.357<br/>
                        Email: hello@LawOffice.org<br/>
                    </p>
			<h3><i class="fa fa-external-link"></i> Links</h3>
			
			<h3><i class="fa fa-heart"></i> Socialize</h3>
			
			<h3><i class="fa fa-facebook"></i> Zamanbhatti@facebook.com</h3>
			
			<h3><i class="fa fa-linkedin"></i> Zamanbhatti@linkedin.com</h3>
			
			<h3><i class="fa fa-envelope"></i> Zamandastgir23@gmail.com</h3>
			
			
			
			
			<a href="#"> About ( Who we are )</a>
			
			<a href="#"> Services ( What we do )</a>
			
			<a href="#"> Contact ( Feel free to contact )</a>
			
			<a href="#"> Blog ( Write to us )</a>
			
			<a href="#"> Team ( Meet the Team )</a>
			
			<div class="coppy-write">
			
			<span class="s1">© Copyright 2014,<span class="s2">Your Website Link.</span>Theme by<span class="s3">ThemeWagon</span></span>
			
			
			</div>
			
			
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
}

export default Footer;