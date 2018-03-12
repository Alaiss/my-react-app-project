import React, { Component } from 'react';
// import whatever else you like here
import axios from 'axios';
import { Link } from 'react-router-dom';
// Declare your Component here
class EmployeesPanel extends Component{
  constructor() {
    super();
    this.state = { employees: [] }
  }
  componentDidMount() {
    axios.get("https://bti425teamsapi.herokuapp.com/employees")
      .then((res) => { this.setState({ employees: res.data, }); })
      .catch((err) => { });
  }
  render(){
    return (
      
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Employees</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>

                {this.state.employees.map((employees) => {
                  return (
                    <tr key={employees._id}>
                      <td> {employees.FirstName} {employees.LastName}</td>
                      <td> {employees.Position.PositionName} </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <Link to="/employees" className="btn btn-primary form-control">Employees</Link>
          </div>
      </div>
    );
  }
}

// export the component by name
export default EmployeesPanel; 