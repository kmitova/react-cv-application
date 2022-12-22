import React, { Component } from "react";

class MainForm extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      personalInfo: {
        name: props.name,
        occupation: props.occupation,
      },
    };
  }

  handleChange(e) {
    this.setState({
      personalInfo: {
        name: e.target.value,
      },
    });
    console.log(this.state.personalInfo);
    console.log(e.target.value);
  }

  render() {
    return (
      <form>
        <h2>CV Form</h2>
        <div className="category personal-details">
          <h3>Personal Details</h3>
          <div className="form-group">
            <label htmlFor="">Name:</label>
            <input
              type="text"
              defaultValue="Pamela Beesly"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Occupation:</label>
            <input type="text" value={"Senior Administrator"} />
          </div>
          <div className="form-group">
            <label htmlFor="">Mobile Number:</label>
            <input type="text" value={"01254327788"} />
          </div>
          <div className="form-group">
            <label htmlFor="">Email:</label>
            <input type="email" value={"pamela.beesly@gmail.com"} />
          </div>
          <div className="form-group">
            <label htmlFor="">Address:</label>
            <input type="text" value={"Linden Ave., Scranton, PA"} />
          </div>
          <div className="form-group">
            <label htmlFor="">Introduction:</label>
            <textarea type="text" value={"some text"} />
          </div>
        </div>
        <div className="category work-experience">
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
        </div>
      </form>
    );
  }
}

export default MainForm;
