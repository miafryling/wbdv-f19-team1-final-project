import React from 'react'
import {UserService} from "../services/UserService";
import {Link} from "react-router-dom";

class ProfileContainer extends React.Component {

    state = {
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        role: ''
    };

    constructor(props) {
        super(props);
        this.userService = UserService.instance;
    }

    componentDidMount() {
        const user = JSON.parse(sessionStorage.getItem('user'));
        this.setState({
            username: user.username,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role
        })
    }

    passwordChanged = event => this.setState({password: event.target.value})
    firstNameChanged = event => this.setState({firstName: event.target.value})
    lastNameChanged = event => this.setState({lastName: event.target.value})

    logout = () => {
        sessionStorage.setItem('user', null);
        this.props.changeUser(null);
        this.props.history.push('/login');
    };

    updateUser = (e) => {
        e.preventDefault();
        const userId = JSON.parse(sessionStorage.getItem('user'))._id;
        console.log(this.state);
        this.userService.updateUser(userId, this.state)
            .then(newUser => {
                sessionStorage.setItem('user', JSON.stringify(newUser));
                this.props.changeUser(newUser);
                alert("Update Profile Successfully!");
            })
    };

    render() {
        let roleElement;
        return (
            <div className="container">
                <h1>Profile</h1>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="usernameFld">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="usernameFld"
                                   placeholder="username"
                                   value={this.state.username}
                                   readOnly="readonly"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="passwordFld">
                            Password </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="passwordFld"
                                   value={this.state.password}
                                   onChange={this.passwordChanged}
                                   placeholder="password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="firstNameFld">
                            First Name </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="firstNameFld"
                                   value={this.state.firstName}
                                   onChange={this.firstNameChanged}
                                   placeholder="First Name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="lastNameFld">
                            Last Name </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="lastNameFld"
                                   value={this.state.lastName}
                                   onChange={this.lastNameChanged}
                                   placeholder="Last Name"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="lastNameFld">
                            Role </label>
                        <div className="col-sm-10">
                            <select value={this.state.role}
                                    className="form-control"
                                    ref={node => roleElement = node}
                                    onChange={() => this.setState({role: roleElement.value})}>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <button className="btn btn-success btn-block"
                                    onClick={this.updateUser}>
                                Update
                            </button>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <Link className="btn btn-danger btn-block" to='/' onClick={this.logout}>Logout</Link>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default ProfileContainer;
