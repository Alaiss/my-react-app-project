import React, { Component } from 'react';
// import whatever else you like here
import MainContainer from './MainContainer'
// Declare your Component here
class NotFound extends Component{
  render(){
    return (
        <MainContainer><h2>404 Not Found</h2></MainContainer>
    );
  }
}

// export the component by name
export default NotFound; 