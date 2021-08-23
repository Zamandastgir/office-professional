import React from "react";
import { Link} from "react-router-dom";

class Contact extends React.Component{
    arr=[
		{
			personal:"zaman",
		}
];
render(){

	var responce = this.arr.map((obj)=>{
		return <div>

					<div class="Footer-slider">
			
			<div class="map">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.298719126976!2d74.33890011467395!3d31.515954554514423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190458d32a5d45%3A0x8cbd6ce309877ba4!2sI.T.+Tower!5e0!3m2!1sen!2s!4v1530178621130"></iframe>
			</div>
			
			
				
			</div>
			
			<div class="footer-page">
			
			<div class="inner-footer">
			
			<div class="inner-footer-img">
			
			<img src="images/contact.jpg"/>
			
			</div>

					
						<input type="text" className="input-name focus-input" placeholder="YourName"/>

						<input type="text" className="input-phon focus-input" placeholder="Phon"/>

						<input type="text" className="input-email focus-input" placeholder="Email"/>

						<textarea className="input-textarea focus-input" placeholder="Describe yourself here..."></textarea>
					

						

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

export default Contact;