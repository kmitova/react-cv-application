import "./App.css";
import React, { Component } from "react";
// import MainForm from "./components/MainForm";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeOccupation = this.handleChangeOccupation.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeIntro = this.handleChangeIntro.bind(this);

    this.state = {
      personalInfo: {
        name: "Pamela Beesly",
        occupation: "Senior Adminstrator",
        number: "114598662",
        email: "pam.beesly@gmail.com",
        address: "Linden Ave., Scranton PA",
        intro: "long introduction text",
      },
      workExperince: [],
      education: [],
    };
  }

  handleChange(e) {
    e.preventDefault();
    console.log(e.target.name.value);
    this.setState({
      personalInfo: {
        name: e.target.name.value,
      },
    });
    console.log(this.state.personalInfo.name);
  }

  handleChangeName(e) {
    // this.setState({
    //   personalInfo: {
    //     name: e.target.value,
    //   },
    // });
    this.setState({
      personalInfo: { ...this.state.personalInfo, name: e.target.value },
    });
    console.log(this.state.personalInfo);
    console.log(e.target.value);
  }

  handleChangeOccupation(e) {
    // this.setState({
    //   personalInfo: {
    //     occupation: e.target.value,
    //   },
    // });
    this.setState({
      personalInfo: { ...this.state.personalInfo, occupation: e.target.value },
    });
    console.log(this.state.personalInfo);
    console.log(e.target.value);
  }

  handleChangeNumber(e) {
    this.setState({
      personalInfo: { ...this.state.personalInfo, number: e.target.value },
    });
    console.log(this.state.personalInfo);
    console.log(e.target.value);
  }

  handleChangeEmail(e) {
    this.setState({
      personalInfo: { ...this.state.personalInfo, email: e.target.value },
    });
  }

  handleChangeAddress(e) {
    this.setState({
      personalInfo: { ...this.state.personalInfo, address: e.target.value },
    });
  }

  handleChangeIntro(e) {
    this.setState({
      personalInfo: { ...this.state.personalInfo, intro: e.target.value },
    });
  }

  render() {
    return (
      <div className="App">
        <h1>CV Application</h1>

        <form>
          <h2>CV Form</h2>
          <div className="category personal-details">
            <h3>Personal Details</h3>
            <div className="form-group">
              <label htmlFor="">Name:</label>
              <input
                type="text"
                value={this.state.personalInfo.name || "Receptionist"}
                // defaultValue={"Pam Beesly"}
                name="name"
                placeholder="Pamela Beesly"
                onChange={this.handleChangeName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Occupation:</label>
              <input
                type="text"
                value={this.state.personalInfo.occupation}
                placeholder="Senior Adminstrator"
                onChange={this.handleChangeOccupation}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Mobile Number:</label>
              <input
                type="text"
                value={this.state.personalInfo.number}
                onChange={this.handleChangeNumber}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Email:</label>
              <input
                type="email"
                value={this.state.personalInfo.email}
                onChange={this.handleChangeEmail}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Address:</label>
              <input
                type="text"
                value={this.state.personalInfo.address}
                onChange={this.handleChangeAddress}
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Introduction:</label>
              <textarea
                type="text"
                value={this.state.personalInfo.intro}
                onChange={this.handleChangeIntro}
              />
            </div>
          </div>
          {/* <div className="category work-experience">
            <h3>Work Experience</h3>
            <div className="section work-experience-section">
              <div className="form-group">
                <label htmlFor="">Company:</label>
                <input type="text" value={"Dunder Mifflin"} />
              </div>
              <div className="form-group">
                <label htmlFor="">Position:</label>
                <input type="text" value={"Senior Adminstrator"} />
              </div>
              <div className="form-group">
                <label htmlFor="">Start Date:</label>
                <input type="text" value={"June 2008"} />
              </div>
              <div className="form-group">
                <label htmlFor="">End Date:</label>
                <input type="text" value={"February 2012"} />
              </div>
              <button>Delete</button>
            </div>
            <div className="add-button">
              <button>Add</button>
            </div>
          </div>
          <div className="category education">
            <h3>Education</h3>
            <div className="category education-section">
              <div className="form-group">
                <label htmlFor="">Course / Program:</label>
                <input type="text" value={"Applied and Digital Art"} />
              </div>
              <div className="form-group">
                <label htmlFor="">Institution:</label>
                <input type="text" value={"Pratt Institute"} />
              </div>
              <div className="form-group">
                <label htmlFor="">Start Date:</label>
                <input type="text" value={"2007"} />
              </div>
              <div className="form-group">
                <label htmlFor="">End Date:</label>
                <input type="text" value={"2007"} />
              </div>
              <button>Delete</button>
            </div>
            <div className="add-button">
              <button>Add</button>
            </div>
          </div> */}
          {/* <button type="submit">Submit</button> */}
        </form>

        {/* FORM RESULT */}
        <Overview
          personalInfoName={this.state.personalInfo.name}
          personalInfoOccupation={this.state.personalInfo.occupation}
          personalInfoNumber={this.state.personalInfo.number}
          personalInfoEmail={this.state.personalInfo.email}
          personalInfoAddress={this.state.personalInfo.address}
          personalInfoIntro={this.state.personalInfo.intro}
        />
        {/* - personal details */}
        {/* - work experience */}
        {/* - education */}
      </div>
    );
  }
}

export default App;
