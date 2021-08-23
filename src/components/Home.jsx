import React from "react";

import { Link} from "react-router-dom";

const Home = (props)=>{
   

    var responce = props.data1.map((obj,i)=>{
        return <div key={i}>
            
            <div class="slider-home">
			
			<div>
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
    </ol>

    <div class="carousel-inner">

      <div class="item active inner-div">
        <img src={obj.Home.slider1img} alt="Los Angeles"/>
        <div class="carousel-caption">
          <h3>{obj.Home.slider1H}</h3>
          <p>{obj.Home.slider1P}</p>
        </div>
      </div>

      <div class="item inner-div">
        <img src={obj.Home.slider2img} alt="Chicago" />
        <div class="carousel-caption">
          <h3>{obj.Home.slider2H}</h3>
          <p>{obj.Home.slider2P}</p>
        </div>
      </div>
    
  
    </div>

    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">{obj.Home.sliderpre}</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">{obj.Home.sliderpre}</span>
    </a>
  </div>
</div>
				
			</div>


        <div class="over-mossion">
			
			<h1>{obj.Home.OverMission.overH1}</h1>
			<p>{obj.Home.OverMission.overP1}</p>
			
			<div class="line"></div>
			
			
			<div class="over-one">
			
			<span class="fa fa-android fa-5x"></span>
			
			<h4>{obj.Home.OverMission.overOneH}</h4>
			
			<p>{obj.Home.OverMission.overOneP}</p>
			
			<a href="#">{obj.Home.OverMission.overOneA}</a>
			
			</div>
			<div class="over-two ">
			
			<span class="fa fa-apple fa-5x"></span>
			
			<h4>{obj.Home.OverMission.overTwoH}</h4>
			
			<p>{obj.Home.OverMission.overTwoP}</p>
			
			<a href="#">{obj.Home.OverMission.overTwoA}</a>
			
			
			</div>
			<div class="over-three">
			
			<span class="fa fa-thumbs-o-up fa-5x"></span>
			
			<h4>{obj.Home.OverMission.overThreeH}</h4>
			
			<p>{obj.Home.OverMission.overThreeP}</p>
			
			<a href="#">{obj.Home.OverMission.overThreeA}</a>
			
			
			</div>
			
			<div class="over-four">
			
			<span class="fa fa-windows fa-5x"></span>
			
			<h4>{obj.Home.OverMission.overFourH}</h4>
			
			<p>{obj.Home.OverMission.overFourP}</p>
			
			<a href="#">{obj.Home.OverMission.overFourA}</a>
			
			
			</div>
			<div class="over-five">
			
			<span class="fa fa-eye fa-5x"></span>
			
			<h4>{obj.Home.OverMission.overFiveH}</h4>
			
			<p>{obj.Home.OverMission.overFiveP}</p>
			
			<a href="#">{obj.Home.OverMission.overFiveA}</a>
			
			
			</div>
			<div class="over-six">
			
			<span class="fa fa-cube fa-5x"></span>
			
			<h4>{obj.Home.OverMission.overSixH}</h4>
			
			<p>{obj.Home.OverMission.overSixP}</p>
			
			<a href="#">{obj.Home.OverMission.overSixA}</a>
			
			
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


export default Home;