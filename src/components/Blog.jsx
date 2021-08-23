import React from "react";
import { Link} from "react-router-dom";

const Blog = (props)=>{


	var responce = props.data1.map((obj)=>{
		return <div>
			 <div>

					 <div class="Blog-slider">
			
			<img class="about-img" src={obj.Blog.Blogimgslider}/>
			


				
			</div>
			
			<div class="Blog">
			
			<div class="side-bar">
			
			<img src={obj.Blog.Blogsideimg1}/>
			<img src={obj.Blog.Blogsideimg2}/>
			
			<img src={obj.Blog.Blogsideimg3}/>
			<img src={obj.Blog.Blogsideimg4}/>
			
			
			</div>
			
			<div class="section-one">
			
			<h1 class="blog-title">
                            <i class="fa fa-file-text"></i>
                            {obj.Blog.section1.section1H}
                        </h1>
						
			<div class="blog-img1">
			
			<img src={obj.Blog.section1.section1img}/>
			
			
			</div>
			
			
			
			<p>
			{obj.Blog.section1.section1P}
				</p>
				
			<span class="badge">Posted 2012-08-02 20:47:04</span>
			
			<div class="pull-right">
                                <span class="label label-default">alice</span> 
                                <span class="label label-primary">story</span> 
                                <span class="label label-success">blog</span> 
                                <span class="label label-info">personal</span> 
                                <span class="label label-warning">Warning</span>
                                <span class="label label-danger">Danger</span>
                            </div>
							
			<div class="line"></div>
			
			
			</div>
			
			<div class="section-two">
			
			<h1 class="blog-title">
                            <i class="fa fa-file-text"></i>
                            Revolution has begun!
                        </h1>
						
			<div class="blog-img1">
			
			<img src="images/blog2.jpg"/>
			
			
			</div>
			
			
			
			<p>
				'I am bound to Tahiti for more men.' 'Very good. Let me board you a moment—I come in peace.
				' With that he leaped from the canoe, swam to the boat; and climbing the gunwale, 
				stood face to face with the captain. 'Cross your arms, sir; throw back your head. 
				Now, repeat after me. As soon as Steelkilt leaves me, I swear to beach this boat on yonder
				island, and remain there six days. If I do not, may lightning strike me!'A pretty scholar,
				' laughed the Lakeman. 'Adios, Senor!' and leaping into the sea, he swam back to his comrades.</p>
				
			<span class="badge">Posted 2012-08-02 20:47:04</span>
			
			<div class="pull-right">
                                <span class="label label-default">alice</span> 
                                <span class="label label-primary">story</span> 
                                <span class="label label-success">blog</span> 
                                <span class="label label-info">personal</span> 
                                <span class="label label-warning">Warning</span>
                                <span class="label label-danger">Danger</span>
                            </div>
							
			<div class="line"></div>
			
			
			</div>
			
						<div class="section-three">
			
			<h1 class="blog-title">
                            <i class="fa fa-cloud"></i>
                            Alice in Wonderland, part dos
                        </h1>
						
			<div class="blog-img1">
			
			<img src="images/blog1.jpg"/>
			
			
			</div>
			
			
			
			<p>
				'I am bound to Tahiti for more men.' 'Very good. Let me board you a moment—I come in peace.
				' With that he leaped from the canoe, swam to the boat; and climbing the gunwale, 
				stood face to face with the captain. 'Cross your arms, sir; throw back your head. 
				Now, repeat after me. As soon as Steelkilt leaves me, I swear to beach this boat on yonder
				island, and remain there six days. If I do not, may lightning strike me!'A pretty scholar,
				' laughed the Lakeman. 'Adios, Senor!' and leaping into the sea, he swam back to his comrades.</p>
				
			<span class="badge">Posted 2012-08-02 20:47:04</span>
			
			<div class="pull-right">
                                <span class="label label-default">alice</span> 
                                <span class="label label-primary">story</span> 
                                <span class="label label-success">blog</span> 
                                <span class="label label-info">personal</span> 
                                <span class="label label-warning">Warning</span>
                                <span class="label label-danger">Danger</span>
                            </div>
							
			
			
			
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


export default Blog;