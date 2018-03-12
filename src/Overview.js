import React, { Component } from 'react';
// import whatever else you like here
import ProjectsPanel from './ProjectsPanel'
import TeamsPanel from './TeamsPanel';
import EmployeesPanel from './EmployeesPanel'
import Projects from './Projects'
import MainContainer from './MainContainer'
// Declare your Component here
class Overview extends Component {
  render() {
    return (
      <MainContainer sidebar='Overview'>
      <div className="Container">
        <h1 className="page-header">Overview</h1>
        <div className="row">
          <div className="col-md-4"> <ProjectsPanel/> </div>
          <div className="col-md-4"> <TeamsPanel/> </div>
          <div className="col-md-4"> <EmployeesPanel/> </div>
        </div>
      </div>
      </MainContainer>
    );
  }
}

// export the component by name
export default Overview; 