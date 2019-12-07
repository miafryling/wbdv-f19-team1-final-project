import React from 'react'
import {UserService} from "../services/UserService";
import {Link} from "react-router-dom";

class RegisterContainer extends React.Component {
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        role: ''
    }

    constructor(props) {
        super(props)
        this.userService = UserService.instance;
    }

    usernameChanged = (event) => this.setState({username: event.target.value})
    passwordChanged = (event) => this.setState({password: event.target.value})
    confirmPasswordChanged = (event) => this.setState({confirmPassword: event.target.value})

    register = (e) => {
        e.preventDefault();

        const newUser = {
            username: this.state.username,
            password: this.state.password,
            role: this.state.role
        }

        this.userService.register(newUser)
            .then(user => {
                sessionStorage.setItem('user', JSON.stringify(user));
                this.props.changeUser(user);
                this.props.history.push('/');
            }).catch(error => alert('Failed to Register!'))
    }

    render() {
        let roleElement;
        return (
            <div className="container">
                <h1>Sign Up</h1>
                <h4 className="wbdv-cancel">
                    <Link to='/'>
                        Cancel
                    </Link>
                </h4>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="username">
                            Username </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="username"
                                   placeholder="Username"
                                   value={this.state.username}
                                   onChange={this.usernameChanged}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="password">
                            Password </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="password"
                                   placeholder="Password"
                                   type="password"
                                   value={this.state.password}
                                   onChange={this.passwordChanged}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="verifyPassword">
                            Verify<br/> Password </label>
                        <div className="col-sm-10">
                            <input className="form-control"
                                   id="verifyPassword"
                                   placeholder="Confirm Password"
                                   type="password"
                                   value={this.state.confirmPassword}
                                   onChange={this.confirmPasswordChanged}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" htmlFor="role">
                            Role </label>
                        <div className="col-sm-10">
                            <select value="——"
                                    className="form-control"
                                    ref={node => roleElement = node}
                                    onChange={() => this.setState({role: roleElement.value})}>
                                <option value="admin">Admin</option>
                                <option value="adopter">Adopter</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <Link className="btn btn-primary btn-block"
                                  to='/profile'
                                  onClick={this.register}>
                                Register
                            </Link>
                            <div className="row">
                                <div className="col-6">
                                    <Link to='/login'>Log in</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegisterContainer;
