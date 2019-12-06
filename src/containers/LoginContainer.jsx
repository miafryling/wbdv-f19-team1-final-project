import React from 'react'
import {UserService} from "../services/UserService";
import {Link} from "react-router-dom";

class LoginContainer extends React.Component {

    state = {
        username: '',
        password: ''
    }

    constructor(props) {
        super(props)
        this.userService = UserService.instance

        this.login = this.login.bind(this);
    }

    usernameChanged = event => this.setState({username: event.target.value});
    passwordChanged = event => this.setState({password: event.target.value});

    login = (e) => {
        e.preventDefault();

        this.userService.login(this.state.username, this.state.password)
            .then(res => {
                if (res.error) {
                  alert('Incorrect username or password.')
                  return;
                }

                sessionStorage.setItem('user', JSON.stringify(res));
                this.props.changeUser(res);
                this.props.history.push('/');
            })
            .catch(error => alert(error))
    };


    render() {
        return (
            <div className="container">
                <h1>Sign In</h1>
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
                                   value={this.state.password}
                                   onChange={this.passwordChanged}
                                   id="password"
                                   placeholder="Password"
                                   type="password"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label"/>
                        <div className="col-sm-10">
                            <button className="btn btn-primary btn-block" onClick={this.login}>Log in</button>
                            <div className="row">
                                <div className="col-6">
                                    <a href="#">Forgot Password?</a>
                                </div>
                                <div className="col-6">
                                    <Link to="/register"
                                          className='float-right'>
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default LoginContainer;
