import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.personalInfoName);
    console.log(this.props.personalInfoOccupation);
    return (
      <div className="cv-result-container">
        <div className="personal-info-container">
          <h2>Name: {this.props.personalInfoName}</h2>
          <h4>{this.props.personalInfoOccupation}</h4>
          <p>{this.props.personalInfoNumber}</p>
          <p>{this.props.personalInfoEmail}</p>
          <p>{this.props.personalInfoAddress}</p>
        </div>
        <div className="introduction">{this.props.personalInfoIntro}</div>
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
