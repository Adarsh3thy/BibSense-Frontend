import React, { Component } from "react";

class Background extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url("http://localhost:3000/images/backgroundPic.jpg")`,
          backgroundRepeat: "no-repeat",
          width: "10",
          height: "150px",
          backgroundSize: "cover",
          position: "relative",
          opacity: "0.9",
        }}
      ></div>
    );
  }
}
export default Background;
