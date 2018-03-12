import React, { Component } from 'react';
// import whatever else you like here

// Declare your Component here
class NavBar extends Component{
  render(){
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">BTI425 - Inna Zhogova - Project Portal</a>
            </div>
          </div>
        </nav>
    );
  }
}

// export the component by name
export default NavBar; 