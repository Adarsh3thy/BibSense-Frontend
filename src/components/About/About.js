import React, { Component } from "react";
import Background from "./Background";

class About extends Component {
  render() {
    return (
      <div className="container-fluid2">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h style={{fontFamily:"Copperplate", fontSize:"65px"}}>About</h>
            

            <p style={{fontFamily:"Copperplate", fontSize:"20px"}}>
              While many underestimate what it takes to get tagged photos into
              email inboxes, this team identifies this as a problem statement
              that can be translated into a viable solution for sport event
              photographers to generate E-commerce. By selling the pictures,
              they click during the sporting events the photographers can
              generate a source for their income, But the only problem is to
              identify the participants in the photos with their personal
              details. Endurance sports like track and field, running, biking,
              and triathlons, should also embrace the benefits that are put
              forth by Machine Learning. By using Deep Learning algorithms, we
              can resolve the problem of tagging the runner’s photos directly to
              her/his email in order to promote Ecommerce for sporting event
              photography.
            </p>

            <p style={{fontFamily:"Copperplate", fontSize:"20px"}}>
              We propose an automatic system for runner’s bib number recognition
              in natural image collections covering sporting events such as
              marathons. A runner’s Bib is typically a piece of durable paper
              bearing a number as well as the event/sponsor logo. The Bib,
              usually pinned onto the shirt, is used to identify the runner
              among thousands of others during the event. Our system receives a
              set of natural images taken in the sports events and outputs the
              participants’ bib number, which is in turn used to map it with the
              Runner personal details like Email and Contact from the
              registration database. These Images can now be directly sent
              across to the Runner via email at a certain cost for each
              photograph.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
