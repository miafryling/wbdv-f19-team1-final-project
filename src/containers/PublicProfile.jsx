import React from 'react'
import { UserService } from "../services/UserService";
import { Link } from "react-router-dom";

class PublicProfile extends React.Component {
  constructor(props) {
    super(props);
    this.userService = UserService.instance;
    this.state = {
      user: null
    };
    this.userService.findUserById(this.props.match.params.userId)
      .then(user => this.setState({ user }));
  }

  render() {
    if (!this.state.user)
      return <div></div>;
    return (
      <div className="container">
        <h1>{this.state.user.username}</h1>
        <div className="row">
          <div className="col-sm-2">
            Name:
          </div>
          <div className="col-sm-10">
            {`${this.state.user.firstName} ${this.state.user.lastName}`}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            Role:
          </div>
          <div className="col-sm-10">
            {this.state.user.role}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-2">
            Joined on:
          </div>
          <div className="col-sm-10">
            {
              (() => {
                let date = new Date(this.state.user.createdAt);
                const monthNames = [
                  "January", "February", "March",
                  "April", "May", "June", "July",
                  "August", "September", "October",
                  "November", "December"
                ];
                return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
              })()
            }
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h4>Liked Animals</h4>
            {
              this.state.user.animals.map(x => <div className="row"><Link to={`/animals/${x}`}>{x}</Link></div>)
            }
          </div>
          <div className="col-sm-6">
            <h4>Friends</h4>
          </div>
        </div>
      </div>
    )
  }
}

export default PublicProfile;
