import React, { Component } from 'react';
// import whatever else you like here
import { Link } from 'react-router-dom';
// Declare your Component here
class SideBar extends Component {
    render() {
        return (
            <div className="col-sm-3 col-md-2  sidebar">
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === 'Overview' ? 'active' : '')}><Link to="/overview">Overview</Link></li>
                </ul>
                <ul className="nav nav-sidebar">
                    <li className={(this.props.highlight === 'Teams' ? 'active' : '')}><Link to="/teams">Teams</Link></li>
                    <li className={(this.props.highlight === 'Employees' ? 'active' : '')}><Link to="/employees">Employees</Link></li>
                    {/* // As a conditional expression...
                    // The value of the 'highlight' property will be passed in... */}
                    <li className={(this.props.highlight === 'Projects' ? 'active' : '')}><Link to="/projects">Projects</Link></li>
                </ul>
            </div>);
    }
}

// export the component by name
export default SideBar; 