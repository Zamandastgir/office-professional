import React from "react";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Team from './Team';
import Arr from './data';
import Footer from "./Footer";


class App extends React.Component{
    render(){
        return(
            <div >
              
             
              <Nav data1={Arr}/>


              {/* <About data1={Arr}/> */}
             
             
              <Route exact path='/' render={()=>{return (<Home data1={Arr}/>)}}/>
              <Route path='/Home' render={()=>{return (<Home data1={Arr}/>)}}/>
              <Route path='/About' render={()=>{return (<About data1={Arr}/>)}}/>
              {/* <Route path='/About' component = {About}/> */}
              <Route path='/Blog' render={()=>{return (<Blog data1={Arr}/>)}}/>
              <Route path='/Team' render={()=>{return (<Team data1={Arr}/>)}}/>
              <Route path='/Contact' component = {Contact}/>
              <Footer/>

              
            
            

             

            </div>
        );
    }
}

export default App;