import "./App.css";
import React, { Component } from "react";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);

    this.loremText =
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores.";

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeOccupation = this.handleChangeOccupation.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleChangeIntro = this.handleChangeIntro.bind(this);

    this.addWorkForm = this.addWorkForm.bind(this);
    this.handleWorkForm = this.handleWorkForm.bind(this);
    this.removeWorkFields = this.removeWorkFields.bind(this);

    this.addEduForm = this.addEduForm.bind(this);
    this.handleEduForm = this.handleEduForm.bind(this);
    this.removeEduFields = this.removeEduFields.bind(this);

    this.state = {
      personalInfo: {
        name: "Pamela Beesly",
        occupation: "Senior Adminstrator",
        number: "114598662",
        email: "pam.beesly@gmail.com",
        address: "Linden Ave., Scranton PA",
        intro: this.loremText,
      },
      workFields: [
        {
          company: "Dunder Mifflin",
          position: "Receptionist",
          start: "October 2004",
          end: "June 2008",
        },
      ],
      educationFields: [
        {
          course: "Applied and Digital Art",
          school: "Pratt Institute",
          startE: "2007",
          endE: "2007",
        },
      ],
    };
  }

  removeWorkFields(i) {
    let workFields = this.state.workFields;
    workFields.splice(i, 1);
    this.setState({ workFields });
  }

  removeEduFields(i) {
    let educationFields = this.state.educationFields;
    educationFields.splice(i, 1);
    this.setState({ educationFields });
  }

  handleWorkForm(i, e) {
    let workFields = this.state.workFields;
    workFields[i][e.target.name] = e.target.value;
    this.setState({ workFields });
  }

  handleEduForm(i, e) {
    let educationFields = this.state.educationFields;
    educationFields[i][e.target.name] = e.target.value;
    this.setState({ educationFields });
  }

  addWorkForm(e) {
    e.preventDefault();
    this.setState({
      workFields: [
        ...this.state.workFields,
        { company: "", position: "", start: "", end: "" },
      ],
    });
  }

  addEduForm(e) {
    e.preventDefault();
    this.setState({
      educationFields: [
        ...this.state.educationFields,
        { course: "", school: "", startE: "", endE: "" },
      ],
    });
  }

  handleChangeName(e) {
    this.setState({
      personalInfo: { ...this.state.personalInfo, name: e.target.value },
    });
  }

  handleChangeOccupation(e) {
    this.setState({
      personalInfo: { ...this.state.personalInfo, occupation: e.target.value },
    });
  }

  handleChangeNumber(e) {
    this.setState({
      personalInfo: { ...this.state.personalInfo, number: e.target.value },
    });
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
        <div className="main">
          {/* CV FORM */}
          <form>
            <h2>CV Form</h2>
            <div className="category personal-details">
              <h3>Personal Details</h3>
              <div className="form-group">
                <label htmlFor="">Name:</label>
                <input
                  type="text"
                  value={this.state.personalInfo.name || ""}
                  name="name"
                  onChange={this.handleChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="">Occupation:</label>
                <input
                  type="text"
                  value={this.state.personalInfo.occupation}
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
                ></textarea>
              </div>
            </div>
            <div className="category work-experience">
              <h3>Work Experience</h3>
              {this.state.workFields.map((el, i) => {
                return (
                  <div className="section work-experience-section" key={-i}>
                    <div className="form-group">
                      <label htmlFor="">Company:</label>
                      <input
                        name="company"
                        type="text"
                        value={el.company || ""}
                        onChange={(e) => this.handleWorkForm(i, e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Position:</label>
                      <input
                        name="position"
                        type="text"
                        value={el.position || ""}
                        onChange={(e) => this.handleWorkForm(i, e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Start Date:</label>
                      <input
                        name="start"
                        type="text"
                        value={el.start || ""}
                        onChange={(e) => this.handleWorkForm(i, e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">End Date:</label>
                      <input
                        name="end"
                        type="text"
                        value={el.end || ""}
                        onChange={(e) => this.handleWorkForm(i, e)}
                      />
                    </div>

                    <button
                      type="button"
                      className="button remove"
                      onClick={() => this.removeWorkFields(i)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}

              <div className="add-button">
                <button onClick={this.addWorkForm}>Add</button>
              </div>
            </div>
            <div className="category education">
              <h3>Education</h3>
              {this.state.educationFields.map((el, i) => {
                return (
                  <div className="category education-section" key={i}>
                    <div className="form-group">
                      <label htmlFor="">Course / Program:</label>
                      <input
                        type="text"
                        name="course"
                        value={el.course || ""}
                        onChange={(e) => this.handleEduForm(i, e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">School:</label>
                      <input
                        type="text"
                        value={el.school || ""}
                        name="school"
                        onChange={(e) => this.handleEduForm(i, e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">Start Date:</label>
                      <input
                        type="text"
                        name="startE"
                        value={el.startE || ""}
                        onChange={(e) => this.handleEduForm(i, e)}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="">End Date:</label>
                      <input
                        type="text"
                        name="endE"
                        value={el.endE || ""}
                        onChange={(e) => this.handleEduForm(i, e)}
                      />
                    </div>
                    <button
                      type="button"
                      className="button remove"
                      onClick={() => this.removeEduFields(i)}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
              <div className="add-button">
                <button onClick={this.addEduForm}>Add</button>
              </div>
            </div>
          </form>
          {/* FORM RESULT */}
          <Overview
            personalInfo={this.state.personalInfo}
            workInfo={this.state.workFields}
            eduInfo={this.state.educationFields}
          />
        </div>
      </div>
    );
  }
}

export default App;
