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
    return (
      <div className="cv-result-container">
        <div className="personal-info-container">
          <div className="left-side">
            <h2 className="name">{this.props.personalInfo.name}</h2>
            <h4 className="position">{this.props.personalInfo.occupation}</h4>
          </div>
          <div className="right-side">
            <p>{this.props.personalInfo.number}</p>
            <p>{this.props.personalInfo.email}</p>
            <p>{this.props.personalInfo.address}</p>
          </div>
        </div>
        <div className="introduction">{this.props.personalInfo.intro}</div>
        <div className="work-experience-container">
          {this.props.workInfo.length > 0 ? <h3>Work Experience</h3> : ""}
          <div className="container-items">
            {this.renderWork(this.props.workInfo)}
          </div>
        </div>
        <div className="education-container">
          {this.props.eduInfo.length > 0 ? <h3>Education</h3> : ""}
          <div className="container-items">
            {this.renderEducation(this.props.eduInfo)}
          </div>
        </div>
      </div>
    );
  }
}

export default Overview;
