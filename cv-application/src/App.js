import "./App.css";
import React, { Component } from "react";
import MainForm from "./components/MainForm";
import Overview from "./components/Overview";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <h1>CV Application</h1>
        {/* MAIN FORM */}
        <MainForm />
        {/* - personal details */}
        {/* - work experience */}
        {/* - education */}

        {/* FORM RESULT */}
        <Overview />
        {/* - personal details */}
        {/* - work experience */}
        {/* - education */}
      </div>
    );
  }
}

export default App;
