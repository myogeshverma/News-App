import React from "react";
import {connect} from "react-redux";
import { push } from "react-router-redux";
import {Navbar} from 'react-materialize'

let NavigationComponent = (props) => (
<Navbar brand='News App' right>

    <ul>
    <li><a to="/" onClick={props.navigateTo.bind(this, '/')}>Home</a></li>
    <li><a to="/dashboard" onClick={props.navigateTo.bind(this, '/dashboard')}>Dashboard</a></li>
    </ul>

</Navbar>

)

const state = (state, ownProps = {}) => {
  return {
    location: state.location
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateTo: (location) => {
    dispatch(push(location));
  }
});

export default connect(state, mapDispatchToProps)(NavigationComponent);