import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { UserService } from "../services/UserService";

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.userService = UserService.instance;
    this.state = {
      searchText: 'username',
      users: []
    }

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.search = this.search.bind(this)
  }

  onSearchTextChange(e) {
    this.setState({ searchText: e.target.value });
  }

  search(e) {
    e.preventDefault();

    this.userService.searchForUsers(this.state.searchText)
      .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <input className="form-control" type="text" value={this.state.searchText} onChange={this.onSearchTextChange} />
          </div>
          <div className="col-sm-6">
            <button className="btn btn-primary form-control" onClick={this.search}>Search</button>
          </div>
        </div>
        {
          this.state.users.map(user => {
            return (
              <div className="row">
                <Link to={`/users/${user._id}`}>{user.username}</Link>
              </div>
            );
          })
        }
      </div>
    )
  }
}
