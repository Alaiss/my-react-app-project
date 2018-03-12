import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import whatever else you like here
import axios from 'axios';
import moment from 'moment'
// Declare your Component here
class ProjectsPanel extends Component {
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
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Projects</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>

                {this.state.projects.map((projects) => {
                  var start = moment(projects.ProjectStartDate);
                  return (
                    <tr key={projects._id}>
                      <td> {projects.ProjectName}</td>
                      <td> Active {moment().diff(start,'days')} Days</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Link to="/projects" className="btn btn-primary form-control">Projects</Link>
        </div>
      </div>
    );
  }
}

// export the component by name
export default ProjectsPanel; 