import React, { Component } from "react";
import { Navigate, useHref } from "react-router";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Home from "../Home/Home";
import { Route, Routes } from "react-router-dom";
import { useHistory } from "react-router-dom";


class BibDisplay extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          searchValue: "",
          runners: [],
          name: "",
          bib_number: 0,
          imgFileName: "",
          img_name: [],
          img_links: [],
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
      }
    
      handleChange(event) {
        this.setState({ searchValue: event.target.value });
        fetch("http://localhost:3001")
          .then((response) => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json().then((data) => {
              // console.log(data[4].bib_number); //3219
              // console.log(data.map(x => x.bib_number)); //[5074, 3542, 5074, 3381, 3219, 3317]
            
              this.setState({ runners: data });
            });
          })
          .catch((err) => {
            console.log(err);
          });
         
      }
    
      handleSearch(event) {
        event.preventDefault();
        console.log(this.state.searchValue);
        // console.log(typeof(this.state.searchValue));
        console.log(this.state.runners);
        // console.log(typeof(this.state.runners[0].bib_number));
    
        // this.state.runners.map(x, index) => ()
        let x = false;
        for (let i = 0; i < this.state.runners.length; i++) {
          // console.log(this.state.runners[i].bib_number);
          // console.log(this.state.searchValue);
    
          if (this.state.runners[i].bib_number == this.state.searchValue) {
            console.log("working");
            x = true;
          } else console.log("flag is false");
        }
    
        console.log(x);
        // if (x == true) {
        //   fetch(`http://localhost:3001/${this.state.searchValue}`, {
        //     method: "GET",
        //   })
        //     .then((response) => {
        //       return response.json();
        //     })
        //     .then((data) => {
        //       console.log(data.map((x) => x.name));
        //       console.log(data);
        //       this.setState({ img_name: data });
        //     });
        // } else console.log("not working");
        // console.log(this.state.img_name);
    
       x == true ? (
     
      
          fetch(`http://localhost:3001/${this.state.searchValue}`, {
            method: "GET",
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data.map((x) => x.name));
              console.log(data);
              this.setState({ img_name: data });
              alert("congrats")
              
            })
           
        
            ) : alert("not working")
      }
    
      render() {
        const { runners, searchValue, img_name, name } = this.state;
    
        return (
          <>
        
    
            
            <div >
                
                <div >
              <h3> Enter Bib number</h3>
    
              <form className="form" >
                {/* <label> Bib number </label> */}
                <input
                  type="text"
                  placeholder="Search bib number"
                  value={this.state.searchValue}
                  onChange={this.handleChange}
                />
              
              
              </form>
              <button value="Submit" className="button" onClick={this.handleSearch}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                Search
              </button>
              </div>
    
        </div>
        
        <div className="center">
            {/* // images render  */}
          
              
              {/* //</div> <div className="card-list">  */}
              <div className="row">
                {this.state.img_name.map((link, index) => (
    
    
                    <div className="column" key={index} accept=".png">
                    <img
                       className="single-img"
                      src={`http://localhost:3000/images/${link.name}`}
                    
                      alt="img-thumbnail" 
                      width="100%"/>
    
                    </div>
    
                    
                     ))}
                     </div>
                 </div>
    
             
        </>
         
        );
      }
    }
    
export default BibDisplay;


