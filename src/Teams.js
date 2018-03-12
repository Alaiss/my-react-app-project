import React, { Component } from 'react';
// import whatever else you like here
import axios from 'axios';
import MainContainer from './MainContainer'
// Declare your Component here

class Teams extends Component {
  constructor() {
    super();
    this.state = { teams: [] }
  }
  componentDidMount() {
    axios.get("https://bti425teamsapi.herokuapp.com/teams")
      .then((res) => { this.setState({ teams: res.data, }); })
      .catch((err) => { });
  }
  render() {
    return (
      <MainContainer sidebar='Teams'>
          <h1>&nbsp;Teams</h1>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <td><b> Name </b></td>
                  <td><b> Projects </b></td>
                  <td><b> Employees </b></td>
                  <td><b> TeamLead </b></td>
                </tr>
              </thead>
              <tbody>

                {this.state.teams.map((teams) => {
                  return (
                    <tr key={teams._id}>
                      <td> {teams.TeamName}</td>
                      <td> 
                        <ul>
                          <li>{teams.Projects[0].ProjectName}</li>
                          <li>{teams.Projects[1].ProjectName}</li>
                        </ul>
                      </td>
                      <td> {teams.Employees.length} Employees </td>
                      <td> {teams.TeamLead.FirstName} {teams.TeamLead.LastName} </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </MainContainer>
    );
  }
}

// export the component by name
export default Teams; 