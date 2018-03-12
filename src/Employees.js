import React, { Component } from 'react';
// import whatever else you like here
import axios from 'axios';
import moment from 'moment'
import MainContainer from './MainContainer'
// Declare your Component here
class Employees extends Component{
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
      <MainContainer sidebar='Employees'>
          <h1>&nbsp;Employees</h1>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
            <thead> 
              <tr>
                  <td><b> Name &amp; Position </b></td>
                  <td><b> Address </b></td>
                  <td><b> Phone Number </b></td>
                  <td><b> Hire Date </b></td>
                  <td><b> Salary Bonus </b></td>
                </tr>
              </thead>
              <tbody>

                {this.state.employees.map((employees) => {
                  var out = moment(employees.HireDate);

                  return (
                    <tr key={employees._id}>
                      <td> {employees.FirstName} {employees.LastName} - {employees.Position.PositionName} </td>
                      <td className="col-md-3"> {employees.AddressStreet} {employees.AddressCity} {employees.AddressState} {employees.AddressZip}</td>
                      <td> {employees.PhoneNum} ext: {employees.Extension}</td>
                      <td> {out.format('LL')} </td>
                      <td className="col-md-1"> $ {employees.SalaryBonus} </td>
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
export default Employees; 