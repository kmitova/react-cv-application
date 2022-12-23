import React, { Component } from "react";
import uniqid from "uniqid";

class Overview extends Component {
  constructor(props) {
    super(props);

    this.renderWork = this.renderWork.bind(this);
    this.renderEducation = this.renderEducation.bind(this);
  }

  renderWork(items) {
    return items.map((item) => {
      return (
        <div className="work-experience-item" key={uniqid()}>
          <p>{item.position}</p>
          <p>
            {item.start} - {item.end}
          </p>
          <p>{item.company}</p>
        </div>
      );
    });
  }

  renderEducation(items) {
    return items.map((item) => {
      return (
        <div className="education-item" key={uniqid()}>
          <p>{item.course}</p>
          <p>
            {item.startE} - {item.endE}
          </p>
          <p>{item.school}</p>
        </div>
      );
    });
  }

  render() {
    console.log(this.props.workInfo);

    return (
      <div className="cv-result-container">
        <div className="personal-info-container">
          <h2>Name: {this.props.personalInfo.name}</h2>
          <h4>{this.props.personalInfo.occupation}</h4>
          <p>{this.props.personalInfo.number}</p>
          <p>{this.props.personalInfo.email}</p>
          <p>{this.props.personalInfo.address}</p>
        </div>
        <div className="introduction">{this.props.personalInfoIntro}</div>
        <div className="work-experience-container">
          {this.props.workInfo.length > 0 ? <h3>Work Experience</h3> : ""}
          {this.renderWork(this.props.workInfo)}
        </div>
        <div className="education-container">
          {this.props.eduInfo.length > 0 ? <h3>Education</h3> : ""}
          {this.renderEducation(this.props.eduInfo)}

          {/* <div className="education-item">
            <p>Applied and Digital Art</p>
            <p>2007</p>
            <p>Pratt Institute</p>
          </div>
          <div className="education-item">
            <p>Office Adminstration</p>
            <p>Philadelphia Business Academy</p>
            <p>2002 - 2004</p>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Overview;
