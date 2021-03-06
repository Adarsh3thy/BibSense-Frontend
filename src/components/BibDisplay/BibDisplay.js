import React, { Component } from "react";



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
          error: null
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
      }
    
      handleChange(event) {
        this.setState({ searchValue: event.target.value });
        fetch("https://bibsense.herokuapp.com/", { mode: 'cors' })
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
     
      
          fetch(`https://bibsense.herokuapp.com/${this.state.searchValue}`, {
            method: "GET",
          })
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              console.log(data.map((x) => x.name));
              console.log(data);
              this.setState({ img_name: data });
              this.setState({error: null});
            
              
            })
           
        
            ) : this.setState({ error: "Please enter a correct bib number." })
            console.log(this.state.error)
      }

      errorHandle() {
        return (
          <div style={{ color:"#fff", textAlign:"center" }}>{ <h1>error</h1> }</div>
        )
      }
    
      render() {
        const { runners, searchValue, img_name, name,error } = this.state;
    
        return (
          <>
            <div>
              <div>
                <h3 style={{ fontFamily: "Copperplate" }}>
                  {" "}
                  Enter your bib number
                </h3>

                <form className="form">
                  {/* <label> Bib number </label> */}
                  <input
                    type="text"
                    placeholder="Search bib number"
                    value={this.state.searchValue}
                    onChange={this.handleChange}
                  />
                </form>
                <button
                  value="Submit"
                  className="button"
                  onClick={this.handleSearch}
                >
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
                {this.state.error !== null ? (
                  <div
                    style={{
                      color: "#000000",
                      textAlign: "center",
                      fontFamily: "Copperplate",
                      fontSize: "25px",
                    }}
                  >
                    {error}
                  </div>
                ) : (
                  this.state.img_name.map((link, index) => (
                    <div className="column" key={index} accept=".png">
                      <img
                        className="single-img"
                      src={`https://bibsens.herokuapp.com/images/${link.name}`}
                        alt="img-thumbnail"
                        width="100%"
                      />
                    </div>
                  ))
                )}
              </div>
            </div>
          </>
        );
      }
    }
    
export default BibDisplay;


