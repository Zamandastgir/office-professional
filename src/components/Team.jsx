import React from "react";


const Team = (props)=>{

    var responce = props.data1.map((obj,i)=>{
        return <div key={i}>

           <div class="Team-slider">
			
			<img  src={obj.Team.sliderimg}/>
			
			
				
			</div>
			
			<div class="team">
			
			<div class="member-one">
			
			<img src={obj.Team.img1}/>
			
			<h4>{obj.Team.mem1H}</h4>
			<p>{obj.Team.mem1P}</p>
			
			</div>
			
			<div class="member-two">
			
			<img src={obj.Team.img2}/>
			
			<h4>{obj.Team.mem2H}</h4>
			<p>{obj.Team.mem2P}</p>
			
			</div>
			
			<div class="member-three">
			
			<img src={obj.Team.img3}/>
			
			<h4>{obj.Team.mem3H}</h4>
			<p>{obj.Team.mem3P}</p>
			
			</div>
			
			<div class="member-four">
			
			<img src={obj.Team.img4}/>
			
			<h4>{obj.Team.mem4H}</h4>
			<p>{obj.Team.mem4P}</p>
			
			</div>
			
			<div class="member-five">
			
			<img src={obj.Team.img5}/>
			
			<h4>{obj.Team.mem5H}</h4>
			<p>{obj.Team.mem5P}</p>
			
			</div>
			
			<div class="member-six">
			
			<img src={obj.Team.img6}/>
			
			<h4>{obj.Team.mem6H}</h4>
			<p>{obj.Team.mem6P}</p>
			
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

export default Team;