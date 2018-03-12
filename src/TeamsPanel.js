import React, { Component } from 'react';
// import whatever else you like here
import axios from 'axios';
import { Link } from 'react-router-dom';
// Declare your Component here

class TeamsPanel extends Component{
  constructor() {
    super();
    this.state = { teams: [] }
  }
  componentDidMount() {
    axios.get("https://bti425teamsapi.herokuapp.com/teams")
      .then((res) => { this.setState({ teams: res.data, }); })
      .catch((err) => { });
  }
  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Teams</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>

                {this.state.teams.map((teams) => {
                  return (
                    <tr key={teams._id}>
                      <td> {teams.TeamName}</td>
                      <td> {teams.Employees.length} Employees</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        <Link to="/teams" className="btn btn-primary form-control">Teams</Link>
        </div>
      </div>
    );
  }
}

// export the component by name
export default TeamsPanel; 