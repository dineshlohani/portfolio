import React from "react";
import "../about/about.css";
import award from "../../img/award.png";
import sun from "../../img/sun-photo.jpg";
const About = () => {
  return (
    <>
      <br></br>
      <div className="a">
        <div className="a-left">
          <div className="a-card1"></div>

          <div className="a-card">
            <img src={sun} alt="" className="a-img" />
          </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">
            <b>About Me</b>
          </h1>
          <p className="a-sub">
            It is a long establish fact that a reader will be the readable
            content.
          </p>

          <p className="a-desc">
            Success is not a destination to reach but a journey to pursue. And
            during the course of journey we may encounter different situation
            where everything seems to be absurd but we have to stick to a point
            that the peak is full of meaningful answer.
          </p>
          <div className="a-ward">
            <img src={award} alt="" className="b-img" />
            <div className="a-ward-texts">
              <h4 className="a-award-title">
                International Design Awards 2022
              </h4>
              <p className="a-award-desc">
                Dinesh Lohani has a BSC.CSIT from Tribhuvan University and years
                of experience as a UI/UX Designer and Web Developer with Python
                Django, react and Laravel 
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
