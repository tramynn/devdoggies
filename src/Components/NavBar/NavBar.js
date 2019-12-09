import React, { Component } from "react";
import { connect } from "react-redux";
import { getSession, logoutUser } from "../../redux/reducers/authReducer";
import Register from "../Register/Register";
import UserProfile from "../UserProfile/UserProfile";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.getSession();
  }

  handleLogout = () => {
    this.props.logoutUser();
  };

  render() {
    return (
      <div>
        <div>
          <h1>DevDoggies</h1>
        </div>
        {/* Guest Web */}
        <nav>
          <ul>
            <li>Dogalogue</li>
            <li>Guide</li>
            <li>
              <Register />
            </li>
          </ul>
        </nav>
        {/* Guest Mobile */}
        <nav>
          <ul>
            <li>Dogalogue</li>
            <li>Guide</li>
            <li>
              <Register />
            </li>
          </ul>
        </nav>
        {/* User Web */}
        <nav>
          <ul>
            <li>Dogalogue</li>
            <li>Guide</li>
            <hr />
            <li>Hi, Guest</li>
            <li>
              <UserProfile />
            </li>
            <li>Logout</li>
          </ul>
        </nav>
        {/* User Mobile */}
        <nav>
          <ul>
            <li>Dogalogue</li>
            <li>Guide</li>
            <hr />
            <li>Hi, Guest</li>
            <li>
              <UserProfile />
            </li>
            <li>Logout</li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    user_id: reduxState.authReducer.user_id,
    first_name: reduxState.authReducer.first_name
  };
};

export default connect(mapStateToProps, {
  getSession,
  logoutUser
})(NavBar);
