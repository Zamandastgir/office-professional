import React from "react";


const About = (props)=>{


	
   

		var responce =props.data1.map((obj,i)=>{
			return <div key={i}>
				 <div>

            
			<div class="slider-about">
			
			<img class="about-img" src={obj.About.Aboutimg}/>
			
			
				
			</div>
			
			<div class="About-firm">
			
			<div class="About-over">
			
			<h3 class="lead"> {obj.About.Aboutlead1H}</h3>
			<div class="line-about"></div>
			
			<p class="lead-para">{obj.About.Aboutlead1P}</p>
			
			<ul class="lead-ul">
				<li><a href="">{obj.About.Aboutul1}</a></li>
				<li><a href="">{obj.About.Aboutul2}</a></li>
				<li><a href="">{obj.About.Aboutul3}</a></li>
			
			</ul>
			
			<h3 class="lead">{obj.About.Aboutlead2H} </h3>
			<div class="line-about"></div>
			
			<p class="lead-para">{obj.About.Aboutlead2P}</p>
			
			</div>
			
			<div class="about-all-data">
			
			<h3 class="about-heading">{obj.About.Aboutfirm.AboutfirmH1}</h3>
			<hr class="about-hr"/>
			<p class="about-para">{obj.About.Aboutfirm.AboutfirmP1}</p>
			
			<h3 class="about-heading">{obj.About.Aboutfirm.AboutfirmH2}</h3>
			<p class="about-para">{obj.About.Aboutfirm.AboutfirmP2}</p>
			
			<h3 class="about-heading">{obj.About.Aboutfirm.AboutfirmH3}</h3>
			<p class="about-para">{obj.About.Aboutfirm.AboutfirmP3}</p>
			
			<h3 class="about-heading">{obj.About.Aboutfirm.AboutfirmH4}</h3>
			<p class="about-para">{obj.About.Aboutfirm.AboutfirmP4}</p>
			
			
			
			<h3 class="about-heading">{obj.About.Aboutfirm.AboutfirmH5}</h3>
			
			<p class="about-para">{obj.About.Aboutfirm.AboutfirmP5}</p>
			
			
			<h3 class="about-heading">{obj.About.Aboutfirm.AboutfirmH6}</h3>
			<p class="about-para">{obj.About.Aboutfirm.AboutfirmP6}</p>
			
			
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


export default About;