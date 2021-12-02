import React,{Component} from 'react';
import { NavLink } from "react-router-dom";

class Contact extends Component{
    render(){
        return(
            <div >
              
                <div className="container">
            <h style={{fontFamily:"Copperplate", fontSize:"60px"}}>Contact page</h>
            

            <p style={{fontFamily:"Copperplate", fontSize:"20px"}}>
           
        

              <a  className="btn btn-light btn-outline-success "href="https://github.com/sjsucmpe272-fall21/BibSense">Github</a>

            </p>
          </div>
    
            </div>
        )
    }
}
export default Contact;