import React, { Component } from 'react';
// import whatever else you like here
import axios from 'axios';
import moment from 'moment'
import MainContainer from './MainContainer'
// Declare your Component here
class Projects extends Component {
  constructor() {
    super();
    this.state = { projects: [] }
  }
  componentDidMount() {
    axios.get("https://bti425teamsapi.herokuapp.com/projects")
      .then((res) => { this.setState({ projects: res.data, }); })
      .catch((err) => { });
  }
  render() {
    return (
      <MainContainer sidebar='Projects'>
          <h1>&nbsp;Projects</h1>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <td><b> Name </b></td>
                  <td><b> Description </b></td>
                  <td><b> Start Date </b></td>
                  <td><b> End Date </b></td>
                </tr>
              </thead>
              <tbody>
                {this.state.projects.map((projects) => {
                  var start = moment().utc(projects.ProjectStartDate);
                  var startout = start.format('LL');//
                  var end = "n/a";

                  return (
                    <tr key={projects._id}>
                      <td className="col-md-2"> {projects.ProjectName}</td>
                      <td> {projects.ProjectDescription} </td>
                      <td className="col-md-2"> {startout} </td>
                      <td> {end} </td>
                    </tr>
                  );})}
              </tbody>
            </table>
          </div>
        </div>
      </MainContainer>
    );
  }
}

// export the component by name
export default Projects; 