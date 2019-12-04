import React from 'react'
import {UserService} from "../services/UserService";
import {connect} from "react-redux";
import {setUserAction} from "../reducer/ActionCreaters";
import {Link} from "react-router-dom";

class LoginContainer extends React.Component {

    state = {
        username: '',
        password: ''
    }

    constructor(props) {
        super(props)
        this.userService = UserService.instance
    }

    usernameChanged = event => this.setState({username: event.target.value});
    passwordChanged = event => this.setState({password: event.target.value});

    login = () => {
        this.userService.login(this.state)
            .then(user => {
                console.log(user);
                this.props.setUser(user);
                this.props.history.push('/');
            })
        // .catch(error => alert('Failed to Log In!'))
    };


    render() {
        return (
            <div className="container">
                <h1>Sign In</h1>
                <form>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label" for="username">
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
                        <label className="col-sm-2 col-form-label" for="password">
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

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(setUserAction(user))
})

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
export default Login;
