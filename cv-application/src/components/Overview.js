import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cv-result-container">
        <div className="personal-info-container">
          <h2>Pamela Beesly</h2>
          <h4>Senior Administrator</h4>
          <p>01254327788</p>
          <p>pamela.beesly@gmail.com</p>
          <p>Linden Ave., Scranton, PA</p>
        </div>
        <div className="introduction">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quia
          a doloribus? Non ad, aliquam recusandae dignissimos pariatur et,
          placeat dicta vel quaerat corrupti aperiam ut optio facere asperiores
          atque accusamus! Obcaecati quibusdam corporis eos!
        </div>
        <div className="work-experience-container">
          <h3>Work Experience</h3>
          <div className="work-experience-item">
            <p>Senior Adminstrator</p>
            <p>June 2008 - February 2012</p>
            <p>Dunder Mifflin</p>
          </div>
          <div className="work-experience-item">
            <p>Receptionist</p>
            <p>October 2004 - June 2008</p>
            <p>Dunder Mifflin</p>
          </div>
        </div>
        <div className="education-container">
          <h3>Education</h3>
          <div className="education-item">
            <p>Applied and Digital Art</p>
            <p>2007</p>
            <p>Pratt Institute</p>
          </div>
          <div className="education-item">
            <p>Office Adminstration</p>
            <p>Philadelphia Business Academy</p>
            <p>2002 - 2004</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
